import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { removeProfile } from '../redux/actions/profileActions';
import { getSteam64Id } from '../utilities/SteamAPI.js';

export const Home = () => {

    const history = useHistory();

    const dispatch = useDispatch();

    const [errorMessage, setErrorMessage] = useState('');

    //Reset all user data upon return to landing page
    dispatch(removeProfile());

    const handleIdChange = (e) => {
        if (e.which === 13) {
            //if "Enter" key pressed
            handleFormSubmit(e);
        } else {
            //Only alphanumeric characters allowed
            const keyCode = e.keyCode || e.which;
            const keyValue = String.fromCharCode(keyCode);
            if (keyValue.match("^[a-zA-Z0-9]*$") == null) {
                e.preventDefault();
            }
        }
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');

        //handle case of click button or "Enter" key 
        let userId = e.target.steamId ? e.target.steamId.value : e.target.value;
        if (userId !== '') {
            if (!Number.isInteger(parseInt(userId))) {
                await getSteam64Id(userId)
                    .then(steamIdDetails => {
                        if (!steamIdDetails.error) {
                            userId = steamIdDetails.steamId;
                        } else {
                            //display error
                            userId = '';
                            setErrorMessage(steamIdDetails.error);
                        }
                    })
            }

            if (userId !== '' && Number.isInteger(parseInt(userId))) {
                history.push('/profile/' + userId);
            }
        }
    }

    return (
        <div>
            <h2>Landing Page</h2>

            <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                    <label htmlFor="steamId" className="mb-4">Please enter the Steam64 id or vanity username of the account you wish to look up.</label>
                    {errorMessage && (
                        <p className="error text-danger"> {errorMessage} </p>
                    )}
                    <input type="text" className="form-control" id="steamId" aria-describedby="steamIdHelp" name="steamId" onKeyPress={handleIdChange} placeholder="Enter Steam64 id or vanity username" />
                    <small id="steamIdHelp" className="form-text text-muted">Doesn't currently support vanity URLs, but will be added in the future!</small>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}

export default Home;