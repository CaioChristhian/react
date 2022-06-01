import React, { useContext } from 'react';

import { ThemeContext } from '../../App';
import { Container } from './styles';

export default function Footer() {
  const { onToggleTheme, selectedTheme } = useContext(ThemeContext)

  return (
    <Container>
      <span>Kuro's Blog. Todos os direitos reservados.</span>
      <button 
        onClick={onToggleTheme} 
        type="button"
      >
        {selectedTheme === 'dark' ? '🌞' : '🌚'}
      </button>
    </Container>
  );
}