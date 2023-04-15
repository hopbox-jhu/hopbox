import React from 'react';
import { Form, Label } from './AddListing';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

const PermissionButton = styled(Button)`
  padding: 10px;
  font-size: 20px;
  border: #EB65A0;
  border-radius: 10px;
  margin-top: 5px;
  cursor: pointer;
  background-color: white;
  color: black;
  border: 2px solid ${props => props.clicked ? "pink" : "#EB65A0"};
  text-align: left;
  text-transform: lowercase;

  &:focus {
    outline: none;
    background-color: #EB65A0;
    color: white;
    border-color: black;
  }

  &.clicked {
    background-color: ${props => props.clicked ? "#EB65A0" : "white"};
    color: ${props => props.clicked ? "white" : "black"};
    border: ${props => props.clicked ? "2px solid pink" : "2px solid #EB65A0"};
  }

  &:not(.clicked) {
    background-color: white;
    color: black;
    border: 2px solid #EB65A0;
  }

  &:hover {
    border: 2px solid pink;
    color: black;
    background-color: white;
  }
`;

function PagePermission(props) {
  const permission = props.permission;
  const setPermission = props.setPermission;
  const handleButtonClick = () => {
    setPermission(!permission);
  };

  return (
    <div>
      <Form>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Label htmlFor="permission">Do you have the rights/permission to rent out this space?</Label>
        </div>
        <div>
        <PermissionButton classes={{ root: permission ? "clicked" : "" }} clicked={permission ? "true" : "false"} onClick={handleButtonClick}>
        {permission ? "I have the rights/permission to rent out this space and understand that if not, I may be held financially and legally liable for any damage, loss, or fees incurred." : "Click to confirm that you have the rights/permission to rent out this space."}
      </PermissionButton>
        </div>
      </Form>
    </div>
  );
}

export default PagePermission;
