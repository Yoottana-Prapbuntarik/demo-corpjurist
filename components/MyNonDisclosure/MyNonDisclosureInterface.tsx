export interface PartyApproval {
  name: string;
  valueEmailPartyApproval: string;
  placeholder: string;
}
export interface PartyII {
    name: string;
    valueEmailParty: string;
    placeholder: string;
}

export interface MyNonDisclosurePresenter {
    headerMyNonDisclosure: string;
    partyApproval: PartyApproval;
    partyII: PartyII;
    buttonSendData: string;
    isLoadingMyNonDisclosure: boolean;
    isAcknowledgeError: boolean;
    keyMyNonDisclosureFalse: string;
}

export enum MyNonDisclosureAction {
    handleChangeApproval = 'handleChangeApproval',
    handleChangePartyII = 'handleChangePartyII',
    startLoadingMyNonDisclosure = 'startLoadingMyNonDisclosure',
    acknowledgeError = 'acknowledgeError',
    clearFormisNotEmailPartyII = 'clearFormisNotEmailPartyII'
}
