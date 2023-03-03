import { prisma } from "config/db";

/* HANDLER 
================================================================================================ */
export default async function handler(req: any, res: any) {
  switch (req.method) {
    case "GET":
      return await getUser(req, res);

    case "POST":
      return await addUser(req, res);

    default:
      return res
        .status(405)
        .json({ message: "Method not allowed", success: false });
  }
}

/* ADD USER (POST) 
================================================================================================ */
async function addUser(req: any, res: any) {
  const body = req.body;

  // Check for null values in the request body
  if (!body.firstName || !body.lastName || !body.email || !body.username || !body.password) {
    return res.status(400).json({ error: "Missing input values", success: false });
  }


  try {
    const newEntry = await prisma.userRequired.create({
      data: {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        username: body.username,
        password: body.password,
      },
    });
    return res.status(200).json(newEntry, { success: true });
  } catch (error) {
    console.error("Request error", error);
    res.status(500).json({ error: "Error creating user", success: false });
  }
}

/* GET USER (GET) 
================================================================================================ */
async function getUser(req: any, res: any) {
  const body = req.body;

  try {
    const users = await prisma.userRequired.findMany();
    return res.status(200).json(users, { success: true });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: "Error reading from DB", success: false });
  }
}
