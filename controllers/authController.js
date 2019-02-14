
//  GET - Login Page
module.exports.getLoginPage = (req, res) => {

    data = {
        pageTitle: 'Login'
    }
    res.render('login', data);
}


//  GET - Signup Page
module.exports.getSignupPage = (req, res) => {

    data = {
        pageTitle: 'Sign Up'
    }
    res.render('signup', data);
}


// Post Login form

module.exports.postLoginDetails = (req,res)=>{


    req.isLoggedIn  = true;

    res.redirect('/');
}