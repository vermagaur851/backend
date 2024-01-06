import {asyncHandler} from '../utils/asyncHandler'

const registerUser = asyncHandler(async (req,res)=> {
    res.status({
        message: 'ok'
    })
})

export {registerUser}