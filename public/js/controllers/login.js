var app = angular.module("adminApp")

app.controller("loginController", function ($scope, Auth) {
  $scope.menaje = "";

  $scope.datos = {
    email: "",
    password: ""
  }

  $scope.login = function () {
    if (_.isEmpty($scope.datos)) return $scope.mensaje = "Ha dejado un campo vacío"

    Auth.login($scope.datos)

    if (!_.isEmpty($scope.datos.result)) {
      console.log("dentro");
    }
  }
})
