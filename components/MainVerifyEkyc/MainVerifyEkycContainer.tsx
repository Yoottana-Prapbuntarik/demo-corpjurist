import { MainVerifyEkycPresenter } from "./MainVerifyEkycInterface";
import MainVerifyEkyc from "./MainVerifyEkyc";
import { connect } from "react-redux";
const  mainVerifyEkycPresenter: MainVerifyEkycPresenter = {
    keyImagePath: '/assets/images/activate/activate.jpg',
    confirmIdentity: "confirmIdentity"
}

export const mainVerifyEkycReducer = (state: MainVerifyEkycPresenter = mainVerifyEkycPresenter) => {
        return state
}

const mapStateToProps = (state: any) => ({
    mainVerifyEkycPresenter: state.mainVerifyEkycReducer
})

export default connect(mapStateToProps)(MainVerifyEkyc)