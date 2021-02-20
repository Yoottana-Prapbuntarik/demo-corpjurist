export interface ClassNameBuilder {
    readonly name: string;
    readonly valueClassName: string;
}

export interface VotePerShare {
    readonly name: string;
    readonly valueVotePerShare: string;
}

export interface FetchDataShareHolder {
    className: string;
    votePerShare: string;
}

export interface PreferenceShareManagerPresenter {
    enableNewClass: boolean;
    readonly keyHeaderPreferenceBuilder: string;
    readonly classNameBuilder: ClassNameBuilder;
    readonly votePerShare: VotePerShare;
    readonly buttonAddNewClass: string;
    readonly buttonCloseShareBuilder: string;
    readonly buttonDeleteShareBuilder: string;
    readonly buttonEditShareBuilder: string;
    fetchDataShareHolder: FetchDataShareHolder[];
}

export enum PreferenceShareManagerAction {
    handleClickEnableNewClass = 'handleClickEnableNewClass'
}
