import React, { useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import { Title, Form, Repositories } from "./styles";
import api from "../../services/api";

const Dashboard = () => {
  const [newRepository, setNewRepository] = useState(""); //sobre o input
  const [repositories, setRepositories] = useState([]);

  //adcionando um novo repositório através do consumo da api externa e salvando o novo repositório no estado novo (newRepostorie):
  async function AddRepository(event){
    event.preventDefault();

    const response = await api.get(`repos/${newRepository}`);

    const repository = response.data;
    setRepositories([...repositories, repository]);
    setNewRepository(" ");
  }

  return (
    <>
      <Title>Explore repositórios no GitHub</Title>

      <Form onSubmit={AddRepository}>
        <input
          value={newRepository}
          onChange={(e) => setNewRepository(e.target.value)}
          placeholder="Digite o nome do repositório..."
        />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        {repositories.map((repository) => (
          <a key={repository.full_name} href="teste">
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
