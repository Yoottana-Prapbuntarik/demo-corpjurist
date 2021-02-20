export interface MainContent {
    image: string;
    detail: string;
}

export interface SectionItem {
    readonly images: string;
}

export interface LandingContentPresenter {
    sectionItem: SectionItem[];
    sectionItem2: SectionItem[];
    mainContent: MainContent;
    detailFunction: string;
    detailClientAccess: string;
    detailKeepSeat: string;
}