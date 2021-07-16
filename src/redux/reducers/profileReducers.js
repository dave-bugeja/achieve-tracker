import { ActionTypes } from "../constants/action-types.js";

export const profileIdReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PROFILE_ID:
            return payload;
        case ActionTypes.REMOVE_PROFILE:
            return {};
        default:
            return state;
    }
}

export const profileDataReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PROFILE_DATA:
            return { ...state, ...payload };
        case ActionTypes.REMOVE_PROFILE:
            return {};
        default:
            return state;
    }
}

export const profileFriendsReducer = (state = [], { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PROFILE_FRIENDS:
            return [...payload];
        case ActionTypes.REMOVE_PROFILE:
            return [];
        default:
            return state;
    }
}

export const profileGamesReducer = (state = [], { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PROFILE_GAMES:
            return [...payload];
        case ActionTypes.REMOVE_PROFILE:
            return [];
        default:
            return state;
    }
}