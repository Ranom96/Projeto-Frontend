import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { addExame } from '../../services/ExamesService';
import CampoTexto from '../CampoTexto';
import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import Botao from '../Botao';
import './exame.css'

const Formulario = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { userId } = useContext(UserContext);

  const validateSchema = {
    required: {
      value: true,
      message: 'Campo obrigatório',
    },
    minLength: {
      value: 3,
      message: 'Campo deve ter no mínimo 3 caracteres',
    },
  };
  const validateSchemaOpcional = {
    required: {
      value: false,
    },
  };

  async function onSubmit(data) {
    await addExame(data, userId);
    reset();
    navigate('/exames');
  }
  return (
    <>
      <form className="container-form-exame">
        <div className="container-exame">
          <CampoTexto
            type="text"
            label="EXAME"
            campo="texto"
            item="exame"
            name="exame"
            placeholder="Digite aqui o nome do exame..."
            register={register}
            validateSchema={validateSchema}
            errors={errors}
          />
          <div className="texto-exame">
            <CampoTexto
              type="text"
              label="CLÍNICA"
              campo="texto"
              name="clinica"
              item="clinica"
              placeholder="Nome da clínica..."
              register={register}
              validateSchema={validateSchema}
              errors={errors}
            />

            <CampoTexto
              type="text"
              label="LOCAL"
              campo="texto"
              item="local"
              name="local"
              placeholder="Informe o local da consulta..."
              register={register}
              validateSchema={validateSchema}
              errors={errors}
            />
          </div>
          <div className="texto-exame">
            <CampoTexto
              type="text"
              label="DIA / MÊS"
              campo="texto"
              item="dia"
              name="dia"
              placeholder="Digite o dia do exame..."
              register={register}
              validateSchema={validateSchema}
              errors={errors}
            />
            <CampoTexto
              type="text"
              label="HORÁRIO"
              campo="texto"
              item="horario"
              name="horario"
              placeholder="Digite o horário do exame..."
              register={register}
              validateSchema={validateSchema}
              errors={errors}
            />
          </div>
          <div className="btn-holder">
            <Botao botao="CADASTRAR" classe="cadastrar" handleClick={handleSubmit(onSubmit)} type="submit" />
          </div>
        </div>
      </form>
    </>
  );
};

export default Formulario;
