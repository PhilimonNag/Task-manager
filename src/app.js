const express = require('express')
const app = express()
const PORT = 8001







app.listen(PORT, (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log(`app is running on  http://localhost/${PORT}`)
    }
})
