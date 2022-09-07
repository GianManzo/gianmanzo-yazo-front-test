import { Colors } from '~/Global-styles';
import * as C from './styles';
import { DotsThree } from 'phosphor-react';

type Props = {
  projeto: string;
  status: string;
  produtos: string;
  inicio: string;
  termino: string;
};

export const Project = ({ projeto, status, produtos, inicio, termino }: Props) => {
  return (
    <C.Tr>
      <C.TdTitle>
        <input type='checkbox' />
        <div
          style={{
            background: status === 'Desenvolvimento' ? `${Colors.red}` : `${Colors.yellowStrong}`,
          }}
        ></div>
        {projeto}
      </C.TdTitle>
      <td>
        <div
          style={{ background: status === 'Desenvolvimento' ? `${Colors.yellowStrong}` : 'green' }}
        >
          <div></div>
          {status}
        </div>
      </td>
      <td>{produtos}</td>
      <td>{inicio}</td>
      <td>{termino}</td>
      <td>
        <div>
          <DotsThree size={16} weight='bold' />
        </div>
      </td>
    </C.Tr>
  );
};
