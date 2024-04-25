import express from "express";
import {
  createCustomer,
  deleteCustomer,
  getAllCustomers,
  getSingleCustomer,
  updateCustomer,
} from "../controllers/customerController.js";
import pictureParser from "../utils/multer.js";
const router = express.Router();

router.post("/create", pictureParser.single("profilePicture"), createCustomer);
router.get("/", getAllCustomers);
router.get("/:id", getSingleCustomer);
router.delete("/:id", deleteCustomer);
router.put("/:id", pictureParser.single("profilePicture"), updateCustomer);
export default router;
