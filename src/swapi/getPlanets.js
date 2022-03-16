"use strict";
const axios = require("axios");
const { mapearCampoES, camposPlanetaES } = require("../../utils/mappingAttrES");
const response = require("../../utils/response");

module.exports.getPlanets = async (event) => {
  try {
    let planets = await axios.get("https://swapi.py4e.com/api/planets/");

    if (planets.data.results.length === 0) {
      return response(planets, "No hay datos registrados.", 404);
    }
    planets = planets.data.results.map((planet) => {
      return {
        ...mapearCampoES(camposPlanetaES, planet),
      };
    });
    return response(planets, "Lista de planetas obtenida correctamente.", 200);
  } catch (error) {
    console.log({ error_getPlanet: error });
    return response(
      null,
      "Hubo un problema al listrar los planetas.",
      500,
      error
    );
  }
};
