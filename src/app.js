const express = require('express')
const app = express()
const PORT = 8001
const { tasks } = require('./data_source/task.json')

app.get('/task', (req, res) => {
    message = `${tasks.length} Task Founds`

    res.status(200).json({
        "status": true,
        "message": message,
        tasks
    })
})
app.post('/task', (req, res) => {
    const params = req.body
    id = tasks.length + 1;
    params = { ...params, id: id }
    if (!TaskValidator.validateTask(params).status) {
        res.status(400).json(TaskValidator.validateTask(params))
    } else {
        res.status(201).json(TaskValidator.validateTask(params))
    }
})
app.put('/task/:id', (req, res) => {
    const { title, description, completion } = req.body
    id = req.params.id;
    if (title || description || completion) {
        const data=tasks.find(e => e.id == id)
        if(!data){
        res.status(404).json({
            status:false,
            message:"Please provide valid id"
        })
        }else{
            tasks.map((e) =>{
                if(e.id == id){
                    if(req.body.hasOwnProperty(title)){
                        e.title=title
                    }
                    if(req.body.hasOwnProperty(description)){
                        e.description=description
                    }
                    if(req.body.hasOwnProperty(completion)){
                        e.completion=completion;
                    }
                }
            })
        }

    }

})
app.delete('/task/:id', (req, res) => {
    const id = req.params.id;
    const data = tasks.find(e => e.id == id)
    if (!data) {
        res.status(404).json({ status: false, message: `Task with id :${id} not found` })
    } else {
        const index = tasks.findIndex(data)
        tasks.splice(index, data)
        res.status(200).json({ status: true, message: `Task with id :${id} Deleted` })
    }
})




app.listen(PORT, (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log(`app is running on  http://localhost/${PORT}`)
    }
})
