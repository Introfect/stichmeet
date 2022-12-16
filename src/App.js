import { useState } from 'react';
import { Button } from "@material-ui/core";
import VideoCall from "./components/videoCall";



function App() {
const [inCall, setInCall] = useState(false);

  return (
    <div className="App">
      <Button variant="contained" color="primary" onClick={()=> setInCall(true)}>Join kar</Button>
      {inCall? <VideoCall setInCall={setInCall}/> : "we are not in call"}
      
    </div>
  );
}

export default App;
