import { GestureDescription, Finger, FingerCurl } from 'fingerpose';
  
const RaisedFistGesture = new GestureDescription('RaisedFist'); // ✊️
const RaisedHandGesture = new GestureDescription('RaisedHand'); // 🖐
const VictoryGesture = new GestureDescription('Victory'); // ✌️

  
// RaisedFist
// -----------------------------------------------------------------------------
  
// thumb: half curled
// accept no curl with a bit lower confidence
RaisedFistGesture.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
RaisedFistGesture.addCurl(Finger.Thumb, FingerCurl.NoCurl, 0.5);

// all other fingers: curled
for(let finger of [Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky]) {
    RaisedFistGesture.addCurl(finger, FingerCurl.FullCurl, 1.0);
    RaisedFistGesture.addCurl(finger, FingerCurl.HalfCurl, 0.9);
}


// RaisedHand
// -----------------------------------------------------------------------------
  
// no finger should be curled
for(let finger of Finger.all) {
    RaisedHandGesture.addCurl(finger, FingerCurl.NoCurl, 1.0);
}


// Victory
//------------------------------------------------------------------------------
  
// index and middle finger: stretched out
VictoryGesture.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
VictoryGesture.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
  
// ring: curled
VictoryGesture.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
VictoryGesture.addCurl(Finger.Ring, FingerCurl.HalfCurl, 0.9);

// pinky: curled
VictoryGesture.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
VictoryGesture.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 0.9);


export {
    RaisedFistGesture, RaisedHandGesture, VictoryGesture
}
