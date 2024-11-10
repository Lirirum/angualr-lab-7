import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter , Routes } from '@angular/router';

import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {SecretComponent} from "./secret/secret.component";

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

const appRoutes: Routes =[
  { path: "", component: HomeComponent},
  { path: "about", component: AboutComponent},
  { path: "secret", component: SecretComponent},
];


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(appRoutes), provideClientHydration()]
};
