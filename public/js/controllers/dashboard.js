var app = angular.module("adminApp")

app.controller("dashboardController", function ($rootScope, $cookies, $location, Auth) {
  if (!_.isEqual($cookies.get("islogged"), "true")) {
    $location.path("/")
  }

  $rootScope.logout = function () {
    Auth.logout()
  }

  $rootScope.datos_admin = $cookies.getObject("login")
})

app.controller("moviesController", function ($scope, $rootScope, $route, $routeParams, $cookies, $location, peliculas, peliculas_admin, generos, actor, director) {
  $rootScope.mensaje = ""
  if (!_.isEqual($cookies.get("islogged"), "true")) {
    $location.path("/")
  }

  generos.get({}, {}, function (data) {
    $scope.generosPeliculas = data;
  })

  director.get({}, {}, function (data) {
    $scope.directores = data;
  })

  actor.get({}, {}, function (data) {
    $scope.actores = data;
  })

  if ($routeParams.id_movie) {
    $scope.algo = $routeParams.id_movie
    peliculas.get({}, { "id_pelicula":$routeParams.id_movie }, function (data) {
      $scope.pelicula = data[0]
    })

    $scope.actualizar = function () {
      peliculas_admin.update({ "id_pelicula":$routeParams.id_movie }, { datos: $scope.pelicula }, function (data) {
        $rootScope.mensaje = "Se ha actualizado correctamente la información."
      })
    }

  } else {
    $scope.peliculas = peliculas.get()

    $scope.eliminar = function (id) {
      peliculas_admin.delete({"id_pelicula":id}, {}, function () {
        $route.reload()
      })
    }
  }

  $scope.nueva_pelicula = function () {
    peliculas_admin.nueva({}, { datos: $scope.nueva }, function (data) {
      console.log(data);
      $rootScope.mensaje = "Se ha guardado correctamente la pelicula en la base de datos.";
    })
  }
})

app.controller("clientsController", function ($scope, $rootScope, $cookies, $location, Clientes) {
  $rootScope.mensaje = ""
  if (!_.isEqual($cookies.get("islogged"), "true")) {
    $location.path("/")
  }

  Clientes.get({}, {}, function (data) {
    $scope.clientes = data;
  })
})
