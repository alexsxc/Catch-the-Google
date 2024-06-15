import { getGooglePoints, getPlayerPoints } from "../core/state-manager.js";

const rootElement = document.getElementById('root');

rootElement.innerHTML = '';

const googlePoints = getGooglePoints();
const player1Points = getPlayerPoints(0);
const player2Points = getPlayerPoints(1);

rootElement.append(`player1: ${player1Points}, player2: ${player2Points}, google: ${googlePoints}`)