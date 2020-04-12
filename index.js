const express = require('express');
const app = express();
const methodOverride = require('method-override');
const session = require('express-session');
const cookie = require('cookie-parser')
//rotas import
const userRouter = require('./app/routes/userRouter');

//pasta de aquivos estaticos
app.use(express.static('public'));
//template engine
app.set('view engine', 'ejs');
app.set('views', __dirname+'/app/views');

//cofigurando method override
app.use(methodOverride('_method'));
//configura o recebindo do post no req.body
app.use(express.urlencoded({extended:true}));
//configutando session e cookie
app.use(session({secret:'secret do sistema',
    resave:true,
    saveUninitialized:true
}));
app.use(cookie());


//rotas
app.use('/usuario', userRouter);

app.listen(8888,()=>{console.log('servidor inicializado')});