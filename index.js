const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", (req, res) => {
  console.log("hjhhjhj");
  res.status(200).send("hjhhhhghghg");
});
app.listen(process.env.PORT, () => {
  console.log("running on port", process.env.PORT);
});
