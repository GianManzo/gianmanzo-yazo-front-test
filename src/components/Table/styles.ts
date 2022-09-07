import styled from 'styled-components';
import { Colors } from '~/Global-styles';
import { WidthMenu } from '../Menu/styles';

export const Container = styled.div`
  padding-block: 2.5rem 9.125rem;
  margin-left: calc(2.5rem + ${WidthMenu});
  width: 80%;
`;

export const Table = styled.table`
  width: 95%;
  text-align: start;
  font-size: 0.875rem;

  border-collapse: initial;

  td,
  th {
    border-bottom: 1px solid ${Colors.gray};
    padding: 1.5rem 0;
  }

  thead {
    tr {
      font-family: 'Lato', sans-serif;
      font-weight: 700;
      text-align: left;

      input {
        margin-right: 1rem;
      }
    }
  }
`;
