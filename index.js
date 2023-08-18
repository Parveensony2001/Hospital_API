const express = require('express');
const bodyParser=require('body-parser');
const expressLayout=require('express-ejs-layouts');
const flash = require('connect-flash');
const passport=require('passport');
const app = express();
const db = require('./config/mongoose');
 const flashMiddleWare = require('./config/middleware');
// const db = require('./config/moongoose');
 app.use(expressLayout);
 const passportLocal = require('./config/passport_local');
// const passport_gogle = require('./config/passport-googlt-oauth2-startegy')
app.use(bodyParser.urlencoded({extended:false}));
app.use(passport.initialize());
app.use(flash());
app.use(flashMiddleWare.setFlash);
app.use('/' , require('./routes/index'));
app.listen(8000,(err)=>{
if(err)   console.log(`something error is hppeningin port : 8000`)
          console.log(`Server is runnig smoothly in this port : 8000`);
});