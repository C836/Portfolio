import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;

  & fieldset {
    display: flex;
    gap: 10px;
    width: 100%;
    margin: 0;
    padding: 0;
    border: 0;
  }
`;

const input_styles = `
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
  border: 3px solid white;
  background: #00000050;
  color: white;
  font: 1.2rem "Nunito";
`;

export const Input = styled.input`
  ${input_styles}

  &::placeholder {
    color: #ffffffc4;
  }
`;

export const Textarea = styled.textarea`
  ${input_styles}

  height: 200px;
  resize: none;
`;

export const Buttons = styled.div`
  display: flex;
  column-gap: 10px;

  & button {
    flex-basis: 50%;
  }
`;
