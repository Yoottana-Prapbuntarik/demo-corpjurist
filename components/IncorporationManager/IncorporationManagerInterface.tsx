export interface MemberItems {
    readonly linkItems: LinkItems[];
}

export interface LinkItems {
    readonly keyTitlePath: string;
    readonly routePath: string;
}
export interface KeyDialogDetail {
    readonly dialogDetail: string;
}
export interface MemberDialog {
    readonly keyPathUsedDailog: string;
    readonly keyDialogTitle: string;
    readonly keyDialogDetail: KeyDialogDetail[];
    readonly keyCloseTab: string;
}

export interface MemberPresenter {
    readonly keyIncorporationTitle: string;
    readonly memberItems: MemberItems;
    readonly memberDialog: MemberDialog[];
}
