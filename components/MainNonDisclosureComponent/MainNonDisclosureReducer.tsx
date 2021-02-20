import { MainNonDisclosurePresenter } from "./MainNonDisclosureInterface";
import { mainNonDisclosurePresenter } from "./MainNonDisclosurePresenter";
import {
    CompanyBasicInfoAction
} from "../../apis/companyBasicInfoAPIClient";
export const mainNonDisclosureReducer = (state: MainNonDisclosurePresenter = mainNonDisclosurePresenter, action: any): any => {
    switch (action.type) {
        case CompanyBasicInfoAction.checkGeneraldInformationSuccess:
            return {
                ...state,
                checkStatusGeneralInformation: action.checkGeneraldStatus
            }

        case CompanyBasicInfoAction.checkGeneraldInformationFailed:
            return {
                ...state,
                checkStatusGeneralInformation: action.checkGeneraldStatus
            }

        default:
            return state
    }
}