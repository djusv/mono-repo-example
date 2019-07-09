import './styles/main.scss';
import './vendor';

import { ApplicationModule } from './js/application.module';

const ProcedureModule = angular
  .module('app-two', [
    ApplicationModule
  ])
  .name;

const bodyElement = document.getElementsByTagName('html')[0];

angular.bootstrap(bodyElement, [
  ProcedureModule
], {
  strictDi: true
});
