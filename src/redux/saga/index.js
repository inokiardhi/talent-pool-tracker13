import { all } from "@redux-saga/core/effects";
import { watchDelCompanyLists, watchGetCompanyLists } from "./getCompanyList";
import { watchDelPicLists, watchGetPicLists } from "./getPicList";
import { watchDelTalentLists, watchGetTalentLists } from "./getTalentList";
import { watchDelTrackerLists, watchGetTrackerLists } from "./getTrackerList";
import { watchPostCompanyList, watchUpdateCompanyLists } from "./postCompanyList";
import { watchPostPicLists, watchUpdatePicLists } from "./postPicList";
import { watchPostTalentLists, watchUpdateTalentLists } from "./postTalentList";
import { watchPostTrackerLists, watchUpdateTrackerLists } from "./postTrackerList";

export default function* rootSaga() {
    yield all([
        watchGetTalentLists(),
        watchPostTalentLists(),
        watchDelTalentLists(),
        watchUpdateTalentLists(),
        
        watchGetPicLists(),
        watchPostPicLists(),
        watchDelPicLists(),
        watchUpdatePicLists(),
        
        watchGetCompanyLists(),
        watchPostCompanyList(),
        watchDelCompanyLists(),
        watchUpdateCompanyLists(),
        
        watchGetTrackerLists(),
        watchPostTrackerLists(),
        watchDelTrackerLists(),
        watchUpdateTrackerLists(),
    ]);
  }