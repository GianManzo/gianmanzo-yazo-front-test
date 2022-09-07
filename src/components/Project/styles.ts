import styled from 'styled-components';
import { Colors } from '~/Global-styles';

export const Tr = styled.tr`
  width: 100%;

  td:not(td:first-child) {
    font: 700 0.75rem 'Lato', sans-serif;
  }

  td:nth-child(2n-6) {
    width: 14.875rem;

    @media (max-width: 1280px) {
      width: 8.875rem;
    }
  }

  td:nth-child(2) {
    div {
      align-items: center;
      border-radius: 50%;
      display: flex;
      gap: 1rem;
      height: 10px;
      width: 10px;

      @media (max-width: 1280px) {
        align-items: baseline;
        gap: 1.5rem;
      }
    }
  }

  td:last-child {
    div {
      align-items: center;
      background: transparent;
      border: 1px solid ${Colors.gray};
      border-radius: 8px;
      display: flex;
      height: 32px;
      justify-content: center;
      width: 32px;
    }
  }
`;

export const TdTitle = styled.td`
  align-items: center;
  display: flex;
  font-family: 'Poppins', sans-serif;

  div {
    border-radius: 8px;
    height: 40px;
    margin-inline: 1rem;
    width: 40px;
  }
`;
