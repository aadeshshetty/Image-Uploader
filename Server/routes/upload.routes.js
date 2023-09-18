const { Router } = require("express");
const { uploadImage } = require("../controller/upload.controller");
const { upload } = require("../service/upload.service");

const router = Router();

router.post("/upload", upload.array("images"), uploadImage);

module.exports = router;
