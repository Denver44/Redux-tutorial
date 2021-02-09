import React, { useEffect } from "react";
import { connect } from "react-redux";
// import { fetchUser } from "../actions";

function UserHeader(props) {
  // console.log(props);
  const { users } = props;
  // useEffect(() => {
  //   props.fetchUser(props.userId);
  // }, []);

  return (
    <div>
      {!users ? <h3>User : ...Loading </h3> : <h3>User : {users.name}</h3>}
    </div>
  );
}

// const mapStateToProps = (state) => {
//   // console.log(state)
//   return { users: state.user };
// };
const mapStateToProps = (state, OwnProps) => {
  console.log(OwnProps);
  return { users: state.user.find((user) => user.id === OwnProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);
// export default connect(mapStateToProps, { fetchUser })(UserHeader);
