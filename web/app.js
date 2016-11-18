/**
 * Created by SOFTMAN on 16-11-2016.
 */
var app = angular.module('AngLoungely', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    //the timeline display
        .when('/', {
            templateUrl: 'home.html',
            controller: 'myCtrl'
        })
});
app.controller("myCtrl", function ($scope) {
    $scope.test = "test data";
});