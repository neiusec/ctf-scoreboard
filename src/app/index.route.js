(function () {
    'use strict';

    angular
        .module('ctfScoreboard')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {

        var home = {
                name: 'home',
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainController',
                controllerAs: 'main'
            },
            rules = {
                name: 'rules',
                url: '/rules',
                templateUrl: '/app/rules/rules.html',
                controller: 'RulesController',
                controllerAs: 'rules'
            },
            ctf = {
                name: 'ctf',
                url: '/ctf',
                templateUrl: '/app/ctf/ctf.html',
                controller: 'CTFController',
                controllerAs: 'ctf'
            },
            scoreboard = {
                name: 'scoreboard',
                url: '/scoreboard',
                templateUrl: '/app/scoreboard/scoreboard.html',
                controller: 'ScoreboardController',
                controllerAs: 'scoreboard'
            },
            login = {
                name: 'login',
                url: '/login',
                templateUrl: '/app/auth/login.html',
                controller: 'AuthController',
                controllerAs: 'auth'
            },
            logout = {
                name: 'logout',
                url: '/logout',
                templateUrl: '/app/auth/logout.html',
                controller: 'AuthController',
                controllerAs: 'auth'
            };

        $stateProvider
            .state(home)
            .state(rules)
            .state(ctf)
            .state(scoreboard)
            .state(login)
            .state(logout);

        $urlRouterProvider.otherwise('/');
    }

})();
