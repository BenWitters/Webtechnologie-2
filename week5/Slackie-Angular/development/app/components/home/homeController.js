angular.module('helloAngular.controllers')
    .controller('homeController', [

        '$scope',
        '$timeout',
        '$mdSidenav',

        // dataService = zelfgemaakt dus geen $
        'dataService',
        // ophalen van dataFactory
        'dataFactory',


        function($scope, $timeout, $mdSidenav, dataService, dataFactory) {

            //
            // SCOPE & MODEL PROPERTIES --------------------------------
            //
            $scope.data = {
                messages: [],
                rooms: ["NodeJS", "Angular", "Work", "Sport", "Zever"]
            };
            //
            $scope.dataService = dataService;


            //
            // EXPOSED METHODS -----------------------------------------
            //
            // button click
            $scope.toggleLeftNav = function toggleLeftNav(){
                $mdSidenav('left').toggle();
            };
            // room meegeven aan de functie
            $scope.toggleRoom = function toggleRoom(room){
                dataService.room = room;
                // messages opvragen bij room switch
                getMessages();
                $scope.toggleLeftNav();
            };

            $scope.sendMessage = function sendMessage(){
                // factory terug aanspreken
                // js object die naar de api gesstuurd wordt, naam, kamer en content
                if($scope.data.message){
                var message = {
                    name: dataService.name,
                    room: dataService.room,
                    content: $scope.data.message
                };
                dataFactory.postMessage(message).success(function(data){
                    $scope.data.messages.push(data);
                    scrollToBottom();
                });
                $scope.data.message = "";
                }
            };

            //
            // PRIVATE METHODS -----------------------------------------
            //
            var getMessages = function getMessages(){
                // room meegeven, aan getMessagebyroom if succes return data.message = data
                dataFactory.getMessagesByRoom(dataService.room).success(function(data){
                    $scope.data.messages = data;
                })
            };

            var scrollToBottom = function scrollToBottom() {
                $timeout(function() {
                    var element = document.getElementById("content");
                    element.scrollTop = element.scrollHeight;
                }, 500);
            };

            var initialize = function initialize() {
            };

            initialize();
        }
    ]);