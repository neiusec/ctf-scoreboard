(function () {
    'use strict';

    angular
        .module('ctfScoreboard')
        .controller('RulesController', RulesController);

    /** @ngInject */
    function RulesController() {
        var vm = this;

        vm.rules = {
            'name': 'Rules',
            'content': {
                'scope': 'The scope of this CTF Challenge is limited to the internal network provided. Do not attack the host machine in anyway. You will be disqualified if you do.'
            }
        };
    }
})();
