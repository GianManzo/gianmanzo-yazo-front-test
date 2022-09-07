import * as C from './styles';
import Logo from '../../assets/Afonso@2x.png';
import { ChartBar, Archive, Users, GearSix, SignOut } from 'phosphor-react';

export const Menu = () => {
  return (
    <>
      <C.Menu>
        <C.ImgBox>
          <img src={Logo} alt='Logo projeto' />
        </C.ImgBox>
        <C.ListMenu>
          <li>
            <ChartBar weight='bold' size={16} />
            Dashboard
          </li>
          <li>
            <Archive weight='fill' size={16} />
            Meus projetos
          </li>
          <li>
            <Users weight='bold' size={16} />
            Membros
          </li>
          <li>
            <GearSix weight='bold' size={16} />
            Configurações
          </li>
        </C.ListMenu>

        <C.SignOut>
          <a href='https://www.yazo.com.br/' target='_blank' rel='noreferrer'>
            <SignOut weight='bold' size={16} />
            Sair
          </a>
        </C.SignOut>
      </C.Menu>
    </>
  );
};
