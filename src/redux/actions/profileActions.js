import { ActionTypes } from "../constants/action-types.js";

export const setProfileId = (profileId) => {
    return {
        type: ActionTypes.SET_PROFILE_ID,
        payload: profileId
    }
}

export const setProfileData = (profileData) => {
    return {
        type: ActionTypes.SET_PROFILE_DATA,
        payload: profileData
    }
}

export const setProfileFriends = (profileFriends) => {
    return {
        type: ActionTypes.SET_PROFILE_FRIENDS,
        payload: profileFriends
    }
}

export const setProfileGames = (profileGames) => {
    return {
        type: ActionTypes.SET_PROFILE_GAMES,
        payload: profileGames
    }
}

export const removeProfile = () => {
    return {
        type: ActionTypes.REMOVE_PROFILE,
    }
}