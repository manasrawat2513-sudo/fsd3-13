import express from 'express';

const app = express();

// request goes here
app.get('/', (req, res) => {
    res.end('<H1>Hello Express</H1>');
});

app.listen(3333, () => console.log('prg1 is running on port 3333'));