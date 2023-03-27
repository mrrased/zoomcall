import axios from 'axios';
import React, { useEffect, forwardRef, useState } from 'react';
// import { ZoomMtg } from "@zoomus/websdk";
// import '../Call/Call.css'


// ZoomMtg.preLoadWasm();
// ZoomMtg.prepareJssdk();
// ZoomMtg.i18n.load('en-US')
// ZoomMtg.i18n.reload('en-US')
// ZoomMtg.setZoomJSLib("https://source.zoom.us/2.10.1/lib", "/av")

const Dashboard = ({payload}) => {

    const [ userInfo, setUserInfo ] = useState(null);
      
    
    const authEndpoint ='http://localhost:5000';
    // const sdkKey ='2kDMXCXpQeqpEocoYqGQiw'
    const meetingNumber =79522129678
    // const passWord = 'w718ZD'
    const role = 0
    // const userName = 'demo'
    // const userEmail = ''
    // pass in the registrant's token if your meeting or webinar requires registration. More info here:
    // Meetings: https://marketplace.zoom.us/docs/sdk/native-sdks/web/client-view/meetings#join-registered
    // Webinars: https://marketplace.zoom.us/docs/sdk/native-sdks/web/client-view/webinars#join-registered
    // const registrantToken = ''
    // const zakToken = 'https://api.zoom.us/v2/users/me/token?type=zak'
    // const leaveUrl = 'http://localhost:5173/'
            // useEffect(async()=>{
                // const { ZoomMtg } = await import("@zoomus/websdk");


                useEffect(()=>{
                    fetch('http://localhost:5000/')
                    .then(res => res.json())
                    .then(data => console.log(data));
                },[])


                const createMeeting = async () => {
        
                    axios.get('http://localhost:5000/jwt')
                      .then(function (response) {
                        console.log(response);
                      })
                      .catch(function (error) {
                        console.log(error);
                    }); 
            
                    console.log('create meeting');
                    const res = await fetch('https://api.zoom.us/v2/users/me/meetings', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${YOUR_JWT_TOKEN}`,
                      },
                      body: JSON.stringify({
                        topic: 'Meeting',
                        type: 1,
                        duration: 60,
                      }),
                    });
                  
                    const data = await res.json();
                    consolele.log(data);
                  
                    // const signature = generateSignature(data.id, 0);
            
                    console.log(signature);
                  
                    // joinMeeting(data.id, signature);
                };


                

    const generateSignature = () => {
            
        fetch(authEndpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                meetingNumber: meetingNumber,
                role: role
            })
            }).then(res => res.json())
            .then(response => {
            console.log(response.signature)
            // createMeeting(response.signature)
            const datas = response.signature;
            // fetchUserInfo(datas);

            }).catch(error => {
            console.error(error)
            })
    }

    // async function fetchUserInfo({datas}) {
    // const response = await axios('https://api.zoom.us/v2/users/me', {
    //     mode: "no-cors",
    //     headers: {
    //     Authorization: `Bearer ${datas}`,
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
    //     'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type',
    //     'Access-Control-Allow-Credentials': 'true'
    //     },
    // });
    // const data = await response.json();
    // setUserInfo(data);
    // }
                    
                
                
                //   if (!userInfo) {
                //     return <div>Loading user information...</div>;
                //     }
    console.log( 'its working zak', userInfo)
        
        
            // const generateSignature = async(meetingNumber, role) => {
            //     const { ZoomMtg } = await import("@zoomus/websdk");
            //     console.log('generate signature', meetingNumber, role);
            //     return ZoomMtg.generateSDKSignature({
            //         meetingNumber: meetingNumber,
            //         sdkKey:'aiWNRxRqQKGkR2V1puIg',
            //         sdkSecret:'v0DpxS39vBO9JjY6a60S3BOwrZUdQ1Me',
            //         role: role,
            //         success: function (res) {
            //           console.log('Signature:', res.result);
            //         },
            //       });
            // };

            // const generateSignatureV = (e) =>{
            //     e.preventDefault();
            //     axios.get()
            // }
            
        
            const joinMeeting = async() => {
                const { ZoomMtg } = await import("@zoomus/websdk");
                console.log(ZoomMtg);
                ZoomMtg.setZoomJSLib("https://source.zoom.us/2.10.1/lib", "/av");
                ZoomMtg.preLoadWasm();
                ZoomMtg.prepareJssdk();
                // ZoomMtg.prepareWebSDK();
                // document.getElementById('zmmtg-root').style.display = 'block'
                console.log('signature up');
                ZoomMtg.generateSDKSignature({
                
                    meetingNumber:payload.meetingNumber,
                    role:payload.role,
                    sdkkey:payload.sdkkey,
                    sdkSecret:payload.sdkSecret,
                    success: (signature) => {
                        console.log('This is SIgnature', signature);
                        ZoomMtg.init({
                            leaveUrl:payload.leaveUrl,
                            success:(data)=>{
                                console.log(data);
                                ZoomMtg.join({
                                    meetingNumber:79000575367,
                                    sdkKey:'ojPTBTbTiaS9bdWnfdPog',
                                    signature:signature.result,
                                    passWord:'SvFX6T',
                                    userName:'My Meeting',
                                    role: 0,
                                    zak:'haI1OD9KR12PmoU3W0yvvA',
                                    userEmail:'',
                                    // tk:'',
                                    // zm:'',
                                    success: (res) => {
                                        console.log('suucess', res);
                                    },
                                    error: (err) => {
                                    console.log('working but error',err);
                                    }
                                })
                            }
                        })
                    }
                })
            }
    
              // },[])
    

    return (
        <div>
            <button onClick={joinMeeting}>join Meeting</button>
        </div>
    );
};

export default Dashboard;