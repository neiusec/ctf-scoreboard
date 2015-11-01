(function() {
  'use strict';

  angular
    .module('ctfScoreboard')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($state) {
    var vm = this;

    vm.stateRules = function () {
      $state.go('rules');
    };
  }
})();
