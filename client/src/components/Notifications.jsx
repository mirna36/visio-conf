import React, { useContext } from 'react';
import { Button } from '@material-ui/core';

import { SocketContext } from '../Context';

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <h1>Appel entrant :{call.name}</h1>
          <Button variant="contained" color="primary" onClick={answerCall}>
            Répondre?
          </Button>
        </div>
      )}
    </>
  );
};

export default Notifications;
