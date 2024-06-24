const express = require("express");
const router = express.Router();
const multer = require("multer");

const {
  Register,
  Login,

  Insertproduct,
  GetAllProducts,
  GetSingleProduct,
  updateProduct,
  DeleteProduct,
} = require("../controller/admin");

const storageAdmin = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "Uploads/admin/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});
const uploadAdmin = multer({ storage: storageAdmin });

//category
const storageCategory = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/category/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});
const uploadCategory = multer({ storage: storageCategory });
//product
const storageProduct = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/product/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});
const uploadProduct = multer({ storage: storageProduct });

//admin
router.post("/Register", uploadAdmin.single("profile"), Register);
router.post("/login", Login);

//category
router.post(
  "/insertCategory",
  uploadCategory.single("picture"),
  InsertCategory
);
router.get("/getAllCategories", getAllCategories);
router.get("/getSingleCategory/:id", GetSingleCategory);
router.put(
  "/updateCategory/:id",
  uploadCategory.single("picture"),
  UpdateCategory
);
router.delete("/deleteCategory/:id", DeleteCategory);

//product
router.post("/insertProduct", uploadProduct.single("picture"), Insertproduct);
router.get("/getAllProducts", GetAllProducts);
router.get("/getSingleProduct/:id", GetSingleProduct);
router.put(
  "/updateProduct/:id",
  uploadProduct.single("picture"),
  updateProduct
);
router.delete("/deleteProduct/:id", DeleteProduct);

//customers
router.get("/getAllCustomers", GetAllCustomers);

module.exports = router;
