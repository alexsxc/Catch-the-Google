const _state = {
    points: {
        google: 10,
        players: [11, 2]
    }
}

export function getGooglePoints() {
    return _state.points.google;
}

export function getPlayerPoints(playerNumber) {
    const playerIndex = playerNumber - 1;

    if (playerIndex  <  0 ||  playerIndex > _state.points.players.length - 1) {
        throw new Error('Incorrect player number');
    }
    
    return _state.points.players[playerNumber];
}
