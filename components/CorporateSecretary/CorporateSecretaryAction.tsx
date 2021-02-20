import { Dispatch } from "redux";
import { CorporateSecretaryAction } from "./CorporateSecretaryInterface";
import {
    companyBasicInfoAPIClient,
    updateCompanyBasicInfoAPIClient,
    getCompanyBasicInfo,
} from '../../apis/companyBasicInfoAPIClient'
import {
    getCompanyBasicInfoId,
    dataAPI
} from "./CorporateSecretaryReducer";
import { reset, arrayPush } from "redux-form";
import { FormManager } from "../../manager/formManager";
import { keyManagerFieldArray } from "../../manager/keyManagerFieldArray";
import { KeyManager } from "../../manager/keyManager";

let authorisedSignatoryDelete: Array<number> = []
let signingAuthorityDelete: Array<number> = []
export let imageUpload: any

export const mapDispatchToProps = (dispatch: Dispatch) => ({

    handleChangeBusinessRegistration: (event) => {
        dispatch({
            type: CorporateSecretaryAction.handleChangeBusinessRegistration,
            payload: event
        })
    },

    handleChangeName: (event) => {
        dispatch({
            type: CorporateSecretaryAction.handleChangeName,
            payload: event
        })
    },

    handleChangeHqAddress: (event) => {
        dispatch({
            type: CorporateSecretaryAction.handleChangeHqAddress,
            payload: event
        })
    },

    handleChangeCapital: (event) => {
        dispatch({
            type: CorporateSecretaryAction.handleChangeCapital,
            payload: event
        })
    },

    handleChangeTotalAmount: (event) => {
        dispatch({
            type: CorporateSecretaryAction.handleChangeTotalAmount,
            payload: event
        })
    },

    acceptAcknowledge: async (event: any) => {
        await dispatch(getCompanyBasicInfo())
        await dispatch({
            type: CorporateSecretaryAction.acceptAcknowledge,
            payload: event
        })
    },

    checkAuthorisedAndUploadLogo: () => {
        dispatch({
            type: CorporateSecretaryAction.checkAuthorisedAndUploadLogo,
            payload: "invalidData"
        })
    },

    handldSubmitForm: async (event: any) => {
        if (event.authorisedSignatory.length === 0) {
            await dispatch({
                type: CorporateSecretaryAction.handleNullSignatory,
                payload: KeyManager.Informationrequired
            })

            await dispatch({
                type: CorporateSecretaryAction.setPopup,
                payload: {}
            })

        } else {
            let listOfAuthorisedSignatory = await event.authorisedSignatory.map((item) => { return { name: item.name } })
            dispatch({
                type: CorporateSecretaryAction.startLoading,
                payload: true
            })

            dispatch(reset(FormManager.CorporateSecretaryForm))

            dispatch(companyBasicInfoAPIClient(
                imageUpload,
                event.businessRegistration,
                event.businessName,
                event.hqAddress,
                event.registrateredCapital,
                listOfAuthorisedSignatory,
                [{ name: event.signatoryAuthority }],
            ))

            dispatch({
                type: CorporateSecretaryAction.clearAllState
            })
        }
    },

    handldSubmitUpdateForm: async (event: any) => {
        let update = {
            authorisedSignatory: [],
        }

        let created = {
            authorisedSignatory: [],
        }

        await event.authorisedSignatory.map(item => item.id === 0 ? created.authorisedSignatory.push({ name: item.name }) :
            update.authorisedSignatory.push({ id: item.id, name: item.name }))


        dispatch({
            type: CorporateSecretaryAction.startLoading,
            payload: true
        })

        dispatch(reset(FormManager.CorporateSecretaryForm))


        dispatch(updateCompanyBasicInfoAPIClient(
            getCompanyBasicInfoId,
            imageUpload,
            event.businessRegistration,
            event.businessName,
            event.hqAddress,
            event.registrateredCapital,
            update.authorisedSignatory,
            [{ id: dataAPI.signing_authority[0].id, name: event.signatoryAuthority }],
            created.authorisedSignatory,
            authorisedSignatoryDelete,
        ))
        dispatch({
            type: CorporateSecretaryAction.clearAllState
        })

        authorisedSignatoryDelete = []
        signingAuthorityDelete = []
        update = {
            authorisedSignatory: [],
        }
        created = {
            authorisedSignatory: [],
        }

    },

    getCompanyBasicInfo: () => {
        dispatch(getCompanyBasicInfo())
        dispatch({
            type: CorporateSecretaryAction.startLoading,
            payload: true
        })
    },

    clearAllState: () => {
        dispatch({
            type: CorporateSecretaryAction.clearAllState
        })
    },

    removeAuthorisedSignatory: (id: any) => {
        authorisedSignatoryDelete.push(id)
    },

    removeSigningAuthority: (id: any) => {
        signingAuthorityDelete.push(id)
    },

    addNewSignatoryAndauthorised: (event: any) => {
        dispatch({
            type: CorporateSecretaryAction.addNewSignatoryAndauthorised,
            payload: event
        })
    },

    addCorporateSecretaryForm: (): any => {
        dispatch(arrayPush(FormManager.CorporateSecretaryForm, keyManagerFieldArray.authorisedSignatory, { id: 0, name: "" }))
        dispatch({
            type: CorporateSecretaryAction.addNewSignatoryAndauthorised,
            payload: true
        })
    },

    handleChangeAuthorised: (event: Array<any>) => {
        dispatch({
            type: CorporateSecretaryAction.handleChangeAuthorised,
            payload: event
        })
    },

    handleChangeSignatory: (event: any) => {
        dispatch({
            type: CorporateSecretaryAction.handleChangeSignatory,
            payload: event
        })
    },

    setPopup: (dataSubmitForm: any) => {
        dispatch({
            type: CorporateSecretaryAction.setPopup,
            payload: dataSubmitForm
        })
    },

    uploadLogo: async (event: any) => {
        let allowedExtensions = /\.(?:jpg|png|PNG|JPG)/g
        if (!allowedExtensions.test(event[0].name)) {
            imageUpload = ""
            dispatch({
                type: CorporateSecretaryAction.errorTypeFile,
                payload: KeyManager.FilesNotValid
            })

        } else {
            imageUpload = event[0]
            dispatch({
                type: CorporateSecretaryAction.uploadLogo,
                payload: event[0]
            })
        }
    },

})