import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;
export const TableGrid = styled.table`
  margin-left: 360px;
  margin-top: 35px;
  width: 896px;
  height: 192px;
  left: 512px;
  background: #ffffff;
  border-width: 1px 1px 0px 1px;
  border-style: solid;
  border-color: #e9ebf2;
  box-shadow: 0px 1px 2px rgba(31, 41, 54, 0.16);
  border-radius: 4px;
  border-collapse: collapse;
`;

export const TableData = styled.td`
  border: 1px solid #e9ebf2;
  font-family: "Inter";
  font-style: normal;
  margin-left: 15px;
`;

export const TableHeader = styled.th`
  text-align: left;
  padding: 10px 16px;
  gap: 16px;
  width: 360px;
  height: 36px;
  background: #fcfcfd;
  border-bottom: 1px solid #e9ebf2;
  border-radius: 4px 0px 0px 0px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

export const TableHeaderContent = styled.div`
  display: flex;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: #6c6f85;
  gap: 5px;
`;
export const TableDataContent = styled.div`
  display: flex;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  margin-left: 15px;
  color: #6c6f85;
  gap: 5px;
`;
export const TableDataName = styled.div`
  width: 95px;
  height: 20px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #1f2936;
  flex: none;
  order: 1;
  flex-grow: 0;
`;
export const Select = styled.div`
  background-color: white;
  border: thin solid grey;
  border-radius: 4px;
  width: 192px;
  display: inline-block;
  line-height: 1.5em;
  padding: 0.5em 3.5em 0.5em 1em;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAA3klEQVRIS+3VMU9CMRTF8d8zBL+aizoQFhx0kUk33RzdYMNFXUFnYeGrYYyaJiUxJHDLSxodbNKpfeffc9/pbaPyaCrr+3OA++z4rtT5Pg5GuMnCY9yWQEoBE1xhlUUP8YDrCBIB0vojLvGO0yz4hm4JJAKcYYoPHGOZAUdYoIMBXrc5iQAHeMlzviFygj7O8dkWEJU4XI8chALRhn9AVKHf70VRTHu4wFfbmKZLNKt50dLBnna0imcMd/2I0phWa3Y/D1e1Xa9BCZJG0VuQNpaWKMx72xS1Fl5/WN3BN+AgJhnZQlq4AAAAAElFTkSuQmCC");
  background-position: calc(100% - 0.5rem), 100% 0;
  background-size: 1.5em 1.5em;
  background-repeat: no-repeat;
`;
export const MultiSelectDropDown = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 0px;
  position: absolute;
  width: 192px;
  margin-left: 15px;
  margin-top: 5px;
  background: #ffffff;
  border: 1px solid #d1d4de;
  box-shadow: 0px 5px 32px rgba(31, 41, 54, 0.08);
  border-radius: 6px;
`;
export const DeleteIcon = styled.div`
  margin-left: 20px;
`;
export const RolesContainer = styled.div`
  display: flex;
  gap: 5px;
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #1f2936;
    cursor: pointer;
    margin-left: ${(props) => props.id === "roles" && "-70px"};
    &::hover{
      color: #6e00ff;
    }
  }
`;
export const CheckRoles = styled.div`
  display: flex;
`;
export const CheckedBox = styled.input.attrs({ type: "checkbox" })`
  width: 20px;
  height: 20px;
  margin-top: 15px;
  background: #ffffff;
  border: 1px solid #d1d4de;
  border-radius: 4px;
  flex: none;
  order: 0;
  flex-grow: 0;
  &:checked {
    background: #6e00ff;
    background-image: url("assets/icons/checkedIcon.png");
    background-repeat: no-repeat;
    border-radius: 4px;
    -moz-appearance: none;
    -webkit-appearance: none;
    -o-appearance: none;
    background-position-x: 4px;
    -webkit-appearance: none;
    background-position-y: 4px;
  }
`;
