import React, { useEffect , Fragment, useState } from 'react';
import axios from 'axios';
// import { ZoomMtg } from "@zoomus/websdk";
import './Call.css';
// import Dashboard from '../Dashboard/Dashboard';

const Call = () => {
    const [token, setToken] = useState('');



    useEffect( ()=>{
        
        // ZoomMtg.setZoomJSLib('https://source.zoom.us/lib','/av');
        // ZoomMtg.preloadWasm();
        // ZoomMtg.preparedWebSDK();
        // ZoomMtg.generateSDKSignature({
        //     meetingNumber:payload.meetingNumber,
        //     role:payload.role,
        //     sdkkey:payload.sdkkey,
        //     sdkSecret:payload.sdkSecret,
        //     success:function(signature){
        //         ZoomMtg.init({
        //             leaveUrl:payload.leaveUrl,
        //             success:function(data){
        //                 ZoomMtg.join({
        //                     meetingNumber:payload.meetingNumber,
        //                     signature:signature.result,
        //                     userEmail:payload.userEmail,
        //                     password:payload.password,
        //                     tk:'',
        //                 success:function(){
        //                     console.log('joined');
        //                 },
        //                 error:function(error){
        //                     console.log(error)
        //                 }                        })
        //             }
        //         })
        //     },
        //     error:function(error){
        //         console.log(error)
        //     }
        // }) 
    },[])

    // useEffect(()=>{
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
          
            const signature = generateSignature(data.id, 0);
    
            console.log(signature);
          
            joinMeeting(data.id, signature);
        };
    
    
        const generateSignature = async(meetingNumber, role, email) => {
            const { ZoomMtg } = await import("@zoomus/websdk");
            // document.getElementById('zmmtg-root').style.display = 'block';
            console.log('generate signature', meetingNumber, role);
            axios(`http://localhost:5000/jwt?email=${email}`)
              .then(function (response) {
                console.log(response.data.accessToken);
                setToken(response.data.accessToken)
              })
              .catch(function (error) {
                console.log('error', error);
            }); 
            return ZoomMtg.generateSDKSignature({
                meetingNumber: meetingNumber,
                apiKey:'aiWNRxRqQKGkR2V1puIg',
                apiSecret:'v0DpxS39vBO9JjY6a60S3BOwrZUdQ1Me',
                role: role,
                
                success: function (res) {
                  console.log('Signature:', res.result);
                },
              });
          };
        
    
            const joinMeeting = async() => {
                const { ZoomMtg } = await import("@zoomus/websdk");
                // document.getElementById('zmmtg-root').style.display = 'block';
                console.log(ZoomMtg);
                ZoomMtg.setZoomJSLib("https://source.zoom.us/2.10.1/lib", "/av");
                ZoomMtg.preLoadWasm();
                ZoomMtg.prepareJssdk();
                ZoomMtg.prepareWebSDK();
                console.log('signature up')
                const signature = generateSignature(79522129678, 1, 'ai@gmail.com');
                console.log(signature,'signature isue');
                ZoomMtg.init({
                    leaveUrl: "http://localhost:5173/",
                    isSupportAV: true,
                    success: (signature) => {
                        console.log('inside succes', signature)
                        ZoomMtg.join({
                            signature: signature,
                            meetingNumber:79522129678,
                            userName: 'Testing',
                            sdkKey:'ojPTBTbTiaS9bdWnfdPog',
                            userEmail:'',
                            passWord:'w718ZD',
                            tk:token,
                            zak: '',
                            success: (res) => {
                                console.log(res);
                                createMeeting()
                            },
                            error: (err) => {
                            console.log('working but error',err);
                            }
                        });
                    }
            });
        };
    // },[])
    return (
        <div>
            <button onClick={joinMeeting}>joinMeeting</button>
        </div>
    );
};

export default Call;