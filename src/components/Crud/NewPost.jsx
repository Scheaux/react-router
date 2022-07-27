import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import css from './Crud.module.css';

function NewPost() {
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  async function submitHandler(evt) {
    evt.preventDefault();
    const res = await fetch('https://expressendpoint.herokuapp.com/posts', {
      method: 'POST',
      body: new URLSearchParams({
        id: 0,
        content,
      }),
    });
    if (res.status === 204) {
      evt.target.reset();
      navigate('/');
    }
  }

  function changeHandler(evt) {
    setContent(evt.currentTarget.value);
  }

  return (
    <form action='submit' className={css.form} onSubmit={submitHandler}>
      <h3>Новый пост</h3>
      <button className={css.closeBtn}>X</button>
      <textarea cols='30' rows='5' onChange={changeHandler}></textarea>
      <button type='submit' className={css.btn}>
        Опубликовать
      </button>
    </form>
  );
}

export default NewPost;
