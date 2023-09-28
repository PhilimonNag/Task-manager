const express = require('express')
const app = express()
const PORT = 8001
const { tasks } = require('./data_source/task.json')
const TaskValidator=require('./helpers/task_validator')
app.use(express.json())
app.get('/tasks', (req, res) => {
    message = `${tasks.length} Task Founds`

    res.status(200).json({
        "status": true,
        "message": message,
        tasks
    })
})
app.post('/tasks', (req, res) => {
    let params = req.body
    let id = tasks.length + 1;
    params = { ...params, id: id }
    if (TaskValidator.validateTask(req,params).status==false) {
        res.status(400).json(TaskValidator.validateTask(req,params))
    } else {
        let data=TaskValidator.validateTask(req,params).data
        tasks.push(data)
        res.status(201).json(TaskValidator.validateTask(req,params))
    }
})
app.put('/tasks/:id', (req, res) => {
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
app.delete('/tasks/:id', (req, res) => {
    const id = req.params.id;
    const data = tasks.find(e => e.id == id)
    if (!data) {
        res.status(404).json({ status: false, message: `Task with id :${id} not found` })
    } else {
        const index = tasks.findIndex(e=>e.id==data.id)
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
