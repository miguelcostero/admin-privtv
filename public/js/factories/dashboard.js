var app = angular.module("adminApp")

app.factory("peliculas", function ($resource) {
  return $resource("http://api-privtv.rhcloud.com/peliculas/:id_pelicula", { id_pelicula: "@id_pelicula" }, {
    get: {
      method: "GET",
      isArray: true
    }
  })
})

app.factory("peliculas_admin", function ($resource) {
  return $resource("http://api-privtv.rhcloud.com/admin/peliculas/:id_pelicula", { id_pelicula: "@id_pelicula" }, {
    update: {
      method: "PUT"
    },
    post: {
      method: "POST"
    },
    delete: {
      method: "DELETE"
    }
  })
})

app.factory("generoPelicula", function ($resource) {
    return $resource("http://api-privtv.rhcloud.com/pelicula-generos/:id_pelicula", //la url donde queremos consumir
        { id_pelicula: "@id_pelicula" }, //aquí podemos pasar variables que queramos pasar a la consulta
        //a la función get le decimos el método, y, si es un array lo que devuelve
        //ponemos isArray en true
        { get: { method: "GET", isArray: true }
    })
})

app.factory("actoresPelicula", function ($resource) {
    return $resource("http://api-privtv.rhcloud.com/pelicula-actores/:id_pelicula", //la url donde queremos consumir
        { id_pelicula: "@id_pelicula" }, //aquí podemos pasar variables que queramos pasar a la consulta
        //a la función get le decimos el método, y, si es un array lo que devuelve
        //ponemos isArray en true
        { get: { method: "GET", isArray: true }
    })
})

app.factory("directoresPelicula", function ($resource) {
    return $resource("http://api-privtv.rhcloud.com/pelicula-directores/:id_pelicula", //la url donde queremos consumir
        { id_pelicula: "@id_pelicula" }, //aquí podemos pasar variables que queramos pasar a la consulta
        //a la función get le decimos el método, y, si es un array lo que devuelve
        //ponemos isArray en true
        { get: { method: "GET", isArray: true }
    })
})
