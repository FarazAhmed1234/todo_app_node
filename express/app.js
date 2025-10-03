import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files (CSS, JS, images) from public folder
app.use(express.static("public"));

app.get("/", (req, res) => {
  const homePagePath = path.join(__dirname, "public", "index.html");
  res.sendFile(homePagePath);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
