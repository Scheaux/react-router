import React from 'react';
import { useEffect } from 'react';
import Post from './Post';
import { v4 } from 'uuid';
import css from './Crud.module.css';
import { useParams } from 'react-router-dom';
import SinglePost from './SinglePost';
import PostContext from './PostContext';
import { useContext } from 'react';

function Posts() {
  const { posts, setPosts } = useContext(PostContext);
  const { postId } = useParams();

  useEffect(() => {
    fetch('https://expressendpoint.herokuapp.com/posts')
      .then((res) => res.json())
      .then((json) => {
        setPosts(json);
      });
  }, []);

  return (
    <div className={css.posts}>
      {postId === undefined
        ? posts.map((x) => {
            return <Post key={v4()} {...x} />;
          })
        : posts.map((x) => {
            if (x.id === +postId) return <SinglePost key={v4()} {...x} />;
          })}
    </div>
  );
}

export default Posts;
