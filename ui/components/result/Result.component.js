import { getGooglePoints, getPlayerPoints } from "../../../core/state-manager.js";

export function ResultPanelComponent() {
    const element = document.createElement('div');

    element.classList.add('result-panel'); // styling

    render(element);

    return {element};
}

async function render(element) { // rendering async function

    const googlePoints = await getGooglePoints();
    const player1Points = await getPlayerPoints(1);
    const player2Points = await getPlayerPoints(2);


    element.append(`player1: ${player1Points}, player2: ${player2Points}, google: ${googlePoints}`);

}; // maybe useEffect ;)