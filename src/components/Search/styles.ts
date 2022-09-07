import styled from 'styled-components';
import { Colors } from '~/Global-styles';

export const Title = styled.h1`
  font-size: 1.5rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  margin-bottom: 2.5rem;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2.25rem;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-right: 9.125rem;
  margin-left: 1.5rem;
`;

export const Filters = styled.button`
  display: flex;
  align-items: center;
  width: 5.5625rem;
  height: 1.9375rem;
  justify-content: center;
  gap: 0.5rem;
  background-color: transparent;
  border: none;
  font-family: 'Lato', sans-serif;
  font-size: 0.75rem;
  border: 1px solid ${Colors.gray};
  border-radius: 4px;
  box-shadow: 0px 1px 6px 0px ${Colors.orangeLight};
`;

export const Input = styled.div`
  width: 18.9375rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  input {
    border: none;
    outline: none;
    width: 100%;
  }
  border-bottom: 1px solid #000000;
`;

export const BtnNewProject = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 7.8125rem;
  height: 2rem;
  gap: 0.4375rem;
  background-color: #000000;
  color: white;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  border-radius: 4px;
  font-size: 0.75rem;
`;
