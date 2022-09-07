import styled from 'styled-components';
import { Colors } from '~/Global-styles';

export const WidthMenu = '14.6875rem';

export const Menu = styled.div`
  align-items: center;
  border: 1px solid ${Colors.gray};
  display: flex;
  font: 700 0.875rem 'Lato', sans-serif;
  flex-direction: column;
  height: 100vh;
  padding: 5rem 0 2.5rem 0;
  position: fixed;
  width: ${WidthMenu};

  img {
    height: 3.75rem;
    width: 4rem;
  }
`;

export const ImgBox = styled.div`
  margin-bottom: 6.25rem;
`;

export const ListMenu = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 17.5rem;

  li {
    display: flex;
    gap: 0.5rem;
    padding: 1rem 1.5625rem 1rem 1rem;

    &:nth-child(2) {
      background-color: ${Colors.redLight};
      border-radius: 8px;
      color: ${Colors.red};
    }
  }
`;

export const SignOut = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: 80%;

  &::before {
    background-color: #000000;
    content: '';
    height: 1px;
    margin-bottom: 2.5rem;
    opacity: 0.1;
    width: 100%;
  }

  a {
    align-items: center;
    color: #000000;
    display: flex;
    gap: 0.5rem;
  }
`;
