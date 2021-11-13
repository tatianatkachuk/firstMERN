const {Router} = require('express') 
const User = require('../models/User')
const router = Router()
const User = require('../models/User')

router.post('/registration', async (req, res) =>{
    try{
        const {email, password} = req.body
        const isUsed = await User.findOne({emai})

        if(isUsed){ //cuando el email existe
            return res.status(300).json({
                message: 'This email already exists.'
            })
        }else{
            const user = new User({
                email, password
            })
            await user.save()

            res.status(201).json({
                message: 'The user was created successfully.'
            })
        }
    }catch(error){
        console.log(error)
    }
})

module.exports = router
