const express = require('express');
const router = express();

const productsRoutes = require("./products.routes");
const categoriesRoutes = require("./categories.routes");
const subCategoriesRoutes = require("./subCategories.routes");
const variantsRoutes = require("./variants.routes");
const cartRoutes = require("./cartes.routes");
const offeresRoutes = require("./offeres.routes");
const UserDetailesRoutes = require("./user.routes");
const orderesRoutes = require("./orderes.routes");
const paymentesRoutes = require("./paymentes.routes");
const reviewesRoutes = require("./reviewes.routes");

router.use("/products", productsRoutes);
router.use("/categories", categoriesRoutes);
router.use("/subCategories", subCategoriesRoutes);
router.use("/variants", variantsRoutes);
router.use("/carts", cartRoutes);
router.use("/offeres", offeresRoutes);
router.use("/userdetailes", UserDetailesRoutes);
router.use("/orderes", orderesRoutes);
router.use("/paymentes", paymentesRoutes); 
router.use("/reviewes", reviewesRoutes);

module.exports = router;