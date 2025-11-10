const app = require("./api");
app.listen(3001, () => console.log("App running on port 3001"));

module.exports = (req, res) => {
  return app(req, res);
};
