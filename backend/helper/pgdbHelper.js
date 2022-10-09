const PgService = {};
const { Pool } = require('pg');
let pool = {};

PgService.excuteQuery = async function (query) {
    try {
        pool = new Pool({
            user: "monk",
            host: "emp-postgresql.local.springernature.io",
            database: "monkdb",
            password: "monk123",
            port: "5432",
        });
        await pool.connect()
        return await pool.query(query)
    } catch (error) {
        console.log(error)
    }
    finally {
        pool.end();
    }
};




module.exports = PgService;