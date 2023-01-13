import Cabecalho from './../Componentes/Cabecalho';
import Rodape from '../Componentes/Rodape';
import FormMatricula from './../Componentes/Formulário/Matricula/formMatricula';

function Matricula() {
  return (
    <section className='conteudo'>
      <Cabecalho />
      <FormMatricula submitText='Fazer Matricula' />
      <Rodape />
    </section>
  );
}

export default Matricula;
