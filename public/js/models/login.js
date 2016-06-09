angular.module("adminApp", ["ngResource", "ngRoute", "ngCookies"])
  .config(function ($routeProvider) {
    $routeProvider
      .when("/", {
        controller: "loginController",
        templateUrl: "partials/login"
      })
      .otherwise("/")
  })
