"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getForms = exports.submitForm = void 0;
const config_1 = require("../config");
const submitForm = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { formType, name, countryCode, phoneNumber } = req.body;
    if (!formType || !name || !countryCode || !phoneNumber) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    try {
        const result = yield config_1.pool.query('INSERT INTO forms (form_type, name, country_code, phone_number) VALUES ($1, $2, $3, $4) RETURNING *', [formType, name, countryCode, phoneNumber]);
        return res.status(201).json(result.rows[0]);
    }
    catch (error) {
        console.error('Error inserting form:', error);
        return res.status(500).json({ error: 'Failed to submit form' });
    }
});
exports.submitForm = submitForm;
const getForms = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Fetch all forms from the forms table
        const result = yield config_1.pool.query('SELECT * FROM forms');
        res.status(200).json(result.rows);
    }
    catch (error) {
        console.error('Error retrieving forms:', error);
        res.status(500).json({ error: 'Failed to retrieve forms' });
    }
});
exports.getForms = getForms;
