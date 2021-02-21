import React, { useEffect, useState, useRef, useCallback } from "react";
import Webcam from "react-webcam";
import { withTranslation } from "../../i18n";
import { dataEkyc } from "../../manager/questionEkyc";

const WebcamStreamCapture = ({ submitUploadCapture, t }: any) => {
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

            try {
                navigator.mediaDevices.enumerateDevices().then(handleDevices);
            }
            catch (error) {
                console.log(error);
            }
        }else{
            navigator.mediaDevices.enumerateDevices().then(handleDevices);
        }
    }, [handleDevices])

    useEffect(() => {
        if (capturing === true) {
            setTimeout(() => {
                handleStopCaptureClick();
            }, 5000);
        }
    }, [capturing])
    const handleStartCaptureClick = useCallback(() => {
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
        setrandomChoice(Math.floor(Math.random() * Math.floor(dataEkyc.length)));
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
    }

    return (
        <>
            <div className="row">
                <div className="col-12 p-0">
                    <div className="row">
                        {capturing === true &&
                            <div className="col-12 text-center pt-2">
                                <p>
                                    {
                                        t(dataEkyc[randomChoice])
                                    }
                                </p>
                            </div>
                        }
                        <div className="col-10 p-0 w-100 d-flex mx-auto justify-content-center">
                            <select className="form-control 100" onChange={(event: any) => setDeviceId(event.target.value)}>
                                {
                                    devices.map((device, index) => {
                                        return (
                                            <option value={device.deviceId} key={index}>{device.label}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        {recordedChunks.length > 0 && capturing === false && previewVideo !== null ?
                            <div className="col-10 mx-auto w-100  d-flex justify-content-center py-3">
                                <video className="w-100" controls src={previewVideo}></video>
                            </div>
                            : ''
                        }
                        <div className={capturing === true ? "col-10 mx-auto px-0 pt-3  w-100 d-flex justify-content-center" : "d-none"}>

                            {

                                <Webcam className={capturing === true ? "d-block w-100" : "d-none"} ref={webcamRef} audio={true} videoConstraints={{ deviceId: deviceId }} />
                            }
                        </div>

                        <div className="col-lg-10 col-10 mx-auto p-0 text-left">
                            <div className="d-flex justify-content-between w-100 pt-4">
                                <div className="d-block">
                                    {
                                        recordedChunks.length > 0 && capturing === false ?
                                            <button className="btn btn-primary" onClick={handleStartCaptureClick}>{t('reRecord')}</button> :
                                            <button className="btn btn-primary"
                                                disabled={
                                                    capturing === false ?
                                                        false : true
                                                }
                                                onClick={handleStartCaptureClick}>{t('record')}</button>

                                    }
                                </div>

                                <div className="d-block">
                                    <button className="btn btn-primary w-100"
                                        disabled={recordedChunks.length > 0 && previewVideo !== null ? false : true}
                                        onClick={() => submitUploadCapture(previewVideo)}
                                    >
                                        {t('next')}
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default withTranslation('common')(WebcamStreamCapture)