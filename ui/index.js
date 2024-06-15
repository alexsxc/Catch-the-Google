import { AppComponent } from "./components/app.component.js";

const rootElement = document.getElementById('root');

rootElement.innerHTML = '';

const AppElement = AppComponent()

rootElement.append(AppElement); // rendering components in DOM tree