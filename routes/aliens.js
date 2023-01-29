const express = require("express");
const router = express.Router();
const Alien = require("../models/alien");

/**
 * This is GET request API
 */
router.get("/", async (req, res) => {
  try {
    const aliens = await Alien.find();
    res.json(aliens);
  } catch (error) {
    res.send("Error" + error);
  }
});
/**
 * This is GET request API with ID
 */
router.get("/:id", async (req, res) => {
  try {
    const alien = await Alien.findById(req.params.id);
    res.json(alien);
  } catch (error) {
    res.send("Error" + error);
  }
});

/**
 * This is POST request API
 */
router.post("/", async (req, res) => {
  const alien = new Alien({
    name: req.body.name,
    tech: req.body.tech,
    sub: req.body.sub,
  });
  try {
    const a1 = await alien.save();
    res.json(a1);
  } catch (error) {
    res.send("Error" + error);
  }
});

/**
 * This is UPDATE request API
 */

router.patch("/:id", async (req, res) => {
  try {
    const alien = await Alien.findById(req.params.id);
    alien.sub = req.body.sub
    const a1 = await alien.save()
    res.json(a1);
  } catch (error) {
    res.json("Error" + error);
  }
});

/**
 * This is DELETE request API
 */

router.patch("/:id", async (req, res) => {
    try {
      const alien = await Alien.findById(req.params.id);
      alien.sub = req.body.sub
      const a1 = await alien.delete()
      res.json(a1);
    } catch (error) {
      res.json("Error" + error);
    }
  });
  

module.exports = router;
