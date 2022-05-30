import React from 'react';

import Header from '../Header';
import PostsList from '../PostList';
import Footer from '../Footer';

export default function Layout({ onToggleTheme, selectedTheme }) {
  return (
    <>
      <Header 
        selectedTheme={selectedTheme} 
        onToggleTheme={onToggleTheme} 
      />
      <PostsList />
      <Footer 
        onToggleTheme={onToggleTheme} 
        selectedTheme={selectedTheme}
      />
    </>
  );
}
