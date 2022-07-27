import React from 'react';
import css from './Crud.module.css';
import moment from 'moment-timezone';
import likeicon from './fblike.png';
import commenticon from './fbcomments.png';
import { NavLink } from 'react-router-dom';

function Post({ content, id, created }) {
  return (
    <NavLink to={`posts/${id}`} className='nodecoration'>
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
        <div className={css.commentContainer}>
          <div className={css.avatar}></div>
          <input type='text' placeholder='Напишите комментарий...' />
        </div>
      </div>
    </NavLink>
  );
}

export default Post;
