import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";

import api from "../../services/api";
import logoImg from "../../assets/logo.svg";
import "./styles.css";

export default function OngProfile() {
  const ongName = localStorage.getItem("ongName");
  const ongId = localStorage.getItem("ongId");
  const [incidents, setIncidents] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function loadData() {
      const response = await api.get("/ong-incidents", {
        headers: { Authorization: ongId }
      });

      setIncidents(response.data);
    }

    loadData();
  }, [ongId]);

  async function handleDelete(item) {
    const resp = await api.delete(`/incidents/${item.id}`, {
      headers: { Authorization: ongId }
    });
    if (resp.status === 204) {
      const lista = incidents.filter(incident => incident.id !== item.id);
      setIncidents(lista);
    } else {
      alert("Não foi possível remover o caso selecionado");
    }
  }

  function handleLogout() {
    localStorage.clear();
    history.push("/");
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be the Hero" />

        <span>Bem-vindo(a), {ongName}</span>
        <Link className="button" to="/incidents/new">
          Cadastrar novo caso
        </Link>

        <button onClick={handleLogout}>
          <FiPower size={18} color="#e02041" />
        </button>
      </header>

      <h1>Casos cadastrados</h1>

      <ul>
        {incidents.map(item => (
          <li key={item.id}>
            <strong>CASO:</strong>
            <p>{item.title}</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{item.description}</p>

            <strong>VALOR:</strong>
            <p>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
              }).format(item.value)}
            </p>

            <button type="button" onClick={() => handleDelete(item)}>
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
