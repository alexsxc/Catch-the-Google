import { subscribe } from "../core/state-manager.js";
import { AppComponent } from "./components/app.component.js";

const rootElement = document.getElementById('root');

function renderApp() {
    rootElement.innerHTML = '';

    const appComponent = AppComponent()

    rootElement.append(appComponent.element); // rendering components in DOM tree
}

renderApp();

subscribe(renderApp);
