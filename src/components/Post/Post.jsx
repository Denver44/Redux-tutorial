import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Toast, ToastBody, ToastHeader } from "reactstrap";
import { fetchPost } from "../../actions";

const Post = () => {
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  const post = useSelector((state) => state.post);

  const handleFetchPost = () => dispatch(fetchPost());
  const handleDeletePost = (deleteId) => {
    setPosts(posts?.filter((post) => post?.id !== deleteId));
  };

  useEffect(() => {
    setPosts(post);
  }, [post]);

  return (
    <>
      <Button color="primary" onClick={handleFetchPost}>
        Fetch Post
      </Button>
      {posts?.map((post) => {
        return (
          <div className="p-3 bg-success mt-2 rounded d-flex">
            <Toast>
              <ToastHeader>{post?.title}</ToastHeader>
              <ToastBody>{post?.body} </ToastBody>
            </Toast>
            <Button color="danger" onClick={() => handleDeletePost(post?.id)}>
              Delete
            </Button>
          </div>
        );
      })}
    </>
  );
};

export default Post;
