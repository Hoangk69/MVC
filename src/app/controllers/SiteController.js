const Course = require('../modles/Course');
class SiteController{
    // [GET] /
    index(req, res){
        // get data from db
        Course.find({},(err, courses)=>{
            if(!err){
                res.json(courses);
            }else{
                res.status(400).json({Error : 'error'})
            }
        })
        res.render('home');
    }
    
    // [GET] /search
    search(req, res){
        res.render('search');
    }
}
module.exports = new SiteController;