export const getSteamProfile = userId => {
    return fetch(`http://${process.env.REACT_APP_SERVER_HOST_NAME}:${process.env.REACT_APP_SERVER_HOST_PORT}/steam/user/${userId}/profile`)
        .then(res => res.json())
        .then(
            (result) => {
                if (result != null) {
                    return result;
                } else if (result != null) {
                    return { error: result.error };
                } else {
                    return { error: "Application error", }
                }
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                return { error: "Network error", }
            }
        )
}

export const getSteam64Id = vanityUrl => {
    return fetch(`http://${process.env.REACT_APP_SERVER_HOST_NAME}:${process.env.REACT_APP_SERVER_HOST_PORT}/steam/user/${vanityUrl}/vanityurl`)
        .then(res => res.json())
        .then(
            (result) => {
                if (result != null && !result.error) {
                    return result;
                } else if (result != null) {
                    return { error: result.error };
                } else {
                    return { error: "Application error", }
                }
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                return { error: "Network error", }
            }
        )
}