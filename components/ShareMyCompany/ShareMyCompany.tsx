import { withTranslation } from '../../i18n'
import { useEffect } from 'react'
import Router from 'next/router'
import { Field } from 'redux-form'
import SelectField from '../FieldComponents/SelectField'
import CustomeTextField from '../FieldComponents/CustomeTextField'
import PreferenceShareManagerContainer from '../PreferenceShareComponent/PreferenceShareManagerContainer'
import ShareHolderManagerContainer from '../AddShareHolderComponent/ShareHolderManagerContainer'

const ShareMyCompany = ({ shareMyCompanyPresenter, t }: any) => {
  useEffect(() => {
    if (!localStorage.getItem('access-token')) {
      Router.push('/signin')
    }
  }, [])
  return (
    <div className="row">
      <div className="col-lg-5 col-12">
        <h5>
          {t(shareMyCompanyPresenter.keyHeaderHolders)}
        </h5>
        <div className="row bg-light py-4 my-2">
          <div className="col-lg-6 col-12 py-1">
            <article className="py-1">
              {t(shareMyCompanyPresenter.shareHolderItems.keyStatusShare)} Lorem ipsum dolor sit amet
            </article>
            <article className="py-1">
              {t(shareMyCompanyPresenter.shareHolderItems.keyShareHolderByName)} Mr. Kitinun chobtam
            </article>
            <div className="d-flex flex-wrap">
              <div className="flex-fill pt-4">
                {t(shareMyCompanyPresenter.shareHolderItems.keyTypeShare)}
              </div>
              <div className="flex-fill">
                <Field
                  disabledState={
                    false
                  }
                  style="w-100 px-4"
                  name={''}
                  key={1} component={SelectField}
                  styleTextError="text-danger"
                >
                  <option value={0}>
                    {'test'}
                  </option>
                </Field>
              </div>
            </div>
          </div>
          <div className="col-lg-6  col-12">
            <div className="d-flex justify-content-center">
              <button className="btn btn-primary text-white w-50 py-3 mx-1 my-2">
                <svg className="bi bi-pencil" width="2rem" height="2rem" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z" />
                  <path fillRule="evenodd" d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z" />
                </svg>
                <br />
                <span className="text-capitalize">
                  {t(shareMyCompanyPresenter.keyButtonEdit)}
                </span>
              </button>
              <button className="btn btn-danger w-50 py-3 mx-1 my-2">
                <svg className="bi bi-trash" width="2rem" height="2rem" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                  <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                </svg>
                <br />
                <span className="text-capitalize">
                  {t(shareMyCompanyPresenter.keyButtonDelete)}
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mx-auto mx-md-0 mt-5">
            <div className="d-flex flex-md-nowrap flex-wrap">
              <button className="btn btn-primary w-100  mx-1 my-2" data-toggle="modal" data-target={`#${shareMyCompanyPresenter.keyButtonAddShareHolder}`}>
                {t(shareMyCompanyPresenter.keyButtonAddShareHolder)}
              </button>
              <button className="btn btn-primary w-100  mx-1 my-2" data-toggle="modal" data-target={`#${shareMyCompanyPresenter.keyButtonPreference}`}>
                {t(shareMyCompanyPresenter.keyButtonPreference)}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-12 my-3">
        <h5>
          {t(shareMyCompanyPresenter.keyHeaderShareInformation)}
        </h5>
        <div className="row">
          <div className="col-12 my-3">
            <label >{t(shareMyCompanyPresenter.shareInformationItems.keyCapitalCall)}</label>
            <br />
            <Field
              name={shareMyCompanyPresenter.shareInformationItems.keyCapitalCall}
              type="text"
              component={CustomeTextField}
              styleTextError="text-danger"
              className="form-control"
              label={t(shareMyCompanyPresenter.shareInformationItems.keyCapitalCall)}
              currentValue={''}
            // onChange={(event: any) => changeTextFieldCompanyName3(event.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-12">
        <h5>
          {t(shareMyCompanyPresenter.keyHeaderDashBoard)}
        </h5>
        <div className="row">
          <div className="col-md-5 mx-1 my-3 bg-light p-4 text-left  col-12">
            <div className="d-flex flex-column">
              <p className="font-weight-bold text-dark ">
                {t(shareMyCompanyPresenter.dashboard.keyTotalShareHolder)}
              </p>
              <h1 className="font-weight-bold h-100 text-center">
                1
              </h1>
            </div>
          </div>
          <div className="col-md-5 mx-1 my-3 bg-light p-4 text-left  col-12">
            <div className="d-flex flex-column">
              <p className="font-weight-bold text-dark">
                {t(shareMyCompanyPresenter.dashboard.keyTotalShare)}
              </p>
              <h1 className="font-weight-bold h-100 text-center">
                900
              </h1>
            </div>
          </div>
          <div className="col-md-5 mx-1 my-3 bg-light p-4 text-left  col-12">
            <div className="d-flex flex-column">
              <p className="font-weight-bold text-dark">
                {t(shareMyCompanyPresenter.dashboard.keyTotalRegisterCapital)}
              </p>
              <h1 className="font-weight-bold h-100 text-center">
                5
              </h1>
            </div>
          </div>
          <div className="col-md-5 mx-1 my-3 bg-light p-4 text-left  col-12">
            <div className="d-flex flex-column">
              <p className="font-weight-bold text-dark">
                {t(shareMyCompanyPresenter.dashboard.keyPercentedCapitalCall)}
              </p>
              <h1 className="font-weight-bold h-100 text-center">
                25 %
              </h1>
            </div>
          </div>
        </div>
        <div className="col-12 text-right">
          <button className="btn btn-primary w-75  mx-1 my-2">
            {t(shareMyCompanyPresenter.keyButtonSaveShare)}
          </button>
        </div>
      </div>
      <ShareHolderManagerContainer idModal={shareMyCompanyPresenter.keyButtonAddShareHolder} />
      <PreferenceShareManagerContainer idModal={shareMyCompanyPresenter.keyButtonPreference} />
    </div>
  )
}

export default withTranslation('common')(ShareMyCompany)
