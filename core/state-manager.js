const _state = {
    settings: {
        gridSize: {
            rowsCount: 4,
            columnsCount: 4,
        }
    },
    positions: {
        google: {
           x:  0,
           y:  0
       },
       players: [{x: 2, y:2}, {x: 3, y: 3}]
    },
    points: {
        google: 10,
        players: [11, 2]
    }
} // state is shared between all components

// pattern observer
let _observers = []
export function subscribe(observer) {
    _observers.push(observer);
}
function _notifyObservers() {
    _observers.forEach(o => {
        try  {
            o();
        } catch(error) {
            console.error(error);
        }
    })
}
/////////

function _getIndexByNumber(playerNumber)  {
    const playerIndex = playerNumber - 1;

    if (playerIndex  <  0 ||  playerIndex > _state.points.players.length - 1) {
        throw new Error('Incorrect player number');
    }

    return playerIndex;
}

setInterval(() => {
    console.log(_state.positions.google);
    _state.positions.google = {x: 1, y:  2};
    _notifyObservers(); // observers will be notified after each interval
}, 2000)


export async function getGooglePoints() {
    return _state.points.google;
}

/** 
 * 
 * @param {number} playerNumber - one-based index of player
 * @returns {Promise<number>} numbers of player points
 * 
 * */

export async function getPlayerPoints(playerNumber) {
    const playerIndex  = _getIndexByNumber(playerNumber);

    return _state.points.players[playerIndex];
}

export async function getGridSize()  {
    return  {..._state.settings.gridSize};
};

export async function getGooglePosition()  {
    return {..._state.positions.google};
};

export async function getPlayersPositions(playerNumber)   {
    const playerIndex = _getIndexByNumber(playerNumber);

    return {..._state.positions.players[playerIndex]};
};