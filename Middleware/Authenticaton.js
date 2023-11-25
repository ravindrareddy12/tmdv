
const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized - Missing token' });
  }

  try {
    const decoded = jwt.verify(token, 'your-secret-key'); 
    req.user = decoded.user;
    next();
  } catch (err) {
    console.error(err);
    res.status(401).json({ message: 'Unauthorized - Invalid token' });
  }
};

module.exports = authenticate;
