import React, { useContext } from 'react';

import { ThemeContext } from '../../App';
import { Container } from './styles';

export default function Header() {
  const { onToggleTheme, selectedTheme } = useContext(ThemeContext)

  return (
    <Container>
      <h1>Kuro's Blog</h1>
      <button 
        onClick={onToggleTheme} 
        type="button"
        >
          {selectedTheme === 'dark' ? '🌞' : '🌚'}
      </button>
    </Container>
  );
}