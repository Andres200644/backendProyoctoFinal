const Cart = require('../models/cartModel');

exports.getCartById = async (req, res) => {
    try {
        const cart = await Cart.findById(req.params.cid).populate('products');
        res.render('cart', { cart });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.addProductToCart = async (req, res) => {
    try {
        const cart = await Cart.findById(req.params.cid);
        cart.products.push(req.params.pid);
        await cart.save();
        res.redirect(`/carts/${req.params.cid}`);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.removeProductFromCart = async (req, res) => {
    try {
        const cart = await Cart.findById(req.params.cid);
        cart.products.pull(req.params.pid);
        await cart.save();
        res.redirect(`/carts/${req.params.cid}`);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
