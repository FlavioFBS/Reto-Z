const { v4 } = require("uuid");
const AWS = require("aws-sdk");
const response = require("../../utils/response");

const addPerson = async (event) => {
  try {
    const dynamoDb = new AWS.DynamoDB.DocumentClient();
    const { nombre, genero, planetaOrigen } = JSON.parse(event.body);
    const createdAt = new Date();
    const id = v4();

    const newPerson = {
      id,
      nombre,
      genero,
      planetaOrigen,
      fechaRegistro: createdAt.toString(),
    };

    // add register
    await dynamoDb
      .put({
        TableName: "PeopleTable",
        Item: newPerson,
      })
      .promise();

    return response(
      newPerson,
      "Persona/personaje registrado correctamente.",
      200
    );
  } catch (error) {
    console.log({ error_addPeople: error });
    return response(
      null,
      "No se pudo registrar a la persona/personaje",
      500,
      error
    );
  }
};

module.exports = {
  addPerson,
};
