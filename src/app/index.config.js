(function() {
  'use strict';

  angular
    .module('ctfScoreboard')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

  }

})();
