import React from 'react'

export const Collection =({ name, images })=> {
    return (
      <div className="collection">
        <img className="collection__big" src={images} alt="Item" />
        <div className="collection__bottom">
          <img className="collection__mini" src={images} alt="Item" />
          <img className="collection__mini" src={images} alt="Item" />
          <img className="collection__mini" src={images} alt="Item" />
        </div>
        <h4>{name}</h4>
      </div>
    );
  }

