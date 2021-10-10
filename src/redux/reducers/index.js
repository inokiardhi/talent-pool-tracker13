import { combineReducers } from "redux";
import Talents from "./getTalentList";
import PostTalents from "./postTalentList";
import Pics from "./getPicList";
import PostPics from "./postPicList";
import Companies from "./getCompanyList";
import PostCompanies from "./postCompanyList";
import Trackers from "./getTrackerList";
import PostTrackers from "./postTrackerList";

export default combineReducers({
    Talents,
    PostTalents,

    Pics,
    PostPics,

    Companies,
    PostCompanies,
    
    Trackers,
    PostTrackers,
});
