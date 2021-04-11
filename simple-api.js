const express = require('express');

const PORT = 8000;

const app = express();

app.get('/api', (req, res) => {
    res.json({
        message: "Hey Adam",
        firstName: 'Adam',
        lastName: 'Stebbins'
    });
})

app.listen(PORT, () => {
    console.log(`Simple API listening at http://localhost:${PORT}`);
});