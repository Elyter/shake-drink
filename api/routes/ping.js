module.exports = function(req, res){
    res.header('Content-type', 'application/json');
    res.header('Access-Control-Allow-Origin', "*");
    
    res.json({
        "status": "online"
    });
}