const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
global.Vocab = require('./api/models/VocabModel');
global.Test = require('./api/models/TestModel');
const routes = require('./api/routes/VocabRoutes');
const testRoutes = require('./api/routes/TestRoutes')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://quoctri9217_db_user:23Oct25%40M0ng0Db@fgwweb2.3y3zbly.mongodb.net?appName=FGWWeb2', {
    useNewUrlParser: true,
});

const port = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);
testRoutes(app);
app.listen(port);
app.use((req, res) => {
    res.status(404).send({ url: `${req.originalUrl} not found` });
});
console.log(`Server is running on http://localhost:${port}`);