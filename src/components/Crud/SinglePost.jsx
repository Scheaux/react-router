import React, { useContext } from 'react';
import css from './Crud.module.css';
import moment from 'moment-timezone';
import likeicon from './fblike.png';
import commenticon from './fbcomments.png';
import { NavLink, useNavigate } from 'react-router-dom';
import PostContext from './PostContext';

function SinglePost({ content, id, created }) {
  const navigate = useNavigate();
  const { setPosts } = useContext(PostContext);

  async function deleteHandler() {
    const url = `https://expressendpoint.herokuapp.com/posts/${id}`;
    const response = await fetch(url, {
      method: 'DELETE',
    });
    if (response.status === 204) {
      fetch('https://expressendpoint.herokuapp.com/posts')
        .then((res) => res.json())
        .then((json) => {
          setPosts(json);
          navigate('/');
        });
    }
  }

  return (
    <div className={css.post}>
      <div className={css.credentials}>
        <div className={css.avatar}></div>
        <span className={css.username}>Username</span>
        <span>{moment(created).fromNow()}</span>
      </div>
      <span className={css.content}>{content}</span>
      <div className={css.ratePost}>
        <div className={css.likeContainer}>
          <img src={likeicon} alt='like' className={css.icon} />
          <span className={css.fadeFont}>Нравится</span>
        </div>
        <div className={css.likeContainer}>
          <img src={commenticon} alt='like' className={css.icon} />
          <span className={css.fadeFont}>Комментировать</span>
        </div>
      </div>
      <div className={css.actions}>
        <NavLink to='edit' className={`${css.btn} nodecoration`}>
          Изменить
        </NavLink>
        <button className={css.deleteBtn} onClick={deleteHandler}>
          Удалить
        </button>
      </div>
    </div>
  );
}

export default SinglePost;
