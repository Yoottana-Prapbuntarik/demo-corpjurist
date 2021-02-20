import { PreferenceShareManagerPresenter, PreferenceShareManagerAction } from './PreferenceShareManagerInterface'
import { preferenceShareManagerPresenter } from './PreferenceShareManagerPresenter'

export const preferenceShareManagerReducer = (state: PreferenceShareManagerPresenter = preferenceShareManagerPresenter,
  action: any): any => {
  switch (action.type) {
    case PreferenceShareManagerAction.handleClickEnableNewClass:
      return {
        ...state,
        enableNewClass: action.payload
      }
  }
  return state
}
