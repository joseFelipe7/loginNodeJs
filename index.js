const express = require('express');
const app = express();
const methodOverride = require('method-override');
const session = require('express-session');
const cockie = require('cookie-parse');

//template engine
app.set('view engine', 'ejs');
app.use('views', '/app/views');
//pasta de aquivos estaticos
app.use(express.static('public'));
//cofigurando method override
app.use(methodOverride('_method'));
//configura o recebindo do post no req.body
app.use(express.urlencoded({extended:true}));
//configutando session e cookie
app.use(session({secret:'secret do sistema',
    resave:true,
    saveUnintialized:true
}));
app.use(cockie());



app.listen(8888,()=>{console.log('servidor inicializado')});