import { Link } from 'react-router-dom';
import Botao from '../../components/Botao';
import Formulario from '../../components/exames/Formulario';

const CadastrarExames = () => {
  return (
    <>
      <div className="layout-remedios">
        <h1>Cadastre seus exames no mural</h1>
        <h3>Basta preencher os campos e clicar em "Cadastrar"</h3>
        <Formulario />

        <div className="btn-holder">
          <Link to="/exames">
            <Botao botao="VOLTAR" classe="voltar" />
          </Link>
          <Link to="/exames/delete">
            <Botao botao="DELETAR" classe="delete" />
          </Link>
        </div>
        <div className="imagem-exames"></div>
      </div>
    </>
  );
};

export default CadastrarExames;
