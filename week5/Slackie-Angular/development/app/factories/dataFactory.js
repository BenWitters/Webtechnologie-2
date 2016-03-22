angular.module('helloAngular.factories')
    .factory('dataFactory', [

        '$http',

        function dataFactory($http) {

            //
            // FACTORY PROPERTIES --------------------------------------
            //
            var factory = {};
            var url = "http://slackie-api.district01.be/messages/";

            factory.getMessagesByRoom = function getMessagesByRoom(room) {
                return $http.get(url + "room/" + room, {});
            };

            factory.postMessage = function postMessage(message) {
                return $http.post(url, message);
            };

            return factory;
        }
    ]);