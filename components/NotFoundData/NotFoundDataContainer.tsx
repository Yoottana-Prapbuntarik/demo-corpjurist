
import { NotFoundDataPresenter } from "./NotFoundDataInterface";
import { connect } from 'react-redux'
import { withTranslation } from '../../i18n'
import NotFoundData from './NotFoundData'
const notFoundDataPresenter: NotFoundDataPresenter = {
    keyimagePath: 'assets/images/no-data.jpg',
}

export const notFoundDataReducer = (state: NotFoundDataPresenter = notFoundDataPresenter) => {
    return state
}

const mapStateToProps = (state: any) => ({
    notFoundDataPresenter: state.notFoundDataReducer
})

export default withTranslation('common')(connect(mapStateToProps)(NotFoundData))