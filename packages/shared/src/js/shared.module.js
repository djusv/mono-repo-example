import { HelloWorldComponent } from "./helloWorld/helloWorld.component";

export const SharedModule = angular.module('shared.common', [])
    .component('helloWorld', HelloWorldComponent)
    .name;
