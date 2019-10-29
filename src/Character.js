import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ img, name, species }) => {
  return (
    <dl>
      <dt>Image</dt>
      <dd><img src={img} /></dd>

      <dt>Name</dt>
      <dd>{name}</dd>

      <dt>Species</dt>
      <dd>{species}</dd>
    </dl>
  );
};

Character.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired
};

export default Character;