import React from 'react'
import { useState } from "react";
import { useClient } from "../settings";
import { Grid, Button, Icon } from "@material-ui/core";
import MicIcon from '@material-ui/icons/Mic';
import MicOffIcon from '@material-ui/icons/MicOff';
import VideocamIcon from '@material-ui/icons/Videocam';
import VideocamOffIcon from '@material-ui/icons/VideocamOff';
import CallEndIcon from '@material-ui/icons/CallEnd';

const Controlls = (props) => {
  const client = useClient();
  const { tracks, setStart, setIncall } = props;
  const { trackState, setTrackState } = useState({ video: true, audio: true });
  
  const leaveChannel = async() =>{
    await client.leave();
    client.removeAllListeners();
    tracks[0].close();
    tracks[1].close();
    setStart(false);
    setIncall(false);

  }
  const mute = async (type) => {
    if (type === "audio") {
      tracks[0].setEnabled(!trackState.audio);
      setTrackState({ ...trackState, audio: !trackState.audio });
    } else {
      tracks[1].setEnabled(!trackState.video);
      setTrackState({ ...trackState, video: !trackState.video });
    }
  }

  return (
    <Grid container spacing={2} allignItems="center">
      <Grid item>
        <Button variant="contained" color={tracks.audio ? "primary" : "secondary"} onClick={()=> mute("audio")} />
        {tracks.audio ? <MicIcon /> : <MicOffIcon />}
      </Grid>
      <Grid item>
        <Button variant="contained" color={tracks.video ? "primary" : "secondary"} onClick={()=> mute("video")} />
        {tracks.video ? <VideocamIcon /> : <VideocamOffIcon />}
      </Grid>
      <Grid item>
        <Button variant="contained" 
        color="default" 
        onClick={()=> leaveChannel()} />
        <CallEndIcon />
      </Grid>
      
    </Grid>
  )
}

export default Controlls
