import React, { useContext } from "react";
import PropTypes from "prop-types";

import Button from "../Button";

import { ThemeContext } from "../../context/ThemeContext";

import { Title } from './styles';

export default function Header(props) {
  const { onToggleTheme } = useContext(ThemeContext)

  return (
    <>
      <Title>{props.title}</Title>
      <Button onClick={onToggleTheme}>
        Mudar tema
      </Button>
      {props.children} {/* recebe tudo que colocar dentro da tag/componente */}
    </>
  )
};

Header.PropTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node, // node pode receber uma string, componente, tag html, qualquer elemento
};

Header.defaultProps = {
  title: `Kuroishi's Blog`
};
