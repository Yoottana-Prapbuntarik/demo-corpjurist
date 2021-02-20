import React, { Fragment, useEffect, useRef, useCallback, useState } from "react";
import Webcam from "react-webcam";
import { withTranslation } from "../../i18n";
const webCamEdit = ({ submitUploadCapture, t }: any) => {
  const [deviceId, setDeviceId] = useState({});
  const [devices, setDevices] = useState([]);
  const [showImg, setShowImg] = useState('');
  const webcamRef = useRef(null);

  const handleDevices = useCallback(mediaDevices => setDevices(mediaDevices.filter(({ kind }) => kind === "videoinput")), [setDevices]);

  useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then(handleDevices);
  }, [handleDevices, devices]);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setShowImg(imageSrc)
    uploadImages(imageSrc)
  },
    [webcamRef]
  );


  const uploadImages = async (img) => {
    const data = new FormData()
    data.append("file", img)
    data.append("upload_preset", "Corpjurist-image")
    const response = await fetch("https://api.cloudinary.com/v1_1/dzswifsou/image/upload/", {
      method: 'POST',
      body: data
    })

    const file = await response.json()
    submitUploadCapture(file.url)
  }
  return (
    <div className="row">
      <div className="col-12">
        <select className="form-control w-100 mb-3" onChange={(event: any) => setDeviceId(event.target.value)}>
          {
            devices.map((device, index) => {
              return (
                <Fragment key={index}>
                  <option value={device.deviceId}>{device.label}</option>
                </Fragment>
              )
            })
          }
        </select>
        {showImg !== '' ? <img className="d-block w-100 my-3" src={showImg} alt={showImg} /> : ''}

        <Webcam className={showImg === '' ? "d-block w-100 my-3" : "d-none"} ref={webcamRef} screenshotFormat={'image/png'} audio={false} videoConstraints={{ deviceId: deviceId }} />

        {showImg === '' ?
          < button type="button" onClick={() => capture()} className="btn btn-primary ">
            {t('capture')}
          </button>
          :
          < button type="button" onClick={() => setShowImg('')} className="btn btn-primary ">
            {t('reCapture')}
          </button>
        }

      </div>

    </div>
  );
};

export default withTranslation('common')(webCamEdit)