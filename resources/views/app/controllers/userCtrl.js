(function(){
    'use strict';

    var app = angular.module('app');

    app.controller('userCtrl',function($scope){
        $scope.user = {name:'lol',mail:'lol@lol.com'};
    });
})();