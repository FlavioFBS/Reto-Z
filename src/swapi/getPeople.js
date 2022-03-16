"use strict";
const axios = require("axios");
const { camposPersonaES, mapearCampoES } = require("../../utils/mappingAttrES");
const response = require("../../utils/response");

module.exports.getPeople = async (event) => {
  try {
    let people = await axios.get("https://swapi.py4e.com/api/people/");

    if (people.data.results.length === 0) {
      return response(people, "No hay datos registrados.", 404);
    }
    people = people.data.results.map((person) => {
      return {
        ...mapearCampoES(camposPersonaES, person),
      };
    });
    return response(people, "Lista de personajes obtenida correctamente.", 200);
  } catch (error) {
    console.log({ error_getPeople: error });
    return response(
      null,
      "Hubo un problema al listrar los personajes.",
      500,
      error
    );
  }
};
