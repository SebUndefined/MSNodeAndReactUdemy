const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')

const app = express()

app.use(bodyParser.json())

app.post('/events', async (req, res) => {
    const { type, data } = req.body

    if(type === 'CommentCreated') {
        const status = data.content.includes('orange') ? 'rejected' : 'approved'

        await axios.post('http://event-bus-srv:4005/events', {
            type: 'CommentModerated',
            data: {
                id: data.id,
                status: status,
                postId: data.postId,
                content: data.content
            }
        })
    }
    res.send({})
})

app.listen(4003, ()=> console.log("App listening on port 4003"))
