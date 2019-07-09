import { ApplicationComponent } from './application.component';
import { SharedModule } from 'shared/src/js/shared.module';

export const ApplicationModule = angular
  .module('app-two.application', [
    SharedModule
  ])
  .config(/*@ngInject*/($compileProvider) => {
    if (PRODUCTION) {
      $compileProvider.debugInfoEnabled(false);
    }
  })
  .component('application', ApplicationComponent)
  .name;
