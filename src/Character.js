import React from 'react';
import PropTypes from 'prop-types';
import styles from './Character.css';

const Character = ({ img, name, species }) => {
  return (
    <dl className={styles.Character}>
      <div className={styles.SecondClass}>
        <dt>Image</dt>
        <dd><img src={img} /></dd>
      </div>

      <div>
        <dt>Name</dt>
        <dd>{name}</dd>
      </div>

      <div>
        <dt>Species</dt>
        <dd>{species}</dd>
      </div>
    </dl>
  );
};

Character.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired
};

export default Character;