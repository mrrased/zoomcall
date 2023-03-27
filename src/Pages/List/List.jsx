// import React from 'react';
// // import { ZoomMtg } from '@zoomus/websdk';
// import '../Call/Call.css';
// // import { json } from 'react-router-dom';


// ZoomMtg.setZoomJSLib('https://source.zoom.us/2.10.1/lib', '/av');

// ZoomMtg.preLoadWasm();
// ZoomMtg.prepareWebSDK();
// // loads language files, also passes any error messages to the ui
// ZoomMtg.i18n.load('en-US');
// ZoomMtg.i18n.reload('en-US');

// const List = () => {

//      // setup your Meeting SDK auth endpoint here: https://github.com/zoom/meetingsdk-sample-signature-node.js
//   const authEndpoint ='http://localhost:5000'
//   // This sample app has been updated to use Meeting SDK credentials https://marketplace.zoom.us/docs/guides/build/sdk-app
//   const sdkKey ='2kDMXCXpQeqpEocoYqGQiw'
//   const meetingNumber =79522129678
//   const passWord = 'w718ZD'
//   const role = 0
//   const userName = 'demo'
//   const userEmail = ''
//   // pass in the registrant's token if your meeting or webinar requires registration. More info here:
//   // Meetings: https://marketplace.zoom.us/docs/sdk/native-sdks/web/client-view/meetings#join-registered
//   // Webinars: https://marketplace.zoom.us/docs/sdk/native-sdks/web/client-view/webinars#join-registered
//   const registrantToken = ''
//   const zakToken = 'https://api.zoom.us/v2/users/me/token?type=zak'
//   const leaveUrl = 'http://localhost:5173/'

//   const generateSignature = (e) => {
//     e.preventDefault();
//     fetch('https://api.zoom.us/v2/users/me/token?type=zak')
//     .then(res => res.json())
//     .then(data => console.log(data));
//     console.log('generate signature working');
//     fetch(authEndpoint, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           meetingNumber: meetingNumber,
//           role: role
//         })
//       }).then(res => res.json())
//       .then(response => {
//         console.log(response.signature)
//         createMeeting(response.signature)
//       }).catch(error => {
//         console.error(error)
//       })
//   }

//   const createMeeting = (signature) =>{

//     document.getElementById('zmmtg-root').style.display = 'block'
//     ZoomMtg.init({
//         leaveUrl: leaveUrl,
//         success: (success) => {
//           console.log(success)
  
//           ZoomMtg.join({
//             signature: signature,
//             sdkKey:'HWNrQLwmQQ2xKpuCECDbFw',
//             meetingNumber: meetingNumber,
//             passWord: passWord,
//             userName: userName,
//             userEmail: userEmail,
//             tk: registrantToken,
//             zak: zakToken,
//             success: (success) => {
//               console.log(success)
//             },
//             error: (error) => {
//               console.log(error)
//             }
//           })
  
//         },
//         error: (error) => {
//           console.log(error)
//         }
//       })
//   }

//     return (
//         <div>
//             <button onClick={generateSignature}>Join Meeting</button>
//         </div>
//     );
// };

// export default List;