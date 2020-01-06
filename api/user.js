
module.exports = {
    postLogin: function(req, res, next) {
        const {username,password} = req.body
        req.session.isLoggedIn = true;
     
        return req.session.save(err => {
            res.redirect("/")
          });
    },

    postSignup: function(req, res, next) {
        res.redirect("/login")
    },

    //Logout
     postLogout: function(req, res, next) {
        // huy session khi user dang xuat
        req.session.destroy(err => {
            console.log(err);
            res.redirect("/");
        });
  },
}