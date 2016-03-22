    //Define a module that groups all filters
    angular.module('helloAngular.filters', []);

    //Define a module that groups all directives
    angular.module('helloAngular.directives', []);

    //Define a module that groups all factories, the factories connect with the restfull service
    angular.module('helloAngular.factories', []);

    //Define a module that groups all services, services act both as a kind of controller for the model and as temporary storage for the data from and to the factories
    angular.module('helloAngular.services', ['helloAngular.factories']);

    //Define a module that groups all controllers, it has services as a dependecy
    angular.module('helloAngular.controllers', ['helloAngular.services']);

    //Define your app module. This is where it all starts.
    angular.module('helloAngular', [
        'ngMaterial',
        'helloAngular.filters',
        'helloAngular.directives',
        'helloAngular.controllers',
        'helloAngular.services'
    ])

    .run(
        ['$rootScope',
            function($rootScope) {
            }
        ]
    );
