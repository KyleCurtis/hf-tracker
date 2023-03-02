/*
this code defines a HTTP request handler function that interacts with a Prisma 
database client to retrieve or add user records to the database, depending on the 
HTTP method of the incoming request. The getUser function retrieves all user records 
from the database and returns them as a JSON response with HTTP status code 200, 
while the addUser function creates a new user record in the database based on the 
properties in the request body and returns the newly created record's ID as a JSON 
response with HTTP status code 200. If any errors occur during the database interaction, 
the request handler function returns an error response with HTTP status code 500 and the 
error message in JSON format.
*/

// Import the Prisma database client from the "/config/db" module
import { prisma } from "/config/db";

// Define the main HTTP request handler function that handles GET and POST requests
export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      // If the incoming request is a GET request, call the getUser function
      return await getUser(req, res);

    case "POST":
      // If the incoming request is a POST request, call the addUser function
      return await addUser(req, res);
  }
}

// Define a sub-function that retrieves all user records from the database
const getUser = async (req, res) => {
  try {
    // Use the Prisma client to retrieve all user records
    const result = await prisma.userRequired.findMany();

    // Return a response with HTTP status code 200 and the retrieved records in JSON format
    return res.status(200).json(result);
  } catch (error) {
    // If an error occurs, return a response with HTTP status code 500 and the error message in JSON format
    return res.status(500).json(error);
  }
};

// Define a sub-function that creates a new user record in the database
const addUser = async (req, res) => {
  const body = req.body;
  try {
    // Extract the email, firstName, lastName, username, and password properties from the request body
    const { email, firstName, lastName, username, password } = req.body;

    // Define a data object with properties matching the database schema
    // Use the Prisma client to create a new user record in the database with the data object
    const result = await prisma.userRequired.create({
      data: {
        email: body.email,
        firstName: body.firstName,
        lastName: body.lastName,
        username: body.username,
        password: body.password,
      },
    });

    // Return a response with HTTP status code 200 and the newly created record's ID in JSON format
    return res.status(200).json(result);
  } catch (error) {
    // If an error occurs, return a response with HTTP status code 500 and the error message in JSON format
    return res.status(500).json(error);
  }
};
