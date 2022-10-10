const router = require("express").Router();

const ChelseaFC = [{
    Name:"Thiago Silva"
}];

router.get ("/GetChelseaFC", (req,res) => res.send(ChelseaFC));

router.get("/getChelseaFc/:id", (req,res,next) =>{
    const {id} = req.params;
    if (!ChelseaFC[id]) return next("Ohhh Thiagoo silvvaaaaa");
    res.send(ChelseaFC[id])
});

const deleteMiddleware = (req,res,next) => {
    console.log(" We will never be defeated! as we are the great Chelsea Fc");
    next();
}

router.post ("/createChelseaFc", (req,res,next) => {
    if (!req.body.Name) return next ({status: 400, message: "missing name"})
    ChelseaFC.push(req.body);
    res.status (201).send(ChelseaFC);
});

router.patch("/updateChelseaFc/:id", (req,res) => {
    console.log("ID:", req.params.id);
    console.log("Query:", req.query);
    res.send();
})

router.delete("/removeChelseaFC/:id", deleteMiddleware, (req,res,next) =>{
    const{id} = req.params;
    console.log("ID:", id);
    if (id > ChelseaFC.length) return next ({status: 404, message: `no name found with id ${id}`});
    res.send(ChelseaFC.splice(id));
});

module.exports = router;