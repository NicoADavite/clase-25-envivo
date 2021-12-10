const adminMiddleware = (req, res, next) => {
    
    let user = req.query.user;

    if(!(user == "Ada" || user == "Greta" || user == "Vim" || user == "Tim")) {
        res.send("No tienes los privilegios para ingresar");
    };

    next();
}

module.exports = adminMiddleware;