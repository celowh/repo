import styled from "styled-components";

export const ContainerBody = styled.div`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
  margin-top: 100px;
  align-items: center;
  gap: 2rem;

  input {
    width: 80%;
    height: 50px;
    font-size: 1.2rem;
    padding: 0 20px;
    border: 0;
    border-radius: 5px;
  }

  button {
    width: 20%;
    height: 50px;
    font-size: 1.2rem;
    padding: 0 20px;
    border: 0;
    border-radius: 5px;
    background: #039e03;
    cursor: pointer;
    transition: 0.2s;
    color: #fff;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const ContainerRepo = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  width: 100%;
`;
export const Repo = styled.div`
  width: 48.5%;
  background: #fff;
  color: #333;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 5px;
  height: 350px;
  gap: 1.5rem;

  span {
    display: flex;
    align-items: center;
    gap: 1rem;

    h1 {
      color: #039e03;
    }
  }

  p {
    color: #555;
    font-size: 1.1rem;
  }
`;
export const ContainerImage = styled.div`
  width: 100px;
  img {
    width: 100%;
    border-radius: 100%;
  }
`;
