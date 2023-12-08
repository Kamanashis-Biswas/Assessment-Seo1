const express = require("express");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors({ origin: "*" }));

app.use("/public", express.static("public"));
app.get("/", (req, res) => {
  const data = readFile();
  res.send(data);
});

app.post("/upload", upload.array("files"), (req, res) => {
  const { id } = req.body;
  if (id) {
    const data = JSON.parse(readFile());
    const files = data[id] || [];
    req.files.forEach((f) => {
      files.push(f.filename);
    });
    data[id] = files;
    writeFile(JSON.stringify(data));
  }
  res.json({ files: req.files });
});

app.get("/files/:id", (req, res) => {
  const { id } = req.params;
  const data = JSON.parse(readFile());
  if (data[id]) return res.json({ files: data[id] });
  return res.json({ files: [] });
});

function readFile() {
  const fileData = fs.readFileSync("data.json", {
    encoding: "utf-8",
    mode: "r",
  });
  return fileData;
}

function writeFile(data) {
  fs.writeFileSync("data.json", data);
}
/// create route for get file count for each ticket
/// crete route storing the file name for each ticket

app.listen(PORT, () => console.log("server started at port 5000"));
