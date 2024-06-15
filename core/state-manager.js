const _state = {
    settings: {
        /**
         * in milliseconds
         */
        googleJumpInterval: 5000,
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
export function unSubscribe(observer) {
    _observers.filter(o => o !== observer);
}
/////////

function _getIndexByNumber(playerNumber)  {
    const playerIndex = playerNumber - 1;

    if (playerIndex  <  0 ||  playerIndex > _state.points.players.length - 1) {
        throw new Error('Incorrect player number');
    }

    return playerIndex;
}
// generate random number https://stackoverflow.com/questions/40617379/javascript-get-a-random-number-within-range-min-and-max-both-exclusive
function _generateRandomNumber(min, max)  {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()  *  (max  -  min  +  1)  +  min);
}
//////////

// moving
function _jumpGoogleToNewPositions() {
    const newPosition = {..._state.positions.google};

    do {
        newPosition.x = _generateRandomNumber(0,  _state.settings.gridSize.columnsCount - 1);
        newPosition.y = _generateRandomNumber(0,  _state.settings.gridSize.rowsCount - 1);

        var isNewPositionGoogle = 
        newPosition.x === _state.positions.google.x &&
        newPosition.y === _state.positions.google.y;
        var isNewPositionPlayer1 = 
        newPosition.x === _state.positions.players[0].x &&
        newPosition.y === _state.positions.players[0].y;
        var isNewPositionPlayer2 = 
        newPosition.x === _state.positions.players[1].x &&
        newPosition.y === _state.positions.players[1].y;
    } while (isNewPositionGoogle ||  isNewPositionPlayer1 ||  isNewPositionPlayer2);

    _state.positions.google =  newPosition;
}

setInterval(() => {
    console.log(_state.positions.google);
    _jumpGoogleToNewPositions(); // position for google
    _state.points.google +=  1; // points for google
    _notifyObservers(); // observers will be notified after each interval
}, _state.settings.googleJumpInterval);
//////////

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