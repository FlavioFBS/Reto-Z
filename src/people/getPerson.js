const { v4 } = require("uuid");
const AWS = require("aws-sdk");
const response = require("../../utils/response");

const getPerson = async (event) => {
  try {
    const dynamoDb = new AWS.DynamoDB.DocumentClient();

    const { id } = event.pathParameters;

    // add register
    const result = await dynamoDb
      .get({
        TableName: "PeopleTable",
        Key: { id },
      })
      .promise();

    return response(result.Item, "", 200);
  } catch (error) {
    console.log({ error_addPeople: error });
    return response(
      null,
      "No se pudo obtener datos de la persona/personaje",
      500,
      error
    );
  }
};

module.exports = {
  getPerson,
};
