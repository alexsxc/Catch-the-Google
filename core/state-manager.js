const _state = {
    points: {
        google: 10,
        players: [11, 2]
    }
} // state is shared between all components

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
    const playerIndex = playerNumber - 1;

    if (playerIndex  <  0 ||  playerIndex > _state.points.players.length - 1) {
        throw new Error('Incorrect player number');
    }

    return _state.points.players[playerIndex];
}
