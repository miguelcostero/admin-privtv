var app = angular.module("adminApp")

app.controller("loginController", function ($scope, $cookies, $location, Auth) {
  if (_.isEqual($cookies.get("islogged"), "true")) {
    $location.path("/dashboard")
  }

  $scope.login = function () {
    if (_.isEmpty($scope.datos)) return $scope.mensaje = "Ha dejado un campo vacío"

    Auth.login($scope.datos)
  }
})
