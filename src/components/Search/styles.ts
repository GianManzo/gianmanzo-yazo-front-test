import styled from 'styled-components';
import { Colors } from '~/Global-styles';

export const Title = styled.h1`
  font: 700 1.5rem 'Poppins', sans-serif;
  margin-bottom: 2.5rem;
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 2.25rem;
`;

export const Filters = styled.button`
  align-items: center;
  background-color: transparent;
  border: 1px solid ${Colors.gray};
  border-radius: 4px;
  box-shadow: 0px 1px 6px 0px ${Colors.orangeLight};
  border: none;
  display: flex;
  font: 0.75rem 'Lato', sans-serif;
  gap: 0.5rem;
  height: 1.9375rem;
  justify-content: center;
  width: 5.5625rem;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 9.125rem 0 1.5rem;
  width: 100%;
`;

export const Input = styled.div`
  align-items: center;
  border-bottom: 1px solid #000000;
  display: flex;
  gap: 1rem;
  width: 18.9375rem;

  input {
    border: none;
    outline: none;
    width: 100%;
  }
`;

export const BtnNewProject = styled.button`
  align-items: center;
  background-color: #000000;
  border-radius: 4px;
  color: white;
  display: flex;
  font: 700 0.75rem 'Lato', sans-serif;
  gap: 0.4375rem;
  height: 2rem;
  justify-content: center;
  width: 7.8125rem;
`;
