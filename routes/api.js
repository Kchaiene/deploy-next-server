const router = require("express").Router();

router.get("/success", (req, res) =>{
  res.status(200).json({message:"Great!!!"})
});

router.post("/success", (req, res) =>{
  res.status(200).json({message:"Awesome!!!"})
});

module.exports = router;