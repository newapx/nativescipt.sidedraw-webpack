import {PageMainComponent} from "./pages/pagemain.component";
import {Page1Component} from "./pages/page1.component";
import {Page2Component} from "./pages/page2.component";

export const routes = [
    {path: "", component: PageMainComponent},
    {path: "page1", component: Page1Component},
    {path: "page2", component: Page2Component},
]

export const navigatableComponentDeclaration = [
    PageMainComponent, 
    Page1Component,
    Page2Component,
]

export const navigatableComponentEntry = [
    
]