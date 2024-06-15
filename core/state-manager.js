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

function _getIndexByNumber(playerNumber)  {
    const playerIndex = playerNumber - 1;

    if (playerIndex  <  0 ||  playerIndex > _state.points.players.length - 1) {
        throw new Error('Incorrect player number');
    }

    return playerIndex;
}

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