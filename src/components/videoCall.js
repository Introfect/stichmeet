import React from 'react'
import {useState,useEffect  } from 'react';
import { config, useClient, useMicrophoneAndCameraTracks, channelName } from '../settings'
import { Grid } from '@material-ui/core';
import Video from './video';
import Controlls from './controlls';


const VideoCall = (props) => {
    const { setInCall } = props;
    const [users, setUsers] = useState([]);
    const [start, setStart] = useState(false);
    const client = useClient();
    const { ready, tracks } = useMicrophoneAndCameraTracks();

    useEffect(() => {
        let init = async (name) =>{ 
            client.on("user-published", async (user, mediaType) => {
                await client.subscribe(user, mediaType);
                if (mediaType === "video") {
                    setUsers((prevUsers) => {
                    return [...prevUsers, user]});
                }
                if (mediaType === "audio") {
                    user.audioTrack.play();
                }
            });
       

        client.on("user-unpublished",(user, mediaType) =>{
            if (mediaType === "audio") {
                if(user.audioTrack)user.audioTrack.stop();
            }
            if (mediaType === "video") {
                setUsers((prevUsers) => {
                return prevUsers.filter((u) => u.uid !== user.uid);
                });
            }

        })

        client.on("user-left",(user) =>{
            setUsers((prevUsers) => {
                return prevUsers.filter((u) => u.uid !== user.uid);
                });
        })
        try{
            await client.join(config.appId, config.channel, config.token, config.uid);
            if(tracks) await client.publish([tracks[0], tracks[1]]);
            setStart(true);
        }catch(error)
        {
            console.log(error)
        }

    };
    if ( ready && tracks ) {
        try{
            init(channelName);
        }catch(error){
            console.log(error.message)
        }
    }
 

    },[channelName, ready, tracks, ])
  return (
        <Grid container direction='column' style={{height: "100%"}}>
            <Grid item style={{height: "5%"}}>
            { ready && tracks && (
            <Controlls tracks ={tracks} setStart={start} setInCall={setInCall}/>
            )}
            </Grid>
            <Grid item style={{height: "95%"}}>
                {start && tracks && <Video tracks={tracks} users={users} />}
            </Grid>
        </Grid>
  )
}

export default VideoCall