const mssql = require('mssql');

module.exports.asyncGetMSSQLData = async (req, res) => {
    let sqlConfig = {
        user: req.body.username,
        password: req.body.password,
        database: req.body.name,
        server: req.body.host,
        options: {
            trustServerCertificate: true// change to true for local dev / self-signed certs
        }
    };

    if(req.body.port != 1433){
        sqlConfig["port"]= +req.body.port
    }

    try {
        let pool = await mssql.connect(sqlConfig);
        let result = await pool.request().query(req.body.query);
        let cutResults = result.recordsets[0].slice(0,20);
        await pool.close();
        sqlConfig = {};
        return res.status(200).send(cutResults);
    } catch (err) {
        console.log(err);
        return res.status(400).send(err);
    }
}