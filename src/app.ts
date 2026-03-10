import { isEven } from "./lib/math";

class App {
  public run() {
    const actionIsEvenEl = document.getElementById("actionIsEven");
    if (actionIsEvenEl) {
      actionIsEvenEl.addEventListener("click", () => {
        const valueEl = document.getElementById("val1") as HTMLInputElement;
        if (valueEl) {
          const value = parseInt(valueEl.value.trim());
          if (!isNaN(value)) {
            console.log(`Value ${value} even: ${isEven(value)}`);
          }
        }
      });
    }

    //   const actionIsOddEl = document.getElementById("actionIsOdd");
    //   const actionIsPrimeEl = document.getElementById("actionIsPrime");
  }
}

export default App;
