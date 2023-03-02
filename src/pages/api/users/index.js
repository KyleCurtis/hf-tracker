/*
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    return await addUser(req, res);
  } else if (req.method === "GET") {
    return await ReadUser(req, res);
  } else {
    return res
      .status(405)
      .json({ message: "Method not allowed", success: false });
  }
}

async function readUser(req, res) {
  const body = req.body;
  try {
    const users = await prisma.user.findMany();
    return res.status(200).json(users, {success: true});
  } catch (error) {
    console.log(error);
    return res.status(500).json({error: "Error reading from DB", success: false});
  }
}

async function addUser(req, res) {
  const body = req.body;
  try {
    const newEntry = await prisma.user.create({
      data: {
        email: body.email,
        name: body.name,
        password: body.password,
      },
    });
    return res.status(200).json(newEntry, { success: true });
  } catch (error) {
    console.error("Request error", error);
    res.status(500).json({ error: "Error creating user", success: false });
  }
} */

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
import {prisma} from "/config/db"

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
  try {
    // Extract the email, firstName, lastName, username, and password properties from the request body
    const {email, firstName, lastName, username, password} = req.body;

    // Define a data object with properties matching the database schema
    const data = {
      email: email,
      firstName: firstName,
      lastName: lastName,
      username: username,
      password: password,
    };

    // Use the Prisma client to create a new user record in the database with the data object
    const result = await prisma.userRequired.create({
      data: data,
      select: {
        id: true
      }
    });

    // Return a response with HTTP status code 200 and the newly created record's ID in JSON format
    return res.status(200).json(result);
  } catch (error) {
    // If an error occurs, return a response with HTTP status code 500 and the error message in JSON format
    return res.status(500).json(error);
  }
};