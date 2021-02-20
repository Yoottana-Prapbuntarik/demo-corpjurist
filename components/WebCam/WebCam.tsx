import React, { Fragment, useEffect, useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";
import { withTranslation } from "../../i18n";
const WebcamCapture = ({ submitUploadCapture, startLoadingUpload, t }: any) => {
  const [deviceId, setDeviceId] = useState({});
  const [devices, setDevices] = useState([]);
  const [showImg, setShowImg] = useState('');
  const webcamRef = useRef(null);

  const handleDevices = useCallback(mediaDevices => setDevices(mediaDevices.filter(({ kind }) => kind === "videoinput")), [setDevices]);

  const uploadImages = async () => {
    await startLoadingUpload()
    const data = new FormData()
    data.append("file", showImg)
    data.append("upload_preset", "Corpjurist-image")
    const response = await fetch("https://api.cloudinary.com/v1_1/dzswifsou/image/upload/", {
      method: 'POST',
      body: data
    })

    const file = await response.json()
    submitUploadCapture(file.url)
  }

  useEffect(() => {
        navigator.mediaDevices.enumerateDevices().then(handleDevices);
  }, [handleDevices, devices]);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setShowImg(imageSrc)
  },
    [webcamRef]
  );

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

          <div className={showImg === '' ? "col-10 p-0 mx-auto mt-3 w-100 d-flex justify-content-center" : "d-none"}>

            {

              <Webcam className={showImg === '' ? "d-block w-100" : "d-none"} ref={webcamRef} screenshotFormat={'image/png'} audio={false} videoConstraints={{ deviceId: deviceId }} />
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
                <button onClick={() => uploadImages()} className="btn btn-primary w-100" disabled={showImg === '' ? true : false}>
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