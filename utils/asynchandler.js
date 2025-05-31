
const asynchandler = (requestHandler) => {
    (req,res,next) =>{
        Promise.resolve( 
            requestHandler(req,res,next)
        ).then(() =>
        next())
        .catch((err) =>
         next(err)


         ) 
    }}


export {asynchandler};

// const asynchandler = () =>{}
    // const asynchandler = (fun) => ()=>{}
        // const asynchandler = (func) => {()=>{}}


// const asynchandler = (func) => async (req,res,next)=>{
//     try{
//         await func(req,res,next)
//         }
//         catch(error){
//             res.status(500).json({
//                 message: error.message,
//                 success:false,
//             })
//             next()
        
//         }
// }

