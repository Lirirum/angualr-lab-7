import { Routes } from '@angular/router';

import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {SecretComponent} from "./secret/secret.component";
import {CarouselComponent} from "./carousel/carousel.component";
import {AppParentComponent } from "./parent-component/parent-component.component";
import {CountdownComponent } from "./countdown/countdown.component";
import {InfoComponent } from "./info/info.component";
import {TestComponent } from "./test/test.component";

export const routes: Routes = [
    { path: "", component: HomeComponent},
    { path: "about", component: AboutComponent},
    { path: "secret", component: SecretComponent},
    { path: "carousel", component: CarouselComponent},
    { path: "parent", component: AppParentComponent},
    { path: "countdown", component: CountdownComponent},
    { path: "info", component: InfoComponent},
    { path: "test", component: TestComponent},
];
