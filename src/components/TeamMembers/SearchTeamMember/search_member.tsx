import React from 'react';
import { Container,Search, SearchHeader } from './styles';

const SearchMember = () => {
   const handleOnFocus = (event:React.MouseEvent<HTMLInputElement>) => {
      event.currentTarget.placeholder = "";
   }

 
   return <Container>
         <SearchHeader>Manage team members</SearchHeader>
         <Search placeholder='Search' onClick={handleOnFocus}  />
          </Container>
}

export default SearchMember;