const express = require('express');
const { productsController } = require('../../../controller');
const router = express.Router();

router.get(
    '/list-products',
    productsController.listproducts
);
router.get(
    '/get-products/:id',
    productsController.getproducts
);

router.post(
    '/add-products',
    productsController.addproducts
);

router.put(
    '/update-products/:id',
    productsController.updateproducts
);

router.delete(
    '/delete-products/:id',
    productsController.deleteproducts
);

router.get(
    '/novariants-products',
    productsController.NoVariant
);

router.get(
    '/ListReviwe-products',
    productsController.ListReviwe
);

router.get(
    '/search-products',
    productsController.NameSearch
);

router.get(
    '/listCategory-products/:id',
    productsController.CategoryProduct
);

router.get(
    '/listSubCategory-products/:id',
    productsController.SubCategoryProduct
);

// router.get(
//     '/listproductvarient-products/:id',
//     productsController.productvarient
// );

router.get(
    '/listRatting-products',
    productsController.rattingProducts
);

router.get(
    '/outofStock-products',
    productsController.outofStock
);

router.get(
    '/countCat-products',
    productsController.CountCategory
);

router.get(
    '/CountReview-products',
    productsController.CountReview
);

router.get(
    '/review-rating-products',
    productsController.ReviewGte
);


module.exports = router;