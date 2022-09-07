import styled from 'styled-components';
import { Colors } from '~/Global-styles';
import { WidthMenu } from '../Menu/styles';

export const Container = styled.div`
  margin-left: calc(2.5rem + ${WidthMenu});
  padding-block: 2.5rem 9.125rem;
  width: 80%;
`;

export const Table = styled.table`
  border-collapse: initial;
  text-align: start;
  font-size: 0.875rem;
  width: 95%;

  thead {
    tr {
      font: 700 0.875rem 'Lato', sans-serif;
      text-align: left;

      input {
        margin-right: 1rem;
      }
    }
  }

  td,
  th {
    border-bottom: 1px solid ${Colors.gray};
    padding: 1.5rem 0;
  }
`;
