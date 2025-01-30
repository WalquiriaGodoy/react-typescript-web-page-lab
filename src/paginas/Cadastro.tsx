import Header from '../Componentes/Header';
import Rodape from '../Componentes/Rodape';
import RegisterForm from './../Componentes/Formulário/Cadastro';

function Cadastro() {
  return (
    <section className='conteudo'>
      <Header />
      <RegisterForm />
      <Rodape />
    </section>
  );
}

export default Cadastro;
