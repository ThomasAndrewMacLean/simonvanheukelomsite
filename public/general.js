var simApp = angular.module("simApp", ['ngRoute']);

simApp.config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                template: "<home></home>"
            })
            .when("/Photography", {
                template: "<photography></photography>"
            })
            .when("/Collage", {
                template: "<collage></collage>"
            })
            .when("/Contact", {
                template: "<contact></contact>"
            })
            .otherwise({
                redirectTo: "/"
            })

    })

    .controller("navController", NavController)


    .component("home", {
        templateUrl: 'home.html',
        controller: HomeController,
        controllerAs: 'vm'
    })

    .component("photography", {
        templateUrl: 'photography.html',
        controller: PhotographyController,
        controllerAs: 'vm'
    })
    .component("contact", {
        templateUrl: 'contact.html',
        controller: ContactController,
        controllerAs: 'vm'
    })
    .component("collage", {
        templateUrl: 'collage.html',
        controller: CollageController,
        controllerAs: 'vm'
    })