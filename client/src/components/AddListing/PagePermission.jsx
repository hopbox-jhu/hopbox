import React from 'react';
import { Form, Label } from './AddListing';

function PagePermission(props) {
    const permission = props.permission;
    const setPermission = props.setPermission;

    const handlePermissionChange = (event) => {
      setPermission(event.target.checked);
    }

    return (
      <div>
        <Form>
          <Label htmlFor="permission">Do you have the rights/permission to rent out this space?</Label>
          <input
          id="permission"
          type="checkbox"
          checked={permission}
          onChange={handlePermissionChange}>
          </input>
          <span>I have the rights/permission to rent out this space and understand that if not, I may be held financially and legally liable for any damage, loss, or fees incurred.</span>
        </Form>
      </div>
    )
  }

  export default PagePermission;