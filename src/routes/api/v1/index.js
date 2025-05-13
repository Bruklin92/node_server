const express = require('express');
const router = express();

const productsRoutes = require("./products.routes");
const categoriesRoutes = require("./categories.routes");
const subCategoriesRoutes = require("./subCategories.routes");
const variantsRoutes = require("./variants.routes");
const cartRoutes = require("./cartes.routes");

router.use("/products", productsRoutes);
router.use("/categories", categoriesRoutes);
router.use("/subCategories", subCategoriesRoutes);
router.use("/variants", variantsRoutes);
router.use("carts", cartRoutes);

module.exports = router;