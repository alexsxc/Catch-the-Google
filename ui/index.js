import { subscribe, unSubscribe } from "../core/state-manager.js";
import { AppComponent } from "./components/app.component.js";

const rootElement = document.getElementById('root');

function renderApp() {
    // console.log('rendering app');
    rootElement.innerHTML = '';

    const appComponent = AppComponent()

    rootElement.append(appComponent.element); // rendering components in DOM tree
}

renderApp();

subscribe(renderApp);
// unSubscribe(renderApp);
