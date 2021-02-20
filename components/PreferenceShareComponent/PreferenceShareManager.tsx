import { withTranslation } from '../../i18n'
import CustomeTextField from '../FieldComponents/CustomeTextField'
import { Field } from 'redux-form'
import { useDispatch } from 'react-redux'
import BoxShareHolderComponent from '../BoxShareHolderComponent/BoxShareHolderComponent'
import './styles.scss'

const PreferenceShareManager = ({ idModal, preferenceShareManagerPresenter, handleClickEnableNewClass, t }: any) => {
  const Dispatch = useDispatch()
  return (
    <div className="modal fade" id={idModal} role="dialog">
      <div className="modal-dialog w-100 modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header d-flex">
            <div className="jusify-content-start pt-2">
              <h5>
                {t(preferenceShareManagerPresenter.keyHeaderPreferenceBuilder)}
              </h5>
            </div>
            <div className="jusify-content-end">
              <button type="button" className="close" data-dismiss="modal">
                <svg className="bi bi-x" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <BoxShareHolderComponent
                className={preferenceShareManagerPresenter.classNameBuilder.name}
                preferenceDataAPI={preferenceShareManagerPresenter.fetchDataShareHolder}
                keyButtonEdit={preferenceShareManagerPresenter.buttonEditShareBuilder}
                keyButtonDelete={preferenceShareManagerPresenter.buttonDeleteShareBuilder} />
              <div className={`modal-body px-auto ${preferenceShareManagerPresenter.enableNewClass ? 'animation-fade-box ' : 'd-none'}`}>
                <div className="col-12">
                  <label>{t(preferenceShareManagerPresenter.votePerShare.name)}</label>
                  <Field
                    name={preferenceShareManagerPresenter.votePerShare.name}
                    type="text"
                    component={CustomeTextField}
                    styleTextError="text-danger"
                    className="form-control"
                    label={t(preferenceShareManagerPresenter.votePerShare.name)}
                    currentValue={preferenceShareManagerPresenter.votePerShare.valueVotePerShare}
                  />
                </div>
                <div className="col-12">
                  <label>{t(preferenceShareManagerPresenter.classNameBuilder.name)}</label>
                  <Field
                    name={preferenceShareManagerPresenter.classNameBuilder.name}
                    type="text"
                    component={CustomeTextField}
                    styleTextError="text-danger"
                    className="form-control"
                    label={t(preferenceShareManagerPresenter.classNameBuilder.name)}
                    currentValue={preferenceShareManagerPresenter.classNameBuilder.valueClassName}
                  />
                </div>
              </div>
            </div>
            <div className="d-block text-center">
              <button className="btn btn-primary w-75  my-5 mx-1" onClick={() => Dispatch(handleClickEnableNewClass)}>{t(preferenceShareManagerPresenter.buttonAddNewClass)}</button>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default withTranslation('common')(PreferenceShareManager)
