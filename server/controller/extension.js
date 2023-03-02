import express from "express";
import * as extensionController from "../data/extension.js";
const router = express.Router();

router.get("/getExtensionList", extensionController.getExtensionList);
router.put("/updateExtension", extensionController.updateExtension);
router.post("/addExtension", extensionController.addExtension);
router.delete("/deleteExtension", extensionController.deleteExtension);

export default router;
