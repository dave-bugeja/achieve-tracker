import { useSelector } from 'react-redux';

function GameList() {

    const storedGamesData = useSelector((state) => state.profileGames);

    const renderDate = (timestamp) => {
        //timestamp is in seconds, but Date uses milliseconds so set accordingly
        let date = new Date(0);
        date.setUTCSeconds(timestamp);

        return date.toLocaleString();
    }

    if (!storedGamesData || storedGamesData.length === 0) {
        return (
            <div className="row">
                <div className="col">
                    <ul className="game-list list-group my-5">
                        <li className='list-group-item text-center' key='title'><h5>Games</h5></li>
                        <li key="no-results" className="game-item list-group-item text-center">Games list set to private.</li>
                    </ul>
                </div>
            </div>
        )
    }
    return (
        <div className="row">
            <div className="col">
                <ul className="game-list list-group my-5">
                    <li className='list-group-item text-center' key='title'><h5>Games</h5></li>
                    {storedGamesData.map(game => (
                        <li key={game.appId} className="game-item list-group-item">
                            <img src={game.logo} className="game-image img-thumbnail d-inline-block p-3" alt={game.name}></img>
                            <div className="game-details align-middle d-inline-block p-3">
                                <div className="game-name font-weight-bold mb-1">{game.name}</div>
                                <div className="game-achieves">
                                    {game.achievements.map(achievement => (
                                        <div key={achievement.apiname} className="achievement-square d-inline-block">
                                            <img src={achievement.icon} className="achievement-image d-inline-block mr-2 mt-1" alt={achievement.displayName} title={`${achievement.displayName}\nUnlocked: ${renderDate(achievement.unlocktime)}`}></img>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default GameList;