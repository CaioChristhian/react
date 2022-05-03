import React from "react";
import PropTypes from "prop-types";


export default function Header(props) {
  return (
    <>
      <h1>{props.title}</h1>
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
