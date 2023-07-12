const model = require("../models");

// 장바구니 삽입
exports.postCart = async (req, res) => {
  console.log("this is req.body", req.body);
  console.log(req.body.userId);

  try {
    const { userId, productId } = req.body;
    const cart = await model.Cart.create({
      user_id: userId,
      product_id: productId,
      quantity: 1,
    });
    res.send({ result: true, data: cart });
  } catch (error) {
    res.send({ result: false, data: error });
  }

  //   try {
  //     const { id } = req.body;
  //     const cart = await model.Cart.create({
  //       userId: req.user.id,
  //       productId: id,
  //     });
  //     res.send({ result: true, data: cart });
  //   } catch (error) {
  //     res.send({ result: false, data: error });
  //   }
};
