(function () {
    'use strict';

    angular
        .module('ctfScoreboard')
        .controller('CTFController', CTFController);

    /** @ngInject */
    function CTFController(CATEGORIES) {
        var ctf = this;

        ctf.categories = CATEGORIES;
        ctf.selectedCategory = '';

        ctf.flags = [{
            id: 1,
            name: 'Rot13',
            category: CATEGORIES[0],
            description: '',
            answer: 'flagone',
            points: 100,
            guessLimit: 10,
            stats: {
                solved: false,
                first: undefined,
                second: undefined,
                third: undefined
            }
        }, {
            id: 2,
            name: 'Base64',
            category: CATEGORIES[0],
            description: '',
            answer: 'flagtwo',
            points: 100,
            guessLimit: 10,
            stats: {
                solved: false,
                first: undefined,
                second: undefined,
                third: undefined
            }
        }];

        ctf.selectCategory = function (category) {
            return ctf.selectedCategory = category;
        }

        ctf.selectCategory(CATEGORIES[0])
    }
})
();
