export interface DisclosureItems {
    readonly linkItems: LinkItems[];
}

export interface LinkItems {
    readonly keyTitlePath: string;
    readonly routePath: string;
}

export interface KeyDialogDetail {
    readonly dialogDetail: string
}

export interface DisclosureDialog {
    readonly keyPathUsedDailog: string;
    readonly keyDialogTitle: string;
    readonly keyDialogDetail: KeyDialogDetail[];
    readonly keyCloseTab: string;
}

export interface NonDisclosurePresenter {
    readonly keyDisclosureTitle: string;
    readonly keyCorporateSecretaryTitle: string;
    readonly keyShareholderDetailsTitle: string;
    readonly disclosureItems: DisclosureItems;
    readonly disclosureDialog: DisclosureDialog[];
}
