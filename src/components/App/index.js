import React, { useState } from 'react';

import styles from './App.scss';

import Post from '../Post';
import Header from '../Header';
import { ThemeProvider } from '../../context/ThemeContext';

import { Title } from './styles';

function App() {
  const [posts, setPosts] = useState([
    { id: Math.random(), title: 'Title#01', subtitle: 'Sub#01', likes: 20, read: false, removed: false, },
    { id: Math.random(), title: 'Title#02', subtitle: 'Sub#02', likes: 10, read: true, removed: false, },
    { id: Math.random(), title: 'Title#03', subtitle: 'Sub#03', likes: 50, read: false, removed: false, },
    { id: Math.random(), title: 'Title#04', subtitle: 'Sub#04', likes: 100, read: false, removed: false, },
  ])

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState, // o react so acessa o valor quando o react for executar a função
      {
        id: Math.random(),
        title: `Title#0${prevState.length + 1}`, 
        subtitle: `Sub#0${prevState.length + 1}`, 
        likes: 50
      }
    ])
  }
  
  function handleRemovePost(postId) {
    setPosts((prevState) => prevState.map(
      post => (
        post.id === postId 
        ? { ...post, removed: true }
        : post
      )
    ))
  }

  return (
    <ThemeProvider>
      <Header title="Kuroishi's">
        <Title as="h2">
          Posts da semana
          <button onClick={handleRefresh}>
            Atualizar
          </button>
        </Title>
      </Header>

      <hr />

      {posts.map(post => (
        <Post
          onRemove={handleRemovePost}
          key={post.id}
          post={post}
        />
      ))}
    </ThemeProvider>
  )
};

export default App;
