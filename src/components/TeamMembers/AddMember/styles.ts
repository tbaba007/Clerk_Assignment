import styled,{createGlobalStyle} from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content:center ;
  margin-top:100px ;
  gap:20px;
`;
export const AddEmailInput = styled.input.attrs({ type: "text" })`
  padding: 0px;
  width: 444px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #a869fc;
  border-radius: 4px;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  outline:none ;
`;

export const AddEmailButton = styled.button`
  color: #fff;
  width: 120px;
  height: 40px;
  background: #6e00ff;
  box-shadow: 0px 1px 1px rgba(31, 41, 54, 0.12),
    0px 2px 6px rgba(110, 0, 255, 0.16);
  border-radius: 4px;
  border-width:0px ;
`;
