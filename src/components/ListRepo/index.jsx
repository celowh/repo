import { useState } from "react";
import {
  ContainerBody,
  Form,
  ContainerRepo,
  Repo,
  ContainerImage,
} from "./styles.js";
import { FiTrash2 } from "react-icons/fi";
import { api } from "../../service/api";
import { toast } from "react-toastify";

export function ListRepo() {
  const [input, setInput] = useState("");
  const [repositories, setRepositories] = useState([]);
  async function handleAddRepository(e) {
    e.preventDefault();

    //description
    //full_name
    //owner: avatar_url

    try {
      const response = await api.get(`repos/${input}`);
      const data = response.data;
      const isExists = repositories.find(
        (repository) => repository.full_name === data.full_name,
      );

      if (isExists) {
        toast.warn("Repositório já adicionado");
        return;
      }

      setRepositories([...repositories, data]);
      toast.success("Repositório adiconado com sucesso!");
    } catch {
      toast.error("Repositório inexistente");
    }
  }

  function handleDeleteRepository(repositoryName) {
    const repositoryDeleted = repositories.filter((repository) => {
      return repository.full_name !== repositoryName;
    });

    setRepositories(repositoryDeleted);
    toast.warn(`O repositório ${repositoryName} foi excluído!`);
  }

  return (
    <ContainerBody>
      <Form onSubmit={handleAddRepository}>
        <input
          type="text"
          placeholder="Exemplo: Usuário/Repositório"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add</button>
      </Form>

      <ContainerRepo>
        {repositories.map((repository) => (
          <Repo key={repository.full_name}>
            <ContainerImage>
              <img
                src={repository.owner.avatar_url}
                alt={repository.owner.login}
              />
            </ContainerImage>
            <span>
              <h1>{repository.full_name}</h1>
              <FiTrash2
                color="#FF0000FF"
                fontSize="1.5rem"
                cursor="pointer"
                onClick={() => handleDeleteRepository(repository.full_name)}
              />
            </span>
            <p>{repository.description}</p>
          </Repo>
        ))}
      </ContainerRepo>
    </ContainerBody>
  );
}
