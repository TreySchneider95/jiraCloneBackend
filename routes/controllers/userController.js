const User = require("../models/Users")
const {
      generatePasswordHash,
      validatePassword,
      generateUserToken,
      verifyToken,
} = require("../../auth");

const all = async (req, res) => {
    try {
        const users = await User.find({})
        res.json({
            sucess:true,
            users: users
        });
    } catch (error) {
        
    }
}

const getOne = async (req, res) => {
    try {
        const user = await User.findOne({_id: req.params.id})
        res.json({
            sucess: true,
            user: user
        })
    } catch (error) {
        
    }
}

const register = async (req, res) => {
      try {
        const email = req.body.email;
        const password = req.body.password;
    
        const saltRounds = 5;

        const passwordHash = await generatePasswordHash(password, saltRounds);
    
        const newUser = new User({
          email: email,
          password: passwordHash,
        });
    
        const saveData = await newUser.save();
    
        res.json({ 
            success: true,
            newUser: newUser
        });
      } catch (error) {
        console.error(error);
        res.json({ success: false, message: error.toString() });
      }
};


const login = async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const user = await User.findOne({
            email
        });
        
        if (!user) {
            res.json({ success: false, message: "Could not find user." }).status(204);
            return;
        }

        const isPWValid = await validatePassword(password, user.password);
        
        if (!isPWValid) {
            res
            .json({ success: false, message: "Password was incorrect." })
            .status(204);
            return;
        }
        
        const userType = email.includes("@admin.com") ? "admin" : "user";
        
        const data = {
            date: new Date(),
            userId: user._id, 
            scope: userType,
            email: email
        };
        
        const token = generateUserToken(data);
        
        res.json({ success: true, token, email, userType, userId: user._id });
        return;
        } catch (error) {
        console.error(error);
        res.json({ success: false, message: error.toString() });
        }
};



module.exports = {
    register,
    login,
    all,
    getOne
}