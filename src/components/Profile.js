import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import FriendList from './FriendList.js';
import GameList from './GameList.js';
import ProfileSummary from './ProfileSummary.js';
import { setProfileData, setProfileFriends, setProfileGames, setProfileId } from '../redux/actions/profileActions';
import { getSteamProfile } from "../utilities/SteamAPI.js";

function Profile() {

    let storedProfileData = useSelector((state) => state.profileData);
    const dispatch = useDispatch();
    let { paramUserId } = useParams();

    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        dispatch(setProfileId(paramUserId));
        setErrorMessage('');

        getSteamProfile(paramUserId)
            .then(userData => {
                if (!userData.error) {
                    dispatch(setProfileData(userData.player));
                    dispatch(setProfileFriends(userData.friends));
                    dispatch(setProfileGames(userData.games));
                } else {
                    setErrorMessage(userData.error);
                }
            });
    }, [paramUserId, dispatch])

    if (errorMessage) {
        return <div className="d-flex justify-content-center">
            <div className="text">
                <h4 className="text">{errorMessage}</h4>
            </div>
        </div>
    } else if (Object.keys(storedProfileData).length === 0 || storedProfileData.steamid !== paramUserId) {
        return <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    } else {
        return (
            <div className="row mb-2">
                <div className="col-md-9">
                    <ProfileSummary />
                    <GameList />
                </div>
                <div className="col-md-3">
                    <FriendList />
                </div>
            </div>
        );
    }
}

export default Profile;