import React from "react";
import AddTeamMember from "./components/TeamMembers/AddMember";
import TeamMemberList from "./components/TeamMembers/TeamMemberList";
import GlobalFonts from './customStyle';
function App() {
  return (
    <div>
      <GlobalFonts/>
      <AddTeamMember />
      <TeamMemberList/>
    </div>
  );
}

export default App;
