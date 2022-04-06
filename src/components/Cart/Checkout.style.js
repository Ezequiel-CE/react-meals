import styled, { css } from "styled-components";

export const StyledForm = styled.form`
  margin: 1rem 0;
  height: 19rem;
  overflow: auto;
`;

export const StyledControl = styled.div`
  margin-bottom: 0.5rem;

  & label {
    font-weight: bold;
    margin-bottom: 0.25rem;
    display: block;
  }

  & input {
    font: inherit;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 20rem;
    max-width: 100%;
  }

  ${(props) =>
    props.valid
      ? ""
      : css`
          & label {
            color: #ca3e51;
          }
          & input {
            border-color: #aa0b20;
            background-color: #ffeff1;
          }
        `}
`;

export const StyledActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;

  & button {
    font: inherit;
    color: #5a1a01;
    cursor: pointer;
    background-color: transparent;
    border: none;
    border-radius: 25px;
    padding: 0.5rem 2rem;
  }

  & button:hover,
  & button:active {
    background-color: #ffe6dc;
  }

  & .submit {
    border: 1px solid #5a1a01;
    background-color: #5a1a01;
    color: white;
  }

  & .submit:hover,
  & .submit:active {
    background-color: #7a2706;
  }
`;
