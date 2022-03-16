const { v4 } = require("uuid");
const AWS = require("aws-sdk");
const response = require("../../utils/response");

const getPeople = async (event) => {
  try {
    const dynamoDb = new AWS.DynamoDB.DocumentClient();

    const result = await dynamoDb
      .scan({
        TableName: "PeopleTable",
      })
      .promise();

    return response(
      result.Items,
      "Personas/personajes listados correctamente.",
      200
    );
  } catch (error) {
    console.log({ error_addPeople: error });
    return response(null, "No se pudo al listar persona/personaje", 500, error);
  }
};

module.exports = {
  getPeople,
};
