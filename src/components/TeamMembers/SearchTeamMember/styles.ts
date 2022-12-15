import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  margin-top: 90px;
  justify-content: center;
`;

export const SearchHeader = styled.div`
  position: absolute;
  width: 182px;
  height: 24px;
  margin-left: -350px;
  margin-top: -35px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #1f2936;
`;

export const Search = styled.input.attrs({ type: "search" })`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 4px 12px;
  gap: 8px;
  width: 256px;
  height: 32px;
  margin-left: -280px;
  background: #ffffff;
  border: 1px solid #d1d4de;
  border-radius: 4px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
  background-image: url("assets/icons/search.png");
  background-repeat: no-repeat;
  background-position: 10px;
  &:focus {
    padding-left: 30px;
    outline: none;
  }
  &::placeholder {
    padding-left: 20px;
  }
`;
