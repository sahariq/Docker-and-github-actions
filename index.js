const express = require('express');
const PORT  = 5000;
const app=express();

app.get('/api', (req, res) =>
{
    res.json({message: 'wow'})

});

app.get('/api/hello', (req, res) => {
    res.json({"greeting:": "hello docker"})
});

app.listen(PORT, ()=>
{
    console.log(`listening on port ${PORT}`);

});