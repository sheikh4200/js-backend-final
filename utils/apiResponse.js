
class apiResponse {
    constructor(statusCode,data,message="success"){
        this.data = data,
        this.message = message,
        this.statusCode = statusCode,
        this.success = success < 400
    }
}

export {apiResponse}