import { Link } from 'react-router-dom';
import Botao from '../../components/Botao';

import TabelaConsulta from '../../components/consultas/Tabela';

const Consultas = () => {
  return (
    <>
      <div className="layout-consultas">
        <h1>Suas consultas do dia</h1>
        <TabelaConsulta />
        <div className="btn-holder">
          <Link to="/consultas/cadastro">
            <Botao botao="CADASTRAR" classe="cadastro" />
          </Link>
          <Link to="/consultas/delete">
            <Botao botao="DELETAR" classe="delete" />
          </Link>
        </div>
        <div className="imagem-consultas"></div>
      </div>
    </>
  );
};

export default Consultas;
