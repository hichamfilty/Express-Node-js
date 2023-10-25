const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.Port || 5000;

const logger = require('./middleware/Logger');

//init middleware
app.use(logger);
//body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//set staic folder
app.use(express.static(path.join(__dirname, 'public')));
//set up the router to members
app.use('/api/members', require('./routes/api/members'));
app.listen(PORT, () => console.log(`server started on port ${PORT}`));
