import React from 'react';

const Rank = ({ name, entries }) => {
  const capitalize = (name) => {
    if (typeof name !== 'string') return '';
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  return (
    <div>
      <div className='white f3'>
        {`${capitalize(name)}, your current entry count is...`}
      </div>
      <div className='white f1'>{entries}</div>
    </div>
  );
};

export default Rank;
