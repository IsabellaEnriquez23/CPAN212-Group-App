const express = require('express');
const app = express();
const students = require('./routes/events');
const courses = require('./routes/profile');
const cors = require('cors');

app.use(cors());

app.use(express.json())

app.use(students)
app.use(courses)

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

