const express = require("express");
const axios = require("axios");
const path = require("path");

const app = express();
const port = 5678;

app.use(express.json());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// API - RICK & MORTY
app.get("/api/rickandmorty/character/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    res.json(response.data);
  } catch (error) {
    console.error(
      "Erreur pour recupérer les datas depuis l'API de rick & porty:",
      error
    );
    res.status(500).json("Erreur de chargement des datas");
  }
});
// API - POKEMON
app.get("/api/pokemon/:name", async (req, res) => {
  const { name } = req.params;
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
    res.json(response.data);
  } catch (error) {
    console.error(
      "Erreur pour recupérer les datas depuis l'API pokemon: ",
      error
    );
    res.status(500).json("Erreur de chargement des datas");
  }
});
// STAR WARS - API
app.get("/api/starwars/character/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(`https://swapi.dev/api/people/${id}`);
    res.json(response.data);
  } catch (error) {
    console.error(
      "Erreur pour recupérer les datas depuis l'API starWars: ",
      error
    );
    res.status(500).json("Erreur de chargement des datas");
  }
});
app.get("/starwars/character/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(`https://swapi.dev/api/people/${id}`);
    res.render("character", { character: response.data });
  } catch (error) {
    console.error(
      "Erreur pour recupérer les datas depuis l'API starWars: ",
      error
    );
    res.status(500).json("Erreur de chargement des datas");
  }
});

app.listen(port, () => console.log(`Server is running on :${port}`));
