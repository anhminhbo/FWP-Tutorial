const thanhName = (req, res, next) => {
  req.name = "mr Thanh";
  next();
};

const personality = (req, res, next) => {
  req.personality = "most handsome and gentle";
  next();
};

module.exports = { thanhName, personality };
