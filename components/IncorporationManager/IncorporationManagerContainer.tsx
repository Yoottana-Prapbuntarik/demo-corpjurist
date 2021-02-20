import { connect } from 'react-redux'
import { withTranslation } from '../../i18n'
import {
  MemberPresenter,
  MemberItems,
  LinkItems,
  MemberDialog,
  KeyDialogDetail
} from './IncorporationManagerInterface'
import IncorporationManager from './IncorporationManager'

const linkItems: LinkItems[] = [
  { keyTitlePath: 'companyInformation', routePath: '/companyInformation' },
  { keyTitlePath: 'shareMyCompany', routePath: '/shareMyCompany' }
]

const dialogCompanyInformationDetail: KeyDialogDetail [] = [
  {
    dialogDetail: 'dialogDetailInformationI'
  },
  {
    dialogDetail: 'dialogDetailInformationII'
  }
]

const shareMyCompanyDetail: KeyDialogDetail [] = [
  {
    dialogDetail: 'shareMyCompanyI'
  },
  {
    dialogDetail: 'shareMyCompanyII'
  },
  {
    dialogDetail: 'shareMyCompanyIII'
  },
  {
    dialogDetail: 'shareMyCompanyIV'
  }
]

const memberDialog: MemberDialog [] = [
  {
    keyPathUsedDailog: 'companyInformation',
    keyDialogTitle: 'companyInformationTitle',
    keyDialogDetail: dialogCompanyInformationDetail,
    keyCloseTab: 'close'
  },
  {
    keyPathUsedDailog: 'shareMyCompany',
    keyDialogTitle: 'shareMyCompany',
    keyDialogDetail: shareMyCompanyDetail,
    keyCloseTab: 'close'
  }
]

const memberItems: MemberItems = {
  linkItems: linkItems
}

const memberPresenter: MemberPresenter = {
  keyIncorporationTitle: 'incorporation',
  memberItems: memberItems,
  memberDialog: memberDialog
}

export const inCorporationManagerReducer = (state: MemberPresenter = memberPresenter) => {
  return state
}

const mapStateToProps = (state: any) => ({
  memberPresenter: state.inCorporationManagerReducer
})

export default withTranslation('common')(connect(mapStateToProps)(IncorporationManager))
