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
}

*/

import {prisma} from "/config/db"

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getUser(req, res);

    case "POST":
      return await addUser(req, res);
  }
}

const getUser = async (req, res) => {
  try {
    const result = await prisma.userRequired.findMany();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const addUser = async (req, res) => {
  try {

    const {email, firstName, lastName, username, password} = req.body;

    const data = {
      email: email,
      firstName: firstName,
      lastName: lastName,
      username: username,
      password: password,
    };

    const result = await prisma.userRequired.create({
      data: data,
      select: {
        id: true
      }
    });

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(error);
  }
};

