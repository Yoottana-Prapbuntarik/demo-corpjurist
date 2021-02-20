import { Dispatch } from 'redux'
import { PreferenceShareManagerAction } from './PreferenceShareManagerInterface'
import { preferenceShareManagerPresenter } from './PreferenceShareManagerPresenter'
export const mapDispatchToProps = (dispatch: Dispatch) => ({

  handleClickEnableNewClass: () => {
    const isEnable = preferenceShareManagerPresenter.enableNewClass = !preferenceShareManagerPresenter.enableNewClass
    dispatch({
      type: PreferenceShareManagerAction.handleClickEnableNewClass,
      payload: isEnable
    })
  }

})
