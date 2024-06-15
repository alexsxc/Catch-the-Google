import { getGooglePoints, getPlayerPoints } from "../../core/state-manager.js";

export function AppComponent() {
    const element = document.createElement('div');
    const googlePoints = getGooglePoints();
    const player1Points = getPlayerPoints(1);
    const player2Points = getPlayerPoints(2);


    element.append(`player1: ${player1Points}, player2: ${player2Points}, google: ${googlePoints}`);

    return element;
}