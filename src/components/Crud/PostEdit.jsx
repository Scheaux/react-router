import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import css from './Crud.module.css';
import PostContext from './PostContext';

function PostEdit() {
  const [content, setContent] = useState('');
  const { posts } = useContext(PostContext);
  const { postId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const post = posts.find((x) => x.id === +postId);
    setContent(post.content);
  }, []);

  async function submitHandler(evt) {
    evt.preventDefault();
    const res = await fetch('https://expressendpoint.herokuapp.com/posts', {
      method: 'POST',
      body: new URLSearchParams({
        id: postId,
        content,
      }),
    });
    if (res.status === 204) navigate(`/posts/${postId}`);
  }

  function changeHandler(evt) {
    setContent(evt.currentTarget.value);
  }

  function discardChanges() {
    navigate(`/posts/${postId}`);
  }

  return (
    <form action='submit' className={css.form} onSubmit={submitHandler}>
      <h3>Изменить пост</h3>
      <button className={css.closeBtn} onClick={discardChanges}>
        X
      </button>
      <textarea
        cols='30'
        rows='5'
        value={content}
        onChange={changeHandler}
      ></textarea>
      <button type='submit' className={css.btn}>
        Сохранить
      </button>
    </form>
  );
}

export default PostEdit;
