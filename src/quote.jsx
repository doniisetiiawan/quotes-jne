/* eslint-disable react/prop-types */
import React from 'react';

function Quote(props) {
  return (
    <blockquote>
      <p>{props.quote.text}</p>
      <footer>{props.quote.author}</footer>
    </blockquote>
  );
}

export default Quote;
