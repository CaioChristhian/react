import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";


export default function Header(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <Button theme={props.theme} onClick={props.onToggleTheme}>
        Mudar tema
      </Button>
      {props.children} {/* recebe tudo que colocar dentro da tag/componente */}
    </>
  )
};

Header.PropTypes = {
  theme: PropTypes.string.isRequired,
  onToggleTheme: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node, // node pode receber uma string, componente, tag html, qualquer elemento
};

Header.defaultProps = {
  title: `Kuroishi's Blog`
};
