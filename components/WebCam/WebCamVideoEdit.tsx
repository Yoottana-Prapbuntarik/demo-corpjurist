import React, { useEffect, useState, useRef, useCallback } from "react";
import Webcam from "react-webcam";
import { withTranslation } from "../../i18n";
import { dataEkyc } from "../../manager/questionEkyc";

const WebCamVideoEdit = ({ submitUploadCapture, t }: any) => {
    const webcamRef = useRef(null);
    const mediaRecorderRef = useRef(null);
    const [previewVideo, setPreviewVideo] = useState(null)
    const [capturing, setCapturing] = useState(false);
    const [randomChoice, setrandomChoice] = useState(0);
    const [recordedChunks, setRecordedChunks] = useState([]);

    // Select your devices
    const [deviceId, setDeviceId] = useState({});
    const [devices, setDevices] = useState([]);

    const handleDevices = useCallback(mediaDevices => setDevices(mediaDevices.filter(({ kind }) => kind === "videoinput")), [setDevices]);
    useEffect(() => {
        let isSyncdevices = devices.find(item => item.deviceId !== "");
        if (isSyncdevices === undefined) {
            setInterval(() => {
                navigator.mediaDevices.enumerateDevices().then(handleDevices);
            }, 2000)
        }else{
            navigator.mediaDevices.enumerateDevices().then(handleDevices);
        }
    }, [handleDevices, devices])

    useEffect(() => {
        if (capturing === true) {
            setTimeout(() => {
                handleStopCaptureClick();
            }, 5000);
        }
    }, [capturing])
    
    const handleStartCaptureClick = useCallback(() => {
        setrandomChoice(Math.floor(Math.random() * Math.floor(dataEkyc.length)));
        setCapturing(true);
        setPreviewVideo(null);
        mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream);
        mediaRecorderRef.current.addEventListener("dataavailable", handleDataAvailable);
        mediaRecorderRef.current.start();
    }, [webcamRef, setCapturing, mediaRecorderRef]);

    const handleDataAvailable = useCallback(({ data }) => {
        if (data.size > 0) {
            setRecordedChunks((prev) => prev.concat(data));
        }
    }, [setRecordedChunks]);

    const handleStopCaptureClick = useCallback(() => {
        mediaRecorderRef.current.stop();
        setCapturing(false);

    }, [mediaRecorderRef, webcamRef, setCapturing]);

    useEffect(() => {
        if (recordedChunks.length > 0) {
            handleUpload()
        }
    }, [recordedChunks])

    const handleUpload = useCallback(() => {
        const blob = new Blob(recordedChunks, {
            type: "video/webm"
        });
        uploadVideo(blob)
    }, [recordedChunks]);


    //  Uploaded to server
    const uploadVideo = async (videoBlob) => {
        const data = new FormData()
        data.append("file", videoBlob)
        data.append("upload_preset", "Corpjurist-video")
        const response = await fetch("https://api.cloudinary.com/v1_1/dzswifsou/video/upload/", {
            method: 'POST',
            body: data
        })
        const file = await response.json()

        if (file) {
            setPreviewVideo(file.url)
        }

        submitUploadCapture(file.url)
    }

    return (
        <>
            <div className="row">
                {capturing === true &&
                    <div className="col-12 text-left py-2">
                        <p>
                            {
                                dataEkyc[randomChoice]
                            }
                        </p>
                    </div>
                }
                <div className="col-12">
                    <select className="form-control 100" onChange={(event: any) => setDeviceId(event.target.value)}>
                        {
                            devices.map((device, index) => {
                                return (
                                    <option value={device.deviceId} key={index}>{device.label}</option>
                                )
                            })
                        }
                    </select>

                    {recordedChunks.length > 0 && capturing === false ?
                        <div className="col-12 mx-auto w-100 mt-5 py-5 d-flex justify-content-center">
                            <video className="w-100" controls src={previewVideo}></video>
                        </div>
                        : ''
                    }
                    <div className="col-12 mx-auto p-0 mt-3 w-100 d-flex justify-content-center">

                        {

                            <Webcam className={capturing === true ? "d-block w-100" : "d-none"} ref={webcamRef} audio={true} videoConstraints={{ deviceId: deviceId }} />
                        }
                    </div>

                    <div className="col-12 mx-auto p-0 text-left my-4">
                        <div className="d-flex justify-content-between w-100">
                            <div className="d-block">
                                {
                                    recordedChunks.length > 0 && capturing === false ?
                                        <button type="button" className="btn btn-primary" onClick={handleStartCaptureClick}>{t('reRecord')}</button> :
                                        <button type="button" className="btn btn-primary"
                                            disabled={
                                                capturing === false ?
                                                    false : true
                                            }
                                            onClick={handleStartCaptureClick}>
                                            {t('record')}
                                        </button>

                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default withTranslation('common')(WebCamVideoEdit)