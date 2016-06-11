var app = angular.module("adminApp")

app.factory("Auth", function ($http, $cookies, $location) {
  return {
    login: function (log_data) {
      let data = JSON.stringify({
        datos: log_data
      })

      return $http.post("http://api-privtv.rhcloud.com/admin/login", data)
      .success(function (data, status, headers, config) {
        $cookies.put("islogged", "true")
        $cookies.putObject("login", data[0])

        $location.path("/dashboard")
      }).error(function (err, status, headers, config) {
        console.log(err)
      })
    },
    logout: function () {
      $cookies.remove("islogged")
      $cookies.remove("login")

      $location.path("/")
    }
  }
})
