import {
  PreferenceShareManagerPresenter,
  ClassNameBuilder,
  VotePerShare,
  FetchDataShareHolder

} from './PreferenceShareManagerInterface'
import { KeyManager } from '../../manager/keyManager'

const classNameBuilder: ClassNameBuilder = {
  name: KeyManager.ClassNameBuilder,
  valueClassName: 'value Class Name'
}

const votePerShare: VotePerShare = {
  name: KeyManager.VotePerShare,
  valueVotePerShare: 'value Vote Per Share'
}

const fetchDataShareHolder: FetchDataShareHolder[] = [
  {
    className: 'class A',
    votePerShare: 'Vote per share 1,000'
  },
  {
    className: 'class B',
    votePerShare: 'Vote per share 100'
  },
  {
    className: 'class C',
    votePerShare: 'Vote per share 100'
  }
]

export const preferenceShareManagerPresenter: PreferenceShareManagerPresenter = {
  enableNewClass: false,
  keyHeaderPreferenceBuilder: KeyManager.HeaderPreferenceBuilder,
  votePerShare: votePerShare,
  classNameBuilder: classNameBuilder,
  buttonAddNewClass: KeyManager.ButtonAddNewClass,
  buttonCloseShareBuilder: KeyManager.ButtonCloseShareBuilder,
  buttonDeleteShareBuilder: KeyManager.Delete,
  buttonEditShareBuilder: KeyManager.Edit,
  fetchDataShareHolder: fetchDataShareHolder
}
