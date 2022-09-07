import { Search } from '../Search/Search';
import { Project } from '../Project/Project';
import * as C from './styles';

export const Table = () => {
  return (
    <C.Container>
      <Search />
      <C.Table>
        <thead>
          <tr>
            <th>
              <input type='checkbox' /> Projeto
            </th>
            <th>Status</th>
            <th>Produto(s)</th>
            <th>Início do projeto</th>
            <th>Término do projeto</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <Project
            projeto='Pokedex'
            status='Desenvolvimento'
            produtos='Web'
            inicio='26/08/2022'
            termino='-'
          />
          <Project
            projeto='Uber Clone'
            status='Concluido'
            produtos='Aplicativo'
            inicio='01/08/2023'
            termino='01/08/2023'
          />
          <Project
            projeto='Pokedex'
            status='Desenvolvimento'
            produtos='Web'
            inicio='26/08/2022'
            termino='-'
          />
          <Project
            projeto='Uber Clone'
            status='Concluido'
            produtos='Aplicativo'
            inicio='01/08/2023'
            termino='01/08/2023'
          />
          <Project
            projeto='Pokedex'
            status='Desenvolvimento'
            produtos='Web'
            inicio='26/08/2022'
            termino='-'
          />
          <Project
            projeto='Uber Clone'
            status='Concluido'
            produtos='Aplicativo'
            inicio='01/08/2023'
            termino='01/08/2023'
          />
          <Project
            projeto='Pokedex'
            status='Desenvolvimento'
            produtos='Web'
            inicio='26/08/2022'
            termino='-'
          />
        </tbody>
      </C.Table>
    </C.Container>
  );
};
