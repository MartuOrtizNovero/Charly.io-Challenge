const data = require("../data.js");

const getCompanies = (req, res) => {
  try {
    if (res.length === 0) {
      return res.status(404).json({ error: "No se encontro ningun valor" });
    } else {
      const infoCompanies = data.map((el) => el);
      res.send(infoCompanies);
    }
  } catch (error) {
    console.log(error)
  }
};

module.exports = getCompanies;
