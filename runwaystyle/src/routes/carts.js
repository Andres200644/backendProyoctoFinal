const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

router.get('/:cid', cartController.getCartById);
router.post('/:cid/products/:pid', cartController.addProductToCart);
router.delete('/:cid/products/:pid', cartController.removeProductFromCart);

module.exports = router;
