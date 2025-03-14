import path from "path";
import { promises as fs } from "fs";

export async function getData() {
  try {
    // Resolve the path to the fakeData.json file
    const filePath = path.join(process.cwd(), "data", "fakeData.json");

    // Read the file contents
    const data = await fs.readFile(filePath, "utf8");

    // Parse the JSON data and return it
    return JSON.parse(data);
  } catch (error) {
    throw new Error("Menu data fetching error!");
  }
}
