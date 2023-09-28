
class TaskValidator {
    static validateTask(req, params) {
        let message = ""
        console.log(params)
        if (!req.body.hasOwnProperty('title')) {
            message = "title paramter is required"
            return {
                status: false,
                message
            }
        }
        else if (!req.body.hasOwnProperty('description')) {
            message = "description parameter is required"
            return {
                status: false,
                message
            }
        }else {
            if(!req.body.hasOwnProperty('completion')){
                let data={...params,completion:false}
                
                return {status:true,data:data}
            }
            else {
               
                return {status:true,data:params}
            }
        }
        
    }
}
module.exports=TaskValidator