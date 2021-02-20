const Loading = () => {
  return (
    <div>
      <style jsx global>
        {`

      body {
      overflow:hidden;
      }
      
      .text-loading{
        position: absolute;
      }
      
      .container-loading {
        width: 100% !important;
        height: 100vh;
        z-index:9000;
      }
      
      .container-loading {
      display: flex;
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      max-height: 100%;
      overflow: hidden;
      background-color: rgba(0, 0, 0, 0.4);
      z-index: 9000;
      }
      
      .spinner-border-container {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
      }
      
      `}

      </style>
      <div className="container-loading">
        <div className="spinner-border-container">
          <div className="spinner-border spinner-grow-lg text-primary" style={{ width: '8rem', height: '8rem' }} role="status">
            <span className="sr-only">Loading...</span>
          </div>
          {/* <div className="text-white font-weight-bold text-loading">
            Loading ...
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Loading
