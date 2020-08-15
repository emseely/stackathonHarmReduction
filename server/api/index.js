const router = require("express").Router();
module.exports = router;
const bodyParser = require("body-parser");
router.use(bodyParser.json());
router.use(express.urlencoded({ extended: false }));

router.get("/", require("./"));

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

module.exports = router;
