class TaskValidator {
    static validateTask(req, params) {
        message = ""
        if (!req.hasOwnProperty(params.title)) {
            message = "title paramter is required"
            return {
                status: false,
                message
            }
        }
        else if (!req.params.hasOwnProperty(params.description)) {
            message = "description parameter is required"
            return {
                status: false,
                message
            }
        }else {
            if(!req.hasOwnProperty(params.completion))
                return {status:true,data:{...params,completion:false}}
            else return {status:true,data:params}
        }
        
    }
}