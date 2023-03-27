import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  margin: 0 auto;
  padding: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  font-size: 18px;
  width: 100%;
`;

export const Input = styled.input`
  padding: 5px;
  font-size: 16px;
  border: 2px solid #3b4961;
  border-radius: 5px;
`;

export const Button = styled.button`
  font-weight: 600;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: #d9c4b3;
  color: #3b4961;
  font-size: 16px;
  box-shadow: 5px 5px 10px 2px rgba(59, 73, 97, 0.8);
  text-transform: capitalize;

  &:hover,
  &:focus {
    background-color: #c2ad9d;
  }
`;

export const ContactEl = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  align-items: center;
`;

export const Contacts = styled.ul`
  width: 100%;
`;
