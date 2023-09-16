const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use("/api/v1", require("./src/routes"));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
