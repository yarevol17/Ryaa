const multer = require("multer");
const unidecode = require("unidecode");
const AWS = require("aws-sdk");
const multerS3 = require("multer-s3");

const ID = "AKIAI6CNCDFGBOVZFIZQ";
const SECRET = "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";
const BUCKET_NAME = "dev-tranhviet";
const s3Config = new AWS.S3({
  accessKeyId: ID,
  secretAccessKey: SECRET,
  Bucket: BUCKET_NAME,
});

const MIME_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
};

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

// Local only

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "backend/images");
//   },
//   filename: (req, file, cb) => {
//     const decodedName = unidecode(file.originalname);
//     var name = decodedName.toLowerCase().split(" ").join("-");
//     const extension = MIME_TYPE_MAP[file.mimetype];
//     cb(null, images / name + "-" + Date.now() + "." + extension);
//   },
// });

const multerS3Config = multerS3({
  s3: s3Config,
  bucket: BUCKET_NAME,
  metadata: function (req, file, cb) {
    cb(null, { fieldName: file.fieldname });
  },
  key: function (req, file, cb) {
    const decodedName = unidecode(file.originalname);
    var name = decodedName.toLowerCase().split(" ").join("-");
    const extension = MIME_TYPE_MAP[file.mimetype];
    var destination;
    if (req.body.title) {
      var title = unidecode(req.body.title).toLowerCase().split(" ").join("-");
      destination = `images/news/${title}/`;
    } else {
      destination = `images/users/`;
    }
    cb(null, destination + name + "-" + Date.now() + "." + extension);
  },
});

const upload = multer({
  storage: multerS3Config,
  fileFilter: fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 5, // we are allowing only 5 MB files
  },
});

module.exports = upload;
