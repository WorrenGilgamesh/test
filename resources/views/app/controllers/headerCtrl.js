(function(){
    'use strict';

    var app = angular.module('app');
    app.component('headerComponent',{
        templateUrl: 'app/components/header.html',
        controller: headerCtrl,
        controllerAs: 'vm'
    });
    function headerCtrl($scope){
        
    };
    
})();