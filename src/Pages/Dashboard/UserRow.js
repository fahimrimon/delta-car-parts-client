import React from "react";

const UserRow = ({user}) => {
    const {email} =user;
  return (
    <tr>
      <th>1</th>
      <td>{email}</td>
      <td><button class="btn btn-xs">MAKE ADMIN</button></td>
      <td><button class="btn btn-xs">DELETE USER</button></td>
    </tr>
  );
};

export default UserRow;
