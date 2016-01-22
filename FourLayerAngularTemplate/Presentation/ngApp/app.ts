namespace $safeprojectname$ {
    angular.module("$safeprojectname$", ['ngRoute', 'ui.bootstrap'])
        .config(function ($routeProvider: ng.route.IRouteProvider) {
            $routeProvider
                .when('/', {
                    template: 'Hello World!'
                });
        });
}