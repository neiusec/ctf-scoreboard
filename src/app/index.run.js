(function() {
  'use strict';

  angular
    .module('ctfScoreboard')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
