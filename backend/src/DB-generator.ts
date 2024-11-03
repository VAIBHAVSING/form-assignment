import { pool } from "./config";
import fs from "fs";
async function main() {
    const sqlquery = fs.readFileSync('./db/schema.sql').toString();
    try {
        await pool.query(sqlquery);
        console.clear();
        console.log("Sql relation pushed");
    } catch (e) {
        console.log("Sql relation already pushed");
    }
}
main()