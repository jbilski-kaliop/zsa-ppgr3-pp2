import { actions } from "./config";

class App {
  public run() {
    actions.forEach((action) => {
      this.bindValueHandlerToElementByElId(action.elId, action.handler);
    });
  }

  protected bindValueHandlerToElementByElId(
    elId: string,
    handler: (value: number) => void,
  ) {
    const element = document.getElementById(elId);
    element?.addEventListener("click", () => {
      const valueEl = document.getElementById("val1") as HTMLInputElement;
      const value = parseInt(valueEl?.value.trim());

      if (isNaN(value)) {
        return;
      }

      handler(value);
    });
  }
}

export default App;

// TODO: implement find prime in range and min / max from two values actions (you need to provide bind value handler for two values)
