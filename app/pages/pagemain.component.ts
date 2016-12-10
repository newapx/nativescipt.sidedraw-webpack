import { Component } from "@angular/core";

@Component({
  selector: "page-main",
  template: `
  <StackLayout class="p-20">
    <Label text="This is MAIN page"></Label>
    <Label text="Tap the button" class="h1 text-center"></Label>
    <Button text="TAP" (tap)="onTap()" class="btn btn-primary btn-active"></Button>
    <Label [text]="message" class="h2 text-center" textWrap="true"></Label>
</StackLayout>
  `,
})
export class PageMainComponent {
    public counter: number = 16;

    public get message(): string {
        if (this.counter > 0) {
            return this.counter + " taps left";
        } else {
            return "Hoorraaay! \nYou are ready to start building!";
        }
    }
  
    public onTap() {
        this.counter--;
    }
}