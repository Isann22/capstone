const checkRole = (roles) => {
  return (req, res, next) => {
    if (!req.userData || !roles.includes(req.userData.role)) {
      return res.status(403).json({
        status: "failed",
        message: "Acces Denied",
      });
    }
    next();
  };
};

module.exports = { checkRole };
