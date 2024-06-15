import { GridComponent } from "./grid/Grid.component.js";
import { ResultPanelComponent } from "./result/Result.component.js";
import { SettingsComponent } from "./settings/Settings.component.js";

export function AppComponent() {
    const element = document.createElement('div');

    render(element);

    return {element};
}

async function render(element) {

    const settingsComponent = SettingsComponent();
    const resultPanelComponent = ResultPanelComponent();
    const gridComponent = GridComponent();

    element.append(settingsComponent.element, resultPanelComponent.element, gridComponent.element);
}