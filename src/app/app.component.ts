import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  optionCheckedValues: Array<object>;
  displayCheckItems: object[];
  newUpdate: object[];

  constructor() {
    this.optionCheckedValues = [
      { checked: false, value: "one" },
      { checked: false, value: "two" },
      { checked: false, value: "three" },
      { checked: false, value: "four" },
      { checked: false, value: "five" },
      { checked: false, value: "six" },
      { checked: false, value: "seven" },
      { checked: false, value: "eight" },
      { checked: false, value: "nine" },
      { checked: false, value: "ten" },
      { checked: false, value: "eleven" },
      { checked: false, value: "tweleve" },
      { checked: false, value: "thirteen" },
      { checked: false, value: "fourteen" }
    ];

    // copy the array  values from the the option checked.
    this.displayCheckItems = [...this.optionCheckedValues];
  }

  searchForCheckItem(index: number, input: HTMLInputElement) {
    this.displayCheckItems[index].checked = !this.displayCheckItems[index]
      .checked;
  }

  onSelectAll() {
    this.displayCheckItems.forEach(elem => (elem.checked = !elem.checked));
  }

  searchItem(input: HTMLInputElement) {
    const userInput = input.target.value;
    this.newUpdate = this.optionCheckedValues.filter(elem =>
      elem.value.toLowerCase().includes(userInput.toLowerCase())
    );
    this.displayCheckItems = this.newUpdate;
  }
}
