import React from 'react';
import PropTypes from 'prop-types';

const SayHello = (props: any) => {
  const { name } = props;

  return (
    <div>
      <p>Hey {name}, say hello to TypeScript.</p>
    </div>
  );
};

export default SayHello;

SayHello.propTypes = {
  name: PropTypes.string.isRequired,
};
