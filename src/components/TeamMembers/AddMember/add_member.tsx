import Select from "react-select";
import { AddEmailButton, Container } from "./styles";
const AddTeamMember = () => {
  const options = [
    { value: "terra@gmail.com", label: "terra@gmail.com" },
    { value: "j_blues@yahoo.com", label: "j_blues@yahoo.com" },
    
  ];

  return (
    <Container>
      <Select 
        options={options}
        isMulti
        defaultValue={options}
        className='basic-multi-select'
        classNamePrefix=''
      />
      <AddEmailButton>Send invite</AddEmailButton>
    </Container>
  );
};

export default AddTeamMember;
