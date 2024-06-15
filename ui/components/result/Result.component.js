import { getGooglePoints, getPlayerPoints } from "../../../core/state-manager.js";

export function ResultPanelComponent() {
    const element = document.createElement('div');

    element.classList.add('result-panel'); // styling

    async function render() { // rendering async function

    const googlePoints = await getGooglePoints();
    const player1Points = await getPlayerPoints(1);
    const player2Points = await getPlayerPoints(2);


    element.append(`player1: ${player1Points}, player2: ${player2Points}, google: ${googlePoints}`);

    };

    render();

    return element;
}