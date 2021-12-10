
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi'
import './styles.css';

import api from './services/api';

function App() {

  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});

  async function handleSearch() { //funcao para mostrar o que tem dentro do estado no alert

    if (input === ''){
      alert("Preencha o cep!")
      return;
    }

    try {
      const response = await api.get(`${input}/json`); //uso o await para esperar passar a requisição para a linha de baixo 
     setCep(response.data) // vai traser o endereço que quero
      setInput(""); // zerando o input

    } catch {
      alert("erro ao buscar"); // alerta de erro
      setInput("") //depois do alerta volta o valor do input para vazio
    }
  }

  return (
    <div className="container">
      <h1 className="title"> Buscador CEP</h1>

      <div className="containerInput">
        <input
          type="text"
          placeholder="digite seu cep..." // o texto que fica dentro do input quando nada ainda foi digitado
          value={input} //valor do input
          onChange={(e) => setInput(e.target.value)} //e.taget.value me da o acesso ao que esta sendo digitado no input e passo o novo valor pra useState Input


        />

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color='#FFFF' />
        </button>

      </div>

      {Object.keys(cep).length > 0 && (
      <main className="main">
        <h2> CEP: {cep.cep}</h2>

        <span>{cep.logradouro}</span>
        <span> Complemento:{cep.complemento}</span>
        <span>{cep.bairro}</span>
        <span> {cep.localidade} - {cep.uf}</span>

      </main>
      )}

    </div>
  );
}

export default App;
