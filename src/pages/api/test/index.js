import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "POST") {
    return await addRunningData(req, res);
  } else if (req.method === "GET") {
    return await readRunningData(req, res);
  } else {
    return res
      .status(405)
      .json({ message: "Method not allowed", success: false });
  }
}

async function addRunningData(req, res) {
  const body = req.body;
  try {
    const newEntry = await prisma.runningData.create({
      data: {
        date: body.date,
        distance: body.distance,
      },
    });
    return res.status(200).json(newEntry), { success: true };
  } catch (error) {
    console.log("Request error", error);
    res
      .status(500)
      .json({ error: "Error creating Running Data", success: false });
  }
}
