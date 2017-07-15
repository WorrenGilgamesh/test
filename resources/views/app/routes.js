(function(){
    'use strict';
    var app = angular.module('app');
    
    app.config(function($routeProvider) {
        $routeProvider
        .when("/", {
            templateUrl : "app/components/userComponent.html",
            controller: "userCtrl"
        })
        .when("/red", {
            templateUrl : "red.htm"
        })
        .when("/green", {
            templateUrl : "green.htm"
        })
        .otherwise( {
            redirectTo:'/'
        });
    });
})();