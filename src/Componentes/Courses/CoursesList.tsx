import { IntroducaoAoForro } from '../../assets/images/IntroduçãoAoForro';
import { GirosTradicionais } from '../../assets/images/GirosTradicionais';
import { GirosDeCincoPisadas } from '../../assets/images/GirosDeCincoPisadas';
import { CaminhadasDoRoots } from '../../assets/images/CaminhadasDoRoots';
import { GirosDoRoots } from '../../assets/images/GirosDoRoots';
import { PushAndPullESacadas } from '../../assets/images/PushAndPullESacadas';
import { ArrastadasETrocadilhos } from '../../assets/images/ArrastadasETrocadilhos';

export const CoursesList = [
  {
    name: 'Introdução ao Forró',
    textAlign: 'right',
    children: <IntroducaoAoForro />,
    textTop: `20px`,
    textRigth: `20px`,
  },
  {
    name: 'Giros Tradicionais',
    textAlign: 'center',
    children: <GirosTradicionais />,
    textTop: `180px`,
    textRigth: `0`,
  },
  {
    name: 'Giros de Cinco Pisadas',
    textAlign: 'right',
    children: <GirosDeCincoPisadas />,
    textTop: `180px`,
    textRigth: `20px`,
  },
  {
    name: 'Caminhadas do Roots',
    textAlign: 'right',
    children: <CaminhadasDoRoots />,
    textTop: `20px`,
    textRigth: `20px`,
  },
  {
    name: 'Giros do Roots',
    textAlign: 'center',
    children: <GirosDoRoots />,
    textTop: `230px`,
    textRigth: `20px`,
  },
  {
    name: 'Push & Pull e Sacadas',
    textAlign: 'right',
    children: <PushAndPullESacadas />,
    textTop: `20px`,
    textRigth: `20px`,
  },
  {
    name: 'Arrastadas e Trocadilhos',
    textAlign: 'right',
    children: <ArrastadasETrocadilhos />,
    textTop: `200px`,
    textRigth: `20px`,
  },
];
