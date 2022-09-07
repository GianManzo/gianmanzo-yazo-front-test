import * as C from './styles';
import { FunnelSimple, MagnifyingGlass, Plus } from 'phosphor-react';

export const Search = () => {
  return (
    <>
      <C.Title>Meus projetos</C.Title>
      <C.Container>
        <C.Filters>
          <FunnelSimple size={16} />
          Filtros
        </C.Filters>
        <C.Wrapper>
          <C.Input>
            <MagnifyingGlass size={16} weight='bold' />
            <input type='text' placeholder='Pesquisar projeto' />
          </C.Input>
          <C.BtnNewProject>
            <Plus size={16} weight='bold' />
            Novo projeto
          </C.BtnNewProject>
        </C.Wrapper>
      </C.Container>
    </>
  );
};
