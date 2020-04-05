import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

import api from "../../services/api";

import "./styles.css";
import heroImg from "../../assets/heroes.png";
import logoImg from "../../assets/logo.svg";

export default function Logon() {
  const [id, setId] = useState("");

  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const resp = await api.post("/sessions", { id });

      const { name } = resp.data;

      localStorage.setItem("ongId", id);
      localStorage.setItem("ongName", name);

      history.push("/ong-profile");
    } catch (error) {
      alert("Falha no login. Tente novamente.");
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be the Hero" />

        <form onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>
          <input
            placeholder="Sua ID"
            valye={id}
            onChange={e => setId(e.target.value)}
          />
          <button className="button" type="submit">
            Entrar
          </button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={heroImg} alt="Heroes" />
    </div>
  );
}
