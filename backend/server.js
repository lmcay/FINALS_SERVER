const app = require("./app");

const PORT = process.env.PORT || 3002;

app.set("view engine", "ejs");

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
