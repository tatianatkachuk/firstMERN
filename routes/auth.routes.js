const {Router} = require('express') 
const User = require('../models/User')
const router = Router()
const User = require('../models/User')
const {check, validationResult} = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

router.post('/registration',
    [
        check('email','Format is not valid').isEmail(),
        check('password','Format is not valid').isLength({min:6})

    ], 
    async (req, res) =>{
    try{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array(),
                message: 'Format is not valid'
            })
        }
        const {email, password} = req.body
        const isUsed = await User.findOne({email})

        if(isUsed){ //cuando el email existe
            return res.status(300).json({
                message: 'This email already exists.'
            })
        }
        const hashedPassword = await bcrypt.hash(password, 12)
        const user = new User({
            email, password: hashedPassword
        })
        await user.save()

        res.status(201).json({
            message: 'The user was created successfully.'
        })

    }catch(error){
        console.log(error)
    }
})


router.post('/login',
    [
        check('email','Format is not valid').isEmail(),
        check('password','Format is not valid').exists()

    ], 
    async (req, res) =>{
    try{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array(),
                message: 'Format is not valid'
            })
        }

        const {email, password} = req.body
        
        const user = await User.findOne({email})

        if(!user){
            return res.status(400).json({
                message: 'The email does not exist'
            })
        }

        const isMatch = bcrypt.compare(password, user.password)

        if(!isMatch){
            return res.status(400).json({
                message: 'The password is wrong'
            })
        }

        const jwtSecret = 'kbfhsbfjhs734bjhsjhsbhvbsjhb434jhsbvhjsvhjsfvhbshvb46343shbhsjbvhsbvhb'
        const token = jwt.sign(
            {userId: user.id}, //object to encode to token
            jwtSecret, //secret key
            {expiresIn:'1h'}//time to expire of the token 
        )

        res.json({
            token, 
            userId: user.id
        })

    }catch(error){
        console.log(error)
    }
})

module.exports = router
