export interface TableEditNonDisclosurePresenter {
    tableHeaderid: string;
    tableHeaderName: string;
    tableHeaderAction: string;
    tableHeaderEmailPartyII: string;
    btnTextEdit: string;
    btnTextDelete: string;
    btnDownload: string;
    dataGetNonDisclosure: any;
    isLoadingTableEditAction: boolean;
    isAcknowledgeError: boolean;
    keyTableEditMessage: string;
    headerInProgress: string;
    headerEffective: string
    btnFinally: string;
    btnTerminate: string;
    btnArchive: string;
    startDateEffective: string;
    endDateEffective: string;
    alert: string
    addEmail: string;
}

export enum TableEditNonDisclosureAction {
    getNonDisclosureEdit = 'getNonDisclosureEdit',
    startLoadingTableEditAction = 'startLoadingTableEditAction',
    acknowledgeError = 'acknowledgeError',
    errorTypeFile = 'errorTypeFile'
}
