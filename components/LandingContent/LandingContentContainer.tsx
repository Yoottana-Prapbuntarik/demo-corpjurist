import {
    connect
} from "react-redux";
import {
    LandingContentPresenter,
    SectionItem,
    MainContent
} from "./LandingContentInterface";
import {
    withTranslation
} from "../../i18n";
import LandingContent from "./LandingContent";

const sectionItem: SectionItem[] = [
    {
        images: "/assets/images/landingcontent/feature1.png",
    },
    {
        images: "/assets/images/landingcontent/feature2.png",
    },
    {
        images: "/assets/images/landingcontent/feature3.png",
    },
    {
        images: "/assets/images/landingcontent/feature4.png",
    },
    {
        images: "/assets/images/landingcontent/feature5.png",
    },
]

const sectionItem2: SectionItem[] = [
    {
        images: "/assets/images/landingcontent/feature6.png",
    },
    {
        images: "/assets/images/landingcontent/feature7.png",
    },
    {
        images: "/assets/images/landingcontent/feature8.png",
    },
    {
        images: "/assets/images/landingcontent/feature9.png",
    },
]

const mainContent: MainContent = {
    image: "/assets/images/landingcontent/Legal3.png",
    detail: "detailIntroduction"
}

const landingContentPresenter: LandingContentPresenter = {
    sectionItem: sectionItem,
    sectionItem2: sectionItem2,
    mainContent: mainContent,
    detailFunction: "detailFunction",
    detailClientAccess: "detailClientAccess",
    detailKeepSeat: "detailKeepSeat"
}

export const landingContentReducer = (state: LandingContentPresenter = landingContentPresenter) => {
    return state;
}

const mapStateToProps = (state: any) => ({
    landingContentPresenter: state.landingContentReducer
})

export default withTranslation("common")(connect(mapStateToProps)(LandingContent))