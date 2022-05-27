import React, { useContext } from "react";
import PropTypes from "prop-types";

import styles from './Header.scss';

import { ThemeContext } from "./ThemeContext";
import Button from "./Button";


export default function Header(props) {
  const { onToggleTheme } = useContext(ThemeContext)

  return (
    <>
      <h1 className={styles.title} >{props.title}</h1>
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
