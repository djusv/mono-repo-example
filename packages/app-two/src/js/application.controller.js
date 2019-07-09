export class ApplicationController {

  /*@ngInject*/
  constructor(
    $log
  ) {
    this.$log = $log;
  }

  $onInit() {
    this.$log.info('$onInit');
  }

  $onDestroy() {
    this.$log.info('$onDestroy');
  }

}
