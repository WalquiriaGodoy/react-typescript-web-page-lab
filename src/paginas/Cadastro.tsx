import Cabecalho from './../Componentes/Cabecalho';
import Rodape from '../Componentes/Rodape';
import RegisterForm from './../Componentes/Formulário/Cadastro';

function Cadastro() {
  return (
    <section className='conteudo'>
      <Cabecalho />
      <RegisterForm />
      <Rodape />
    </section>
  );
}

export default Cadastro;
