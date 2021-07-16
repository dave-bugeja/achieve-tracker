import { useSelector } from 'react-redux';

function ProfileSummary() {

    let userData = useSelector((state) => state.profileData);

    const renderAccountDate = (timestamp) => {
        //timestamp is in seconds, but Date uses milliseconds so set accordingly
        let date = new Date(0);
        date.setUTCSeconds(timestamp);

        let options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
        return date.toLocaleDateString("en-us", options);
    }

    return (
        <div className="row">
            <div className="col-md-3 profile-pic-div">
                <img src={userData.avatarfull} className="img-thumbnail profile-picture" alt="Profile"></img>
            </div>
            <div className="col-md-9">
                <div className="row profile-text">
                    <h2 className="text-start profile-name mb-3">{userData.personaname}</h2>
                </div>
                <div className="row profile-text">
                    <>
                        <span className="profile-desc-1 mr-1">They have been collecting achievements since </span>
                        <span className="profile-desc-2 font-weight-bold">{renderAccountDate(userData.timecreated)}!</span>
                    </>
                </div>
            </div>
        </div>
    )

}

export default ProfileSummary;