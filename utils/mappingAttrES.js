"use strict";

const camposPersonaES = {
  name: "nombre",
  height: "altura",
  mass: "peso",
  hair_color: "colorCabello",
  skin_color: "tes",
  eye_color: "colorOjos",
  birth_year: "anioNacimiento",
  gender: "genero",
  homeworld: "planetaOrigen",
  films: "peliculas",
  species: "especies",
  vehicles: "vehiculos",
  starships: "naves",
  created: "fechaRegistro",
  edited: "fechaEdicion",
  url: "url",
};

const camposPlanetaES = {
  climate: "clima",
  created: "fechaRegistro",
  edited: "fechaEdicion",
  diameter: "diametro",
  films: "peliculas",
  gravity: "gravedad",
  name: "nombre",
  orbital_period: "periodoOrbital",
  population: "poblacion",
  residents: "residentes",
  rotation_period: "periodoRotacion",
  surface_water: "superficieAgua",
  terrain: "terreno",
  url: "url",
};

function mapearCampoES(camposEntidad, instancia) {
  return Object.keys(instancia).reduce((objeto, atributo) => {
    const campoTraducido = camposEntidad[atributo];
    objeto[campoTraducido] = instancia[atributo];
    return objeto;
  }, {});
}

module.exports = {
  mapearCampoES,
  camposPersonaES,
  camposPlanetaES,
};
