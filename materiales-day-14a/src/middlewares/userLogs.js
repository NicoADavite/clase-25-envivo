const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../logs/userLogs.txt")

const userLogsMiddleware = (req, res, next) => {
    
    newLog = "El usuario ingresó a la ruta: " + req.url + " , \n"; 
    fs.appendFileSync(filePath, newLog);

    next();
}

module.exports = userLogsMiddleware;

