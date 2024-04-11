const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5501; 

app.use(bodyParser.json());

app.use(express.static('public'));

app.post('/reset-password', (req, res) => {
    const { email } = req.body;

    
    res.status(200).send('Password reset initiated successfully.');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
