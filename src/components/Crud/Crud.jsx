import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Posts from './Posts';
import css from './Crud.module.css';
import NewPost from './NewPost';
import PostContext from './PostContext';
import PostEdit from './PostEdit';

function Crud() {
  const [posts, setPosts] = useState([]);

  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      <div className='wrap'>
        <BrowserRouter basename='react-router'>
          <nav className={css.nav}>
            <NavLink className={'menu__item'} to='/'>
              Все посты
            </NavLink>
            <NavLink className={'menu__item'} to='/posts/new'>
              Создать пост
            </NavLink>
          </nav>
          <Routes>
            <Route path='/'>
              <Route path='' element={<Posts />} />
              <Route path='/posts/new' element={<NewPost />} />
              <Route path='/posts/:postId' element={<Posts />} />
              <Route path='/posts/:postId/edit' element={<PostEdit />} />
            </Route>

            <Route
              path='*'
              element={<div style={{ color: 'red' }}>404 NOT FOUND</div>}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </PostContext.Provider>
  );
}

export default Crud;
