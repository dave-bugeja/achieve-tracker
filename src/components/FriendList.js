import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { removeProfile } from '../redux/actions/profileActions';

function FriendList() {
    const storedFriendsData = useSelector((state) => state.profileFriends);

    const history = useHistory();
    const dispatch = useDispatch();

    const handleClick = profileId => {
        dispatch(removeProfile());
        history.push('/profile/' + profileId);
    };

    if (!storedFriendsData || storedFriendsData.length === 0) {
        return (
            <div>
                <div className="col">
                    <ul className="list-group mb-5">
                        <li className='list-group-item text-center' key='title'><h5>Friends</h5></li>
                        <li className='list-group-item text-center' key='no-results'>Friends list set to private.</li>
                    </ul>
                </div>
            </div>
        );
    } else {
        return (
            <div>
                <div className="col">
                    <ul className="list-group mb-5">
                        <li className='list-group-item text-center' key='title'><h5>Friends</h5></li>
                        {storedFriendsData.map(friend => (
                            <li className="list-group-item friends-list-btn" key={friend.steamid} onClick={() => handleClick(friend.steamid)}>
                                <img src={friend.avatar} className="img-thumbnail" alt="Friend"></img>
                                <div className="d-inline p-3">{friend.personaname}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default FriendList;