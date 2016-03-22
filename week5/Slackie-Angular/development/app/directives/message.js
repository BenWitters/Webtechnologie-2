angular.module('helloAngular.directives')
    .directive('message', ['dataService', function(dataService) {
        return {
            // directive kan op verschillende zaken declareren bv element = E, attribuut, class,...
            restrict: 'E',
            scope: {
                message: "=data"
            },
            templateUrl: 'app/directives/message.html',
            link: function($scope, $el, attr) {
                $scope.dataService = dataService;
            }
        };
    }]);