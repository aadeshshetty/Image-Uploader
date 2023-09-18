const { uploadToCloudinary } = require("../service/upload.service");
const { ErrorHandler } = require("../utils/errorHandler");
const { bufferToDataURI } = require("../utils/file");

const uploadImage = async (req, res, next) => {
  try {
    const { files } = req;
    if (!files) throw new ErrorHandler(400, "Image is required");
    const imageDetailsList = [];
    for (let i = 0; i < files.length; i++) {
      const fileFormat = files[i].mimetype.split("/")[1];
      const { base64 } = bufferToDataURI(fileFormat, files[i].buffer);

      const imageDetails = await uploadToCloudinary(base64, fileFormat);
      imageDetailsList.push(imageDetails);
    }
    res.json({
      status: "success",
      message: "Upload successful",
      data: imageDetailsList,
    });
  } catch (error) {
    next(new ErrorHandler(error.statusCode || 500, error.message));
  }
};

module.exports = {
  uploadImage,
};
