import React from 'react';

export default const Nav = ({ items }) => {
  return (
    <div>
      { items.map(item => {
        return (
          <div style={{color: 'red'}}>{ item }</div>
        )
      }) }
    </div>
  )
};
