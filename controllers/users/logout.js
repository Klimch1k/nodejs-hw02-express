const { User } = require("../../models/user");

const logout = async (req, res, next) => {
  try {
    const { _id } = req.user;

    await User.findByIdAndUpdate(_id, { token: "" });

    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

module.exports = logout;
