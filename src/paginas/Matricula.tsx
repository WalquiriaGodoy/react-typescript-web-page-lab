import Cabecalho from './../Componentes/Cabecalho';
import Rodape from '../Componentes/Rodape';
import FormMatricula from './../Componentes/Formulário/Matricula/formMatricula';
import { ContentContainer } from './styles';

function Matricula() {
  return (
    <section className='conteudo'>
      <Cabecalho />
      <ContentContainer>
        <FormMatricula submitText='Fazer Matricula' />
      </ContentContainer>
      <Rodape />
    </section>
  );
}

export default Matricula;
