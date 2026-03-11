import { actions } from "./config";

class App {
  public run() {
    actions.forEach((action) => {
      this.bindValuesHandlerToElementById(
        action.elId,
        action.handler,
        action.valuesCount,
      );
    });
  }

  protected bindValueHandlerToElementByElId(
    elId: string,
    handler: (value: number) => void,
  ) {
    this.bindValuesHandlerToElementById(
      elId,
      (values) => {
        handler(values.pop() ?? 0);
      },
      1,
    );
  }

  protected bindValuesHandlerToElementById(
    elId: string,
    handler: (values: number[]) => void,
    valuesCount: number,
  ) {
    const element = document.getElementById(elId);
    element?.addEventListener("click", () => {
      const values: number[] = [];

      for (let i = 1; i <= valuesCount; i++) {
        const valueEl = document.getElementById(`val${i}`) as HTMLInputElement;
        const value = parseInt(valueEl?.value.trim());

        if (isNaN(value)) {
          return;
        }

        values.push(value);
      }

      handler(values);
    });
  }
}

export default App;
