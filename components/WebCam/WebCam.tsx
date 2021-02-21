import React, { Fragment, useEffect, useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";
import { withTranslation } from "../../i18n";
const WebcamCapture = ({ submitUploadCapture, startLoadingUpload, t }: any) => {
  const [deviceId, setDeviceId] = useState({});
  const [devices, setDevices] = useState([]);
  const [showImg, setShowImg] = useState('');
  const [capturing, setCapturing] = useState(false);
  const webcamRef = useRef(null);
  
  const handleDevices = useCallback(mediaDevices => setDevices(mediaDevices.filter(({ kind }) => kind === "videoinput")), [setDevices]);

  const uploadImages = async (img) => {
    const data = new FormData()
    data.append("file", img)
    data.append("upload_preset", "Corpjurist-image")
    const response = await fetch("https://api.cloudinary.com/v1_1/dzswifsou/image/upload/", {
      method: 'POST',
      body: data
    })

    const file = await response.json()
    await setShowImg(file.url)
    setCapturing(false)
  }

  useEffect(() => {
    let isSyncdevices = devices.find(item => item.deviceId !== "");
    if (isSyncdevices === undefined) {
      try {
        setInterval(() => {
          navigator.mediaDevices.enumerateDevices().then(handleDevices);
        }, 2000)
      } catch (error) {
        console.log(error);
      }
    } else {
      navigator.mediaDevices.enumerateDevices().then(handleDevices);
    }
  }, [handleDevices]);

  const capture = useCallback(() => {
    setCapturing(true)
    const imageSrc = webcamRef.current.getScreenshot();
    uploadImages(imageSrc)
    
  },
  [webcamRef]
  );
  
  const  submitUpload = async (showImg) =>{
    await submitUploadCapture(showImg)
    await startLoadingUpload()
  }
  

  return (
    <div className="row">
      <div className="col-12 p-0">
        <div className="row">
          <div className="col-10 mx-auto p-0  w-100 d-flex justify-content-center">
            <select className="form-control w-100" onChange={(event: any) => setDeviceId(event.target.value)}>
              {
                devices.map((device, index) => {
                  return (
                    <Fragment key={index}>
                      <option value={device.deviceId} >{device.label}</option>
                    </Fragment>
                  )
                })
              }
            </select>
          </div>
          {showImg !== '' ?
            <div className="col-10 mx-auto py-5 mt-5   w-100 d-flex justify-content-center">

              <img src={showImg} alt={showImg} />
            </div> : ''}

          <div className={showImg === '' && capturing === false ? "col-10 p-0 mx-auto mt-3 w-100 d-flex justify-content-center" : "d-none"}>

            {

              <Webcam className={showImg === '' && capturing === false ? "d-block w-100" : "d-none"} ref={webcamRef} screenshotFormat={'image/png'} audio={false} videoConstraints={{ deviceId: deviceId }} />
            }
          </div>

          <div className="col-lg-10  col-10 mx-auto p-0 text-left py-4">
            <div className="d-flex justify-content-between w-100">
              <div className="d-block">
                {showImg === '' ?
                  < button onClick={() => capture()} className="btn btn-primary w-100">
                    {t('capture')}
                  </button>
                  :
                  < button onClick={() => setShowImg('')} className="btn btn-primary w-100">
                    {t('reCapture')}
                  </button>
                }
              </div>
              <div className="d-block">
                <button onClick={() => submitUpload(showImg)} className="btn btn-primary w-100" disabled={showImg === '' ? true : false}>
                  {t('next')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default withTranslation('common')(WebcamCapture)
