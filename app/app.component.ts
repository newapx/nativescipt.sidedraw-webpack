import { Component, AfterViewInit, ViewChild, ChangeDetectorRef } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

import { RadSideDrawerComponent, SideDrawerType } from "nativescript-telerik-ui/sidedrawer/angular";

@Component({
    selector: "my-app",
    styles: [`
        .bgc-white {
            background-color: #fff;
        }
        ActionBar {
            background-color:  #3C5AFD;
            color: white;
        }
    `],
    templateUrl: "app.component.html",
})
export class AppComponent {
    @ViewChild(RadSideDrawerComponent)
    public drawerComponent: RadSideDrawerComponent;
    private drawer: SideDrawerType;

    constructor(private routerExtensions: RouterExtensions, private changeDetectionRef: ChangeDetectorRef) {
    }

    ngAfterViewInit(){
        this.drawer = this.drawerComponent.sideDrawer;
        this.changeDetectionRef.detectChanges();
    } 
   
    openDrawer() {
        this.drawer.toggleDrawerState();
    }

    go(route: Array<string> = ['']){
        //this.drawer.closeDrawer();
        this.routerExtensions.navigate(route);
    }

    goto(path){
        this.drawer.closeDrawer();
        this.go([`/` + path])
    }
}