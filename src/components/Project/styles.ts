import styled from 'styled-components';
import { Colors } from '~/Global-styles';

export const Tr = styled.tr`
  width: 100%;

  td:not(td:first-child) {
    font-family: 'Lato', sans-serif;
    font-size: 0.75rem;
    font-weight: 700;
  }

  td:nth-child(2n-6) {
    width: 14.875rem;

    @media (max-width: 1280px) {
      width: 8.875rem;
    }
  }

  td:nth-child(2) {
    div {
      display: flex;
      width: 10px;
      height: 10px;
      align-items: center;
      gap: 1rem;
      border-radius: 50%;

      @media (max-width: 1280px) {
        align-items: baseline;
        gap: 1.5rem;
      }
    }
  }

  td:last-child {
    div {
      width: 32px;
      height: 32px;
      background: transparent;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 8px;
      border: 1px solid ${Colors.gray};
    }
  }
`;

export const TdTitle = styled.td`
  display: flex;
  align-items: center;
  font-family: 'Poppins', sans-serif;

  div {
    width: 40px;
    height: 40px;
    border-radius: 8px;
    margin-inline: 1rem;
  }
`;
