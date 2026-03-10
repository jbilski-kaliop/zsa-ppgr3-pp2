import { isEven, isOdd, isPrime } from "./lib/math";

class App {
  public run() {
    this.bindEventHandlerToElementByElId("actionIsEven", function (value) {
      console.log(`Value ${value} even: ${isEven(value)}`);
    });
    this.bindEventHandlerToElementByElId("actionIsOdd", function (value) {
      console.log(`Value ${value} odd: ${isOdd(value)}`);
    });
    this.bindEventHandlerToElementByElId("actionIsPrime", function (value) {
      console.log(`Value ${value} prime: ${isPrime(value)}`);
    });
  }

  protected bindEventHandlerToElementByElId(
    elId: string,
    handler: (value: number) => void,
  ) {
    const actionEl = document.getElementById(elId);
    if (actionEl) {
      actionEl.addEventListener("click", () => {
        const valueEl = document.getElementById("val1") as HTMLInputElement;
        if (valueEl) {
          const value = parseInt(valueEl.value.trim());
          if (!isNaN(value)) {
            handler(value);
          }
        }
      });
    }
  }
}

export default App;
