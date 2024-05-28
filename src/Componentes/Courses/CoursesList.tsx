import { GirosTradicionaisNamedImage } from "../../assets/namedImages/GirosTradicionaisNamedImage";
import { GirosDeCincoPisadasNamedImage } from "../../assets/namedImages/GirosDeCincoPisadasNamedImage";
import { IntroducaoAoForroNamedImage } from "../../assets/namedImages/IntroduçãoAoForroNamedImage";
import { CaminhadasDoRootsNamedImage } from "../../assets/namedImages/CaminhadasDoRootsNamedImage";
import { GirosDoRootsNamedImage } from "../../assets/namedImages/GirosDoRootsNamedImage";
import { PushAndPullESacadasNamedImage } from "../../assets/namedImages/PushAndPullESacadasNamedImage";
import { ArrastadasETrocadilhosNamedImage } from "../../assets/namedImages/ArrastadasETrocadilhosNamedImage";

interface Course {
  name: string;
  children: React.ReactNode;
  description: string;
}

export const coursesList: Course[] = [
  {
    name: "Introdução ao Forró",
    children: <IntroducaoAoForroNamedImage />,
    description:
      "O Curso de Introdução ao Forró é destinado à pessoas não dançam Forró e gostariam de aprender a dançar. Ele também pode ser indicado a pessoas que já tem algum conhecimento da dança mas querem aprender com maior qualidade e seguir a metodologia completa garantindo um aprendizado mais sólido.",
  },
  {
    name: "Giros Tradicionais",
    children: <GirosTradicionaisNamedImage />,
    description:
      "O Curso de Giros Tradicionais é destinado a pessoas que já dançam Forró e querem desenvolver os giros mais usados no Forró Universitário. Ele é indicado também aos alunos que já concluiram o curso de Introdução ao Forró",
  },
  {
    name: "Giros de Cinco Pisadas",
    children: <GirosDeCincoPisadasNamedImage />,
    description:
      "O Curso de Repertório de 5 pisadas é destinado a pessoas que já dançam Forró Universitário e desejam adquirir um repertório diferenciado em termos de marcação das pisadas e dinâmica dos movimentos.",
  },
  {
    name: "Caminhadas do Roots",
    children: <CaminhadasDoRootsNamedImage />,
    description:
      "O Curso de Desenvoltura no Forró Universitário é destinado a pessoas que já dançam o Forró Universitário, sabem fazer os Giros Tradicionais e querem adquirir maior autonomia, sequenciação e variações dos movimetos tradicionais.",
  },
  {
    name: "Giros do Roots",
    children: <GirosDoRootsNamedImage />,
    description:
      "O Curso de Aperfeiçoamento do Forró Estilio Roots é destinado aos alunos que já passaram pelos cursos de Técnicas e Variações e Desenvoltura no Forró Estilo Roots. Ele propõe um aperfeiçoamento das técnicas de execução e comunicação proporcionando maior autonomia, capacidade de sequenciação e variação de movimentos.",
  },
  {
    name: "Push & Pull e Sacadas",
    children: <PushAndPullESacadasNamedImage />,
    description:
      "O Curso de Musicalidade e Conexão é destinado a pessoas que já dançam o Forró Universitário, sabem fazer os Giros Tradicionais e querem adquirir maior fluidez na dança, conexão com o par e aprender movimentos que podem ser usados e variados de acordo com o rítmo e melodia musical.",
  },
  {
    name: "Arrastadas e Trocadilhos",
    children: <ArrastadasETrocadilhosNamedImage />,
    description:
      "O Curso de Autonomia do Forró Estilio Roots é destinado aos alunos que já passaram pelos cursos de Técnicas e Variações e Desenvoltura, e Aperfeiçoamento no Forró Estilo Roots. Ele propõe um formato de estudo de movimentos complexos associados as técnicas de execução e comunicação desenvolvendo no aluno a capacidade de tirar e organizar diversos movimentos do Estilo.",
  },
];

export const coursesListDuplicated = [
  {
    name: "Introdução ao Forró",
    children: <IntroducaoAoForroNamedImage />,
    key: "Img1",
  },
  {
    name: "Giros Tradicionais",
    children: <GirosTradicionaisNamedImage />,
    key: "Img2",
  },
  {
    name: "Giros de Cinco Pisadas",
    children: <GirosDeCincoPisadasNamedImage />,
    key: "Img3",
  },
  {
    name: "Caminhadas do Roots",
    children: <CaminhadasDoRootsNamedImage />,
    key: "Img4",
  },
  {
    name: "Giros do Roots",
    children: <GirosDoRootsNamedImage />,
    key: "Img5",
  },
  {
    name: "Push & Pull e Sacadas",
    children: <PushAndPullESacadasNamedImage />,
    key: "Img6",
  },
  {
    name: "Arrastadas e Trocadilhos",
    children: <ArrastadasETrocadilhosNamedImage />,
    key: "Img7",
  },
  {
    name: "Introdução ao Forró",
    children: <IntroducaoAoForroNamedImage />,
    key: "Img8",
  },
  {
    name: "Giros Tradicionais",
    children: <GirosTradicionaisNamedImage />,
    key: "Img9",
  },
  {
    name: "Giros de Cinco Pisadas",
    children: <GirosDeCincoPisadasNamedImage />,
    key: "Img10",
  },
  {
    name: "Caminhadas do Roots",
    children: <CaminhadasDoRootsNamedImage />,
    key: "Img11",
  },
  {
    name: "Giros do Roots",
    children: <GirosDoRootsNamedImage />,
    key: "Img12",
  },
  {
    name: "Push & Pull e Sacadas",
    children: <PushAndPullESacadasNamedImage />,
    key: "Img13",
  },
  {
    name: "Arrastadas e Trocadilhos",
    children: <ArrastadasETrocadilhosNamedImage />,
    key: "Img14",
  },
];
