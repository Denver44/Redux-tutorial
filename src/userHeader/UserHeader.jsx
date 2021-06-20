import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../actions";

function UserHeader({ userId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser(userId));
  }, []);

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
