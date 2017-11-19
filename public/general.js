var simApp = angular.module("simApp", ['ngRoute']);

simApp.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            template: "<home></home>"
        })
        .when("/Photography", {
            template: "<photography></photography>"
        })
        .otherwise({
            redirectTo: "/"
        })

});

simApp.controller("navController", NavController)

simApp.component("home", {
    templateUrl: 'home.html',
    controller: HomeController,
    controllerAs: 'vm'
});

simApp.component("photography", {
    templateUrl: 'photography.html',
    controller: PhotographyController,
    controllerAs: 'vm'
});