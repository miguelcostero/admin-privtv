angular.module("adminApp", ["ngResource", "ngRoute", "ngCookies"])
  .config(function ($routeProvider) {
    $routeProvider
      .when("/", {
        controller: "loginController",
        templateUrl: "partials/login"
      })
      .when("/dashboard", {
        controller: "dashboardController",
        templateUrl: "partials/dashboard"
      })
      .when("/dashboard/movies", {
        controller: "moviesController",
        templateUrl: "partials/movies"
      })
      .when("/dashboard/movies/:id_movie", {
        controller: "moviesController",
        templateUrl: "partials/movies_detail"
      })
      .otherwise("/")
  })
