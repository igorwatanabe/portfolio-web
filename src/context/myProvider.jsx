import PropTypes from 'prop-types';
import React from 'react';
// import foto from '../assets/foto';
import myContext from './myContext';


function Provider({ children }) {


  // const states = () => ({
  //   foto
  // })

  return (
    <myContext.Provider >
      {children}
    </myContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
