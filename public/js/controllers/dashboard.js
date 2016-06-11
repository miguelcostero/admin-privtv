var app = angular.module("adminApp")

app.controller("dashboardController", function ($scope, $cookies, $location, Auth) {
  if (!_.isEqual($cookies.get("islogged"), "true")) {
    $location.path("/")
  }

  $scope.logout = function () {
    Auth.logout()
  }

  $scope.datos_admin = $cookies.getObject("login")
})
