module.exports.setFlash=(req,res,next)=>{
    res.locals.flash = {
        'success' : req.flash('succuss'),
        'error' : req.flash('error')
    }
    next();
}