import { Component } from "@angular/core";

@Component({
  selector: "page-1",
  template: `
  <StackLayout class="p-20">
    <Label horizontalAligment="center" verticalAligment="center" text="This is 1 page"></Label>
  </StackLayout>`,
})
export class Page1Component {

  constructor(){
  }
}