import React, { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api";

import "./styles.css";
import logoImg from "../../assets/logo.svg";

export default function NewIncident() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(0);

  const history = useHistory();
  const ongId = localStorage.getItem("ongId");

  async function handleSubmit(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value
    };

    try {
      const resp = await api.post("/incidents", data, {
        headers: { Authorization: ongId }
      });

      history.push("/ong-profile");
    } catch (error) {
      alert(`Erro: ${error.message}`);
    }
  }

  return (
    <div className="incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be the Hero" />

          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>

          <Link className="back-link" to="/ong-profile">
            <FiArrowLeft size={16} color="#e02041" />
            voltar para home
          </Link>
        </section>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Titulo do caso"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
          ></textarea>
          <input
            placeholder="Valor em reais"
            value={value}
            onChange={e => setValue(e.target.value)}
          />

          <div className="button-groups">
            <Link className="button-cancel" to="/ong-profile">
              Cancelar
            </Link>
            <button className="button" type="submit">
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
