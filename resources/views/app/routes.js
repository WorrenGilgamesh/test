(function(){
    'use strict';
    var app = angular.module('app');
    
    app.config(function($routeProvider) {
        $routeProvider
        .when("/", {
            template : "<h1>hello</h1>"
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