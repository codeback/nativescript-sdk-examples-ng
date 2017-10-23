import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { RoutingExamplesComponent } from "./routing-examples.component";
import { NestedRoutersComponent } from "./nested-routers/nested-routers.component";
import { NestedRoutersComponent as NestedRoutersComponent2 } from "./nested-routers-2/nested-routers.component";

import { SubRouteOneComponent } from "./nested-routers/sub-route-one.component";
import { SubRouteTwoComponent } from "./nested-routers/sub-route-two.component";

import { SubRouteOneComponent as SubRouteOneComponent2 } from "./nested-routers-2/sub-route-one.component";
import { SubRouteTwoComponent as SubRouteTwoComponent2 } from "./nested-routers-2/sub-route-two.component";

import { TitleAndNavButtonModule } from "../directives/title-and-nav-button.module";

export const routerConfig = [
    {
        path: "",
        component: RoutingExamplesComponent
    },
    {
        path: "nested-routers",
        component: NestedRoutersComponent,
        children: [
            { path: "first", component: SubRouteOneComponent },
            { path: "second", component: SubRouteTwoComponent }
        ]
    },
    {
        path: "nested-routers-2",
        component: NestedRoutersComponent2,
        children: [
            { path: "first", component: SubRouteOneComponent2 },
            { path: "second", component: SubRouteTwoComponent2 }
        ]
    }
];

@NgModule({
    schemas: [NO_ERRORS_SCHEMA],
    imports: [
        TitleAndNavButtonModule,
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule.forChild(routerConfig)
    ],
    declarations: [
        RoutingExamplesComponent,
        NestedRoutersComponent,
        SubRouteOneComponent,
        SubRouteTwoComponent,
        NestedRoutersComponent2,
        SubRouteOneComponent2,
        SubRouteTwoComponent2
    ]
})

export class RoutingExamplesModule { }
