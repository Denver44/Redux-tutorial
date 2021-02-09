import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPostAndUsers } from "../actions";
import UserHeader from "../UserHeader/UserHeader.jsx";
function Post(props) {
  //   console.log(props.posts);
  useEffect(() => {
    props.fetchPostAndUsers();
  }, []);
  return (
    <div>
      {props.posts.map((post) => {
        return (
          <div
            key={post.id}
            style={{
              margin: "20px 20px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <h4
              style={{
                marginRight: "20px",
              }}
            >
              {post.id}
            </h4>
            <div>
              <h2>{post.title}</h2>
              <p
                style={{
                  fontSize: "18px",
                }}
              >
                {post.body}
              </p>
              <UserHeader userId={post.userId} />
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return { posts: state.post };
};

export default connect(mapStateToProps, { fetchPostAndUsers })(Post);
