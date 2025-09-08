// pages/api/image/[filename].js
import { promises as fs } from "fs";
import path from "path";

export default async function handler(req, res) {
  const { filename } = req.query;
  const imagePath = path.join(process.cwd(), "public", "images", filename);

  try {
    const imageBuffer = await fs.readFile(imagePath);
    const contentType = `image/${path.extname(filename).substring(1)}`; // e.g., image/png

    res.setHeader("Content-Type", contentType);
    res.status(200).send(imageBuffer);
  } catch (error) {
    console.error("Error serving image:", error);
    res.status(404).send("Image not found");
  }
}
