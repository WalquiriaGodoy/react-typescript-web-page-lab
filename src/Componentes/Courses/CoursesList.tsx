import { GirosTradicionaisNamedImage } from '../images/CourseNamedImages/GirosTradicionaisNamedImage';
import { GirosDeCincoPisadasNamedImage } from '../images/CourseNamedImages/GirosDeCincoPisadasNamedImage';
import { IntroducaoAoForroNamedImage } from '../images/CourseNamedImages/IntroduçãoAoForroNamedImage';
import { CaminhadasEGirosNamedImage } from '../images/CourseNamedImages/CaminhadasEGirosNamedImage';
import { MusicalidadeEConexaoNamedImage } from '../images/CourseNamedImages/MusicalidadeEConexaoNamedImage';
import { SacadasEPioesNamedImage } from '../images/CourseNamedImages/SacadasEPioesNamedImage';
import { CorporalDoEstiloRootsNamedImage } from '../images/CourseNamedImages/CorporalDoEstiloRootsNamedImage';
import { TecnicasEVariacoesNamedImage } from '../images/CourseNamedImages/TecnicasEVariacoesNamedImage';

interface Course {
  key: string;
  name: string;
  children: React.ReactNode;
  description: string;
  avaliable: boolean;
  dayOfWeek?: string;
  firstDayOfClass?: string;
  startTime?: string;
  endTime?: string;
  startDate?: string;
  endDate?: string;
  price?: number;
}

export const coursesList: Course[] = [
  {
    key: 'Img1',
    name: 'Introdução ao Forró',
    children: <IntroducaoAoForroNamedImage />,
    description: `O Curso de Introdução ao Forró é ideal para quem nunca dançou e quer aprender desde o começo. Ele oferece uma base sólida, ajudando os iniciantes a desenvolverem suas habilidades de forma gradual e confiante. \n Para quem já tem alguma experiência, o curso também é uma excelente escolha. Ele permite que os alunos aprimorem sua técnica e sigam uma metodologia completa, garantindo um aprendizado mais estruturado e de qualidade.`,
    avaliable: false,
  },
  {
    key: 'Img2',
    name: 'Giros Tradicionais',
    children: <GirosTradicionaisNamedImage />,
    description: `O Curso de Giros Tradicionais é perfeito para quem já tem experiência no Forró e deseja melhorar os giros mais usados no Forró Universitário. O curso foca nos giros mais tradicionais dessa dança, garantindo que os alunos ganhem confiança e fluidez nos movimentos. \n Além disso, é uma ótima opção para aqueles que já concluíram o Curso de Introdução ao Forró ou que já dominam os passos básicos, oferecendo um próximo passo natural para quem quer continuar evoluindo na dança.`,
    avaliable: false,
  },
  {
    key: 'Img3',
    name: 'Musicalidade e Conexão',
    children: <MusicalidadeEConexaoNamedImage />,
    description:
      'O Curso de Musicalidade e Conexão é ideal para quem já domina o Forró Universitário e os Giros Tradicionais, buscando maior fluidez na dança. O curso aprofunda a conexão com o par e com a música, tornando os movimentos mais naturais e sincronizados. \n Os alunos estudam temas como frases musicais, compasso, ritmo e cadência musical, aprendendo a adaptar e variar os passos conforme o ritmo e a melodia. Isso enriquece a dança, trazendo maior expressividade e sensibilidade musical.',
    avaliable: false,
  },
  {
    key: 'Img4',
    name: 'Giros de Cinco Pisadas',
    children: <GirosDeCincoPisadasNamedImage />,
    description:
      'O Curso de Repertório de 5 Pisadas é voltado para quem já dança Forró Universitário e quer diversificar seu repertório. O curso foca em técnicas diferenciadas de marcação das pisadas e na dinâmica dos movimentos, oferecendo novos padrões para enriquecer a dança. \n Os alunos aprenderão a aplicar essas cinco pisadas de forma criativa, ampliando suas opções e trazendo mais variedade e sofisticação para sua performance no Forró.',
    avaliable: false,
  },
  {
    key: 'Img5',
    name: 'Caminhadas e Giros do Roots',
    children: <CaminhadasEGirosNamedImage />,
    description:
      'O Curso de Caminhadas e Giros do Roots é para quem já dança Forró Universitário e quer mergulhar no Forró Estilo Roots. O curso explora a origem desse estilo e ensina movimentos tradicionais como caminhadas, travas e o giro paulista, além de suas variações. \n Este estilo vem crescendo em popularidade entre os forrozeiros do Sudeste e ganhando espaço no meio. Os alunos terão a oportunidade de aprender e praticar essas técnicas, trazendo um novo nível de autenticidade e tradição à sua dança.',
    avaliable: true,
    dayOfWeek: 'Quarta-feira',
    firstDayOfClass: '25 de setembro de 2024',
    startTime: '19:30h',
    endTime: '21h',
  },
  {
    key: 'Img6',
    name: 'Sacadas e Piões do Roots',
    children: <SacadasEPioesNamedImage />,
    description:
      'O Curso de Sacadas e Piões é para quem já conhece o básico do Forró Estilo Roots, incluindo suas principais Caminhadas e Giros. O curso foca no desenvolvimento de movimentos de sacadas e piões, que são bastante presentes nesse estilo, abordando variações e diferentes finalizações desses movimentos. \n Nesse sentido, o curso ajudará a incorporar essas características fundamentais do estilo, reforçando a essência do Forró Roots na sua dança.',
    avaliable: true,
    dayOfWeek: 'Quarta-feira',
    firstDayOfClass: '25 de setembro de 2024',
    startTime: '21h',
    endTime: '22:30h',
  },
  {
    key: 'Img7',
    name: 'Técnicas e Variações',
    children: <TecnicasEVariacoesNamedImage />,
    description:
      'O Curso de Técnicas e Variações do Forró Estilo Roots é para quem já domina o básico do estilo, incluindo caminhadas, giros, sacadas e piões. Este curso é ideal para aqueles que querem aprofundar seu conhecimento e habilidades, explorando técnicas avançadas e variações dentro do Forró Roots. \n Com o crescimento do estilo entre os dançarinos, o curso oferece a oportunidade de aprender e aplicar novas técnicas, trazendo mais variedade e complexidade à dança. Os alunos poderão integrar essas variações ao seu repertório, aprimorando sua capacidade de executar movimentos com maior precisão e criatividade, e consolidando os conceitos fundamentais do Forró Estilo Roots.',
    avaliable: true,
    dayOfWeek: 'Segunda-feira',
    firstDayOfClass: '23 de setembro de 2024',
    startTime: '19:30h',
    endTime: '21h',
  },
  {
    key: 'Img8',
    name: 'Corporal do Estilo Roots',
    children: <CorporalDoEstiloRootsNamedImage />,
    description:
      'O Curso Corporal do Estilo Roots é direcionado para quem já domina a parte técnica e a organização corporal do Forró Roots. O curso foca em aprimorar a fluidez e o balanço dos movimentos, destacando o molejo característico desse estilo. \n Os alunos aprenderão a integrar esse estilo de movimento ao seu repertório, aprimorando a expressividade e a dinâmica da dança, e aprofundando a compreensão dos elementos do Forró Estilo Roots.',
    avaliable: true,
    dayOfWeek: 'Segunda-feira',
    firstDayOfClass: '23 de setembro de 2024',
    startTime: '21h',
    endTime: '22:30h',
  },
];

export const coursesListDuplicated = [...coursesList, ...coursesList];
