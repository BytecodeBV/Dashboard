const express = require('express');

const port = process.env.PORT || 3000;
const app = express();

app.get('/', () => {
    res.send('hello world');
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`); // eslint-disable-line
});
