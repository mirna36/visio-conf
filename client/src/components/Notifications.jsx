import React, {useContext} from 'react';
import {Button} from '@material-ui/core';

import { SocketContext } from '../SocketContext';

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);
    return (
        <>
       
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <h1>Appel entrant de {call.name}</h1>
              <Button variant='containes' color='primary' onClick={answerCall}>
                Accepter

              </Button>

            </div>
         
          
    
        </>
      
      );
};

export default Notifications;