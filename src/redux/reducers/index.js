import { combineReducers } from "redux";
import { profileDataReducer, profileFriendsReducer, profileGamesReducer, profileIdReducer } from "./profileReducers.js";

const reducers = combineReducers({
    profileId: profileIdReducer,
    profileData: profileDataReducer,
    profileFriends: profileFriendsReducer,
    profileGames: profileGamesReducer,
})

export default reducers;