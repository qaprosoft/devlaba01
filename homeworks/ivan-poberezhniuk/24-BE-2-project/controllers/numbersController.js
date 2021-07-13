exports.sum = async (req, res) => {
  try {
    const { firstnumber, secondnumber } = req.headers;
    console.log(req.headers);
    const sum = parseInt(firstnumber, 10) + parseInt(secondnumber, 10);
    res.setHeader('sum', sum);
    res.end();
  } catch (err) {
    console.log(err);
  }
};
