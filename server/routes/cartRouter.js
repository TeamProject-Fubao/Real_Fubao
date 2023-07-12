const express = require("express");
const router = express.Router();
const controller = require("../controller/cartCtrl");

// 경로: /cart
// 장바구니 추가
router.post("/add", controller.postCart);
// 장바구니 조회
// router.get("/", controller.getCart);

module.exports = router;
