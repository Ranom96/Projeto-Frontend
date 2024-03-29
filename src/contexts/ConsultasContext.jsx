import { createContext, useState } from 'react';
import { addConsulta, listConsultas, removerConsulta } from '../services/ConsultasService';

const ConsultasContext = createContext({
  consultas: [],
  listConsultas: () => {},
  addConsulta: () => {},
  removerConsulta: () => {},
});

export function ConsultasContextProvider(props) {
  const [minhasConsultas, setMinhasConsultas] = useState([]);

  async function inserir(consulta) {
    try {
      await addConsulta(consulta);
      setMinhasConsultas([...minhasConsultas, consulta]);
    } catch (err) {
      throw Error(err.message);
    }
  }

  async function listar() {
    try {
      const data = await listConsultas();
      setMinhasConsultas(await data);
    } catch (err) {
      throw Error(err.message);
    }
  }

  async function remover(key) {
    try {
      await removerConsulta(key);
      setMinhasConsultas((valorAntigo) => valorAntigo.filter((consulta) => consulta.id !== key));
    } catch (err) {
      throw Error(err.message);
    }
  }

  const contexto = {
    consultas: minhasConsultas,
    addConsulta: inserir,
    listConsultas: listar,
    removerConsulta: remover,
  };

  return <ConsultasContext.Provider value={contexto}>{props.children}</ConsultasContext.Provider>;
}

export default ConsultasContext;
