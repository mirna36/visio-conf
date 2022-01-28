import React, { useContext} from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { SocketContext } from '../SocketContext';

const useStyles = makeStyles((theme) => ({
  video: {
    width: '550px', 
    [ theme.breakpoints.down('xs')]: {
      width: '300px',
    },
  },
  gridContainer: {
    justifyContent: 'center',
    [ theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  paper: {
    padding: '10px',
    border: '2px solid gray',
    margin: '10px',
    background: 'black',
    color: 'white',
  },
}));

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call} = useContext(SocketContext);
  const classes = useStyles();

  return (
    <Grid container className={classes.gridContainer}>
        {/*Our own video s'il ya*/}
        {
          stream && (
            <paper className={classes.paper}>
              <Grid item xs={12} md={6}>
                <Typography variant="h5" gutterBottom>{name || 'Nom'}</Typography>
                <video playsInline muted ref={myVideo} autoplay className={classes.video} />
              </Grid>
            </paper>
          )
        }
        <paper className={classes.paper}>
              <Grid item xs={12} md={6}>
                <Typography variant="h5" gutterBottom>{name || 'Nom'}</Typography>
                <video playsInline muted ref={null} autoplay className={classes.video} />
              </Grid>
            </paper>
        
        {/*User video*/}
        {
          callAccepted && !callEnded &&(
            <paper className={classes.paper}>
              <Grid item xs={12} md={6}>
                <Typography variant="h5" gutterBottom>{call.name || 'Nom'}</Typography>
                <video playsInline  ref={userVideo} autoplay className={classes.video} />
              </Grid>
            </paper>
          )
        }     
    </Grid>
    
  )
}

export default VideoPlayer;
