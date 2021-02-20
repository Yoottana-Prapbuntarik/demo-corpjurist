export interface ShareHolderItems {
    readonly keyStatusShare: string
    readonly keyShareHolderByName: string;
    readonly keyTypeShare: string;
}

export interface ShareInformationItems {
    readonly keyCapitalCall: string;
}

export interface Dashboard {
    readonly keyTotalShareHolder: string;
    readonly keyTotalShare: string;
    readonly keyTotalRegisterCapital: string;
    readonly keyPercentedCapitalCall: string;
}

export interface ShareMyCompanyPresenter {
    readonly keyHeaderHolders: string;
    readonly keyHeaderShareInformation: string;
    readonly keyHeaderDashBoard: string;
    readonly keyButtonEdit: string;
    readonly keyButtonDelete: string;
    readonly keyButtonAddShareHolder: string;
    readonly keyButtonPreference: string;
    readonly keyButtonSaveShare: string;
    readonly shareHolderItems: ShareHolderItems
    readonly shareInformationItems: ShareInformationItems
    readonly dashboard: Dashboard
}
