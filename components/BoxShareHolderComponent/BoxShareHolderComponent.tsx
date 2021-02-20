const BoxShareHolderComponent = (props: any) => {
  return (
    <div className="container">
      {
        props.preferenceDataAPI.map((listPreferenceShare, index: number) => {
          return (
            <div className="container" key={index}>
              <div className="row bg-light py-4 my-2">
                <div className="col-lg-7 col-12 py-1">
                  <article className="py-1">
                    {props.className} {listPreferenceShare.className}
                  </article>
                  <article className="py-1">
                    {listPreferenceShare.votePerShare}
                  </article>
                </div>
                <div className="col-lg-5 col-12">
                  <div className="d-flex">
                    <button type="submit" className="btn btn-primary text-white w-50 mx-1 ">
                      <svg className="bi bi-pencil" width="2rem" height="2rem" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z" />
                        <path fillRule="evenodd" d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z" />
                      </svg>
                      <br />
                      <span className="text-capitalize">
                        {props.keyButtonEdit}
                      </span>
                    </button>
                    <button type="submit" className="btn btn-danger w-50 mx-1 ">
                      <svg className="bi bi-trash" width="2rem" height="2rem" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                      </svg>
                      <br />
                      <span className="text-capitalize">
                        {props.keyButtonDelete}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
    </div >
  )
}

export default BoxShareHolderComponent
