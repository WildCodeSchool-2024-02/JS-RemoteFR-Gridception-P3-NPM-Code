const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const { read } = require("../controllers/usersActions");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 19 * 2 ** 10 /* 19 Mio en kio (19 * 1024 kio) */,
  timeCost: 2,
  parallelism: 1,
};

const hashPassword = async (req, res, next) => {
  try {
    const { password } = req.body;

    const hashedPassword = await argon2.hash(password, hashingOptions);

    req.body.hashedPassword = hashedPassword;

    delete req.body.password;

    next();
  } catch (err) {
    next(err);
  }
};

// eslint-disable-next-line consistent-return
const verifyToken = (req, res, next) => {
  try {
    const authorizationHeader = req.get("Authorization");
    if (!authorizationHeader) {
      return res
        .status(401)
        .json({ message: "Authorization header is missing" });
    }

    const [type, token] = authorizationHeader.split(" ");
    if (type !== "Bearer") {
      return res
        .status(401)
        .json({ message: "Authorization header has not the 'Bearer' type" });
    }

    const decoded = jwt.verify(token, process.env.APP_SECRET);
    if (!decoded.sub) {
      return res.status(401).json({ message: "Invalid token payload" });
    }

    req.auth = { id: decoded.sub };
    next();
  } catch (err) {
    console.error("Erreur lors de la vérification du token:", err.message);
    return res.status(401).json({ message: "Invalid token" });
  }
  // Ajoutez ce return pour satisfaire ESLint
};

const isAdmin = async (req, res, next) => {
  try {
    const authorizationHeader = req.get("Authorization");

    const [type, token] = authorizationHeader.split(" ");

    if (type !== "Bearer") {
      res
        .status(401)
        .json({ message: "Authorization header has not the 'Bearer' type" });
    }

    if (authorizationHeader) {
      const decoded = jwt.verify(token, process.env.APP_SECRET);

      if (decoded.sub) {
        const userRole = await read(decoded.sub).roles_id;

        console.info(userRole);

        if (userRole !== 2) {
          throw new Error();
        }

        next();
      }
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  hashPassword,
  verifyToken,
  isAdmin,
};
