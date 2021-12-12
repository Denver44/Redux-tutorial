import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserAndPost } from "../../actions";
import UserHeader from "../userHeader/UserHeader";
import "./style.css";

const Post = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserAndPost());
  }, []);

  const posts = useSelector((state) => state.posts);

  return (
    <div>
      {posts?.map((post) => {
        return (
          <div key={post.id} className="post__first">
            <h4 className="post__h4">{post.id}</h4>
            <div>
              <h2>{post.title}</h2>
              <p className="post__p">{post.body}</p>
              <UserHeader userId={post.userId} />
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Post;
