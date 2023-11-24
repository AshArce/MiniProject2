import React from 'react';

const SubscribeFlag = () => {
  return (
    <div style={{ maxWidth: '1440px', margin: 0 }}>
    <img
      src="/images/flag.png"
      style={{width: '100vw', display: 'block' }}
    />
    <div style={{ 
              position : 'absolute', 
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center', 
              zIndex: -1,
              }}>
              </div>
    </div>
  );
};

export default SubscribeFlag;
