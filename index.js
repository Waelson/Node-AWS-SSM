const AWS = require('aws-sdk')
const express = require('express')
const app = express()
const port = 3000

//Setting region and credentials
AWS.config.update({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
});

//Create SSM object
var ssm = new AWS.SSM();


app.get('/', async (req, res) => {
    const paramSsm = await ssm.getParameter({ Name: '/config/database/user' }).promise();
    res.send({
        name: paramSsm.Parameter.Name,
        value: paramSsm.Parameter.Value
    });
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})
