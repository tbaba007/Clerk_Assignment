import React, { useState } from "react";
import { IRoles, ITeam } from "./types";
import {
  TableGrid,
  TableData,
  TableHeader,
  TableHeaderContent,
  TableDataContent,
  TableDataName,
  Select,
  MultiSelectDropDown,
  DeleteIcon,
  RolesContainer,
  Container,
  CheckedBox,
} from "./styles";

import SearchMember from "../SearchTeamMember";
import { memberListArr, Roles } from "./stub";

const inboxesArr = ["Demo Clerk", "Long inbox title 20...", "Work inbox"];

const TeamMemberList = () => {
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedInbox, setSelectedInbox] = useState("");
  const [roles, setRoles] = useState<IRoles[]>([]);
  const DisplayMemberName = ({ name, picturePath }: ITeam) => {
    return (
      <TableDataContent>
        <img src={picturePath} alt={name} />
        <TableDataName>{name}</TableDataName>
      </TableDataContent>
    );
  };

  const DisplayCheckRoles = () => {
    return (
      <div>
        {inboxesArr.map((item, index) => {
          return (
            <RolesContainer>
              <CheckedBox />
              <p>{item}</p>{" "}
            </RolesContainer>
          );
        })}
      </div>
    );
  };

  const DisplayInboxes = ({ name }: ITeam) => {
    return (
      <>
        <TableDataContent>
          <Select
            placeholder='Not Assigned'
            onClick={() => setSelectedInbox(name)}>
            <option value='Not Assigned'>Not Assigned</option>
          </Select>
        </TableDataContent>
      </>
    );
  };

  const UserRoles = ({ name }: ITeam) => {
    return (
      <>
        <TableDataContent>
          <Select
            placeholder='Select'
            onClick={() => setSelectedRole(name)}
            onSelect={() => setSelectedRole("")}>
            {roles.length > 0 ? (
              roles.map((item, index) => {
                  return item.name === name && <option value='' key={index}>{item.role}</option>;
              })
            ) : (
              <option value=''>Select</option>
            )}
          </Select>
        </TableDataContent>
      </>
    );
  };

  const DisplayDelete = ({ name }: ITeam) => {
    const Hover = () => {
      return <img src='/assets/icons/deleteIconRed.png' alt='delete' />;
    };
    return (
      <DeleteIcon onMouseOver={Hover}>
        <img src='/assets/icons/delete.png' alt='delete' />
      </DeleteIcon>
    );
  };

  const SelectRole = (item: string) => {
    setSelectedRole("");
    const isExists = roles.find((x) => x.name === selectedRole);
    const findIndex = roles.findIndex((x) => x.name === selectedRole);
    if (isExists) {
      roles.splice(findIndex, 1);
      setRoles((obj) => [
        ...obj,
        {
          name: selectedRole,
          role: item,
        },
      ]);
    } else {
      setRoles((obj) => [
        ...obj,
        {
          name: selectedRole,
          role: item,
        },
      ]);
    }
  };

  const DisplayRoles = () => {
    return (
      <div>
        {Roles.map((item, index) => {
          return (
            <RolesContainer id='roles'>
              <p onClick={() => SelectRole(item)}>{item}</p>
            </RolesContainer>
          );
        })}
      </div>
    );
  };
  return (
    <>
      <SearchMember />
      <Container>
        <TableGrid>
          <thead>
            <tr>
              <TableHeader>
                <TableHeaderContent>Name</TableHeaderContent>
              </TableHeader>
              <TableHeader>
                <TableHeaderContent>
                  <img src='/assets/icons/inboxIcon.png' alt='inbox' />
                  Inboxes
                </TableHeaderContent>
              </TableHeader>
              <TableHeader>
                <TableHeaderContent>
                  <img src='/assets/icons/roleIcon.png' alt='inbox' />
                  Role
                </TableHeaderContent>
              </TableHeader>
              <TableHeader>
                <TableHeaderContent>
                  <img src='/assets/icons/actionIcon.png' alt='inbox' />
                  Action
                </TableHeaderContent>
              </TableHeader>
            </tr>
          </thead>
          <tbody>
            {memberListArr.map((member) => {
              return (
                <tr key={member.id}>
                  <TableData>
                    <DisplayMemberName
                      name={member.name}
                      picturePath={member.picturePath}
                    />
                  </TableData>
                  <TableData>
                    <DisplayInboxes name={member.name} />
                    {selectedInbox === member.name && (
                      <MultiSelectDropDown>
                        <DisplayCheckRoles />
                      </MultiSelectDropDown>
                    )}
                  </TableData>
                  <TableData>
                    <UserRoles name={member.name} />
                    {selectedRole === member.name && (
                      <MultiSelectDropDown>
                        <DisplayRoles />
                      </MultiSelectDropDown>
                    )}
                  </TableData>
                  <TableData>
                    <DisplayDelete name={member.name} />
                  </TableData>
                </tr>
              );
            })}
          </tbody>
        </TableGrid>
      </Container>
    </>
  );
};

export default TeamMemberList;
