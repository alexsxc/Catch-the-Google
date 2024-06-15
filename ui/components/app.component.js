import { GridComponent } from "./grid/Grid.component.js";
import { ResultPanelComponent } from "./result/Result.component.js";
import { SettingsComponent } from "./settings/Settings.component.js";

export function AppComponent() {
    const element = document.createElement('div');

    const settingsElement = SettingsComponent();
    const resultPanelElement = ResultPanelComponent();
    const gridElement = GridComponent();


    element.append(settingsElement, resultPanelElement, gridElement);

    return element;
}