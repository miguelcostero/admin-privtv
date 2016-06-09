var app = angular.module("adminApp")

app.controller("loginController", function ($scope) {
  $scope.datos = {
    email: "",
    password: ""
  }

  $scope.login = function () {
    if (_.isEmpty($scope.datos)) {
      console.log("Hola")
    } else {
      console.log("Vacio");
    }
  }
})
