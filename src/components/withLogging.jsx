import React from 'react';

const withLogging = (WrappedComponent) => {
  return (props) => {
    console.log('Componente Renderizado:', WrappedComponent.name);
    return <WrappedComponent {...props} />;
  };
};

export default withLogging;