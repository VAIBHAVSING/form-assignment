"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const formController_1 = require("../controllers/formController");
const router = (0, express_1.Router)();
// Route to handle form submissions
router.post('/', formController_1.submitForm);
// Route to get all forms
router.get('/', formController_1.getForms);
exports.default = router;
