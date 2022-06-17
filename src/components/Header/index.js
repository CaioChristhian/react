import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { ThemeContext } from '../../App';
import { Container } from './styles';

export default function Header() {
  const { onToggleTheme, selectedTheme } = useContext(ThemeContext)
  const history = useHistory()

  function handleNavigate() {
    history.push('/')
  }

  return (
    <Container>
      <h1>Kuro's Blog</h1>
      <button 
        onClick={onToggleTheme} 
        type="button"
        >
          {selectedTheme === 'dark' ? '🌞' : '🌚'}
      </button>
      <button 
        onClick={handleNavigate} 
        style={{ color: '#fff' }}
        >
          Voltar pra home
      </button>
    </Container>
  );
}