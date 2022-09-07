import { Colors } from '~/Global-styles';
import styled from 'styled-components';

export const WidthMenu = '14.6875rem';

export const Menu = styled.div`
  position: fixed;
  align-items: center;
  border: 1px solid ${Colors.gray};
  display: flex;
  flex-direction: column;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  height: 100vh;
  padding: 5rem 0 2.5rem 0;
  width: ${WidthMenu};
  font-size: 0.875rem;

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
    padding: 1rem 1.5625rem 1rem 1rem;
    display: flex;
    gap: 0.5rem;

    &:nth-child(2) {
      border-radius: 8px;
      background-color: ${Colors.redLight};
      color: ${Colors.red};
    }
  }
`;

export const SignOut = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  &::before {
    content: '';
    width: 100%;
    height: 1px;
    background-color: #000000;
    opacity: 0.1;
    margin-bottom: 2.5rem;
  }

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #000000;
  }
`;
