import React from "react";
import { useSelector } from "react-redux";

function UserHeader({ userId }) {
  const users = useSelector((state) =>
    state.user.find((user) => user.id === userId)
  );

  return (
    <div>
      {!users ? <h3>User : ...Loading </h3> : <h3>User : {users.name}</h3>}
    </div>
  );
}

export default UserHeader;
