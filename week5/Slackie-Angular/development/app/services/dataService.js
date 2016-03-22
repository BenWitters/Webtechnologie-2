angular.module('helloAngular.services')
    .service('dataService', [

        function dataService() {

            var service = {
                name: "Ben",
                room: ""
            };

            service.getAvatar = function getAvatar(name) {
                return "http://www.gravatar.com/avatar/11111111111111" + name.length + name.charCodeAt() + "?s=32&d=identicon&r=PG";
            };

            return service;
        }
    ]);
