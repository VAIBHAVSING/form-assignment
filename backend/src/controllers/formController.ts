import { Request, Response } from 'express';
import { pool } from '../config';

export const submitForm = async (req: Request, res: Response) => {
    const { formType, name, countryCode, phoneNumber } = req.body;

    if (!formType || !name || !countryCode || !phoneNumber) {
        res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const result = await pool.query(
            'INSERT INTO forms (form_type, name, country_code, phone_number) VALUES ($1, $2, $3, $4) RETURNING *',
            [formType, name, countryCode, phoneNumber]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Error inserting form:', error);
        res.status(500).json({ error: 'Failed to submit form' });
    }
};

export const getForms = async (req: Request, res: Response) => {
    try {
        // Fetch all forms from the forms table
        const result = await pool.query('SELECT * FROM forms');
        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Error retrieving forms:', error);
        res.status(500).json({ error: 'Failed to retrieve forms' });
    }
};
