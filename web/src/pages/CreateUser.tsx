import React, { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../services/api";
import Sidebar from "../components/Sidebar";
import '../styles/pages/createUser.css';

export default function CreateUser() {

    const history = useHistory()

  const [name, setName] = useState('')
  const [cpf, setCpf] = useState('')
  const [bloodType, setBloodType] = useState('')
  const [telephone, setTelephone] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const data = new FormData()

    data.append('name', name)
    data.append('cpf', cpf)
    data.append('bloodType', bloodType)
    data.append('telephone', telephone)
    data.append('city', city)
    data.append('state', state)

    
   await api.post('users/create', data)

    alert('Cadastro realizado com sucesso!!')
    history.push('/app')
  }

  return (
    <div id="page-create-user">

    <Sidebar />
    <main>
        <form className="create-user-form" onSubmit={handleSubmit}>
          <fieldset>
          <legend>Dados</legend>
          <div className="input-block">
              <label htmlFor="name">Nome:</label>
              <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="cpf">CPF:</label>
              <input
                id="cpf"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="bloodType">Tipo Sanguíneo:</label>
              <input
                id="bloodType"
                value={bloodType}
                onChange={(e) => setBloodType(e.target.value)}
              />
            </div>
            </fieldset>
          <fieldset>
            <legend>Contato</legend>

            <div className="input-block">
              <label htmlFor="telephone">Telefone:</label>
              <input
                id="telephone"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="city">Cidade:</label>
              <input
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="state">Estado:</label>
              <input
                id="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>
          </fieldset>

          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </form>
      </main>
    </div>
  );
}