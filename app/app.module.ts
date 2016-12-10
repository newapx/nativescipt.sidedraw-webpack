import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/platform";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AppComponent } from "./app.component";
import { routes, navigatableComponentDeclaration, navigatableComponentEntry} from "./app.routing";

import { SIDEDRAWER_DIRECTIVES} from "nativescript-telerik-ui/sidedrawer/angular";

@NgModule({
    declarations: [AppComponent, navigatableComponentDeclaration,
            SIDEDRAWER_DIRECTIVES
    ],
    bootstrap: [AppComponent],
    imports: [NativeScriptModule, 
            NativeScriptRouterModule, NativeScriptRouterModule.forRoot(routes)
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
