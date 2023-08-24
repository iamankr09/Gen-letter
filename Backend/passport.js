const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require('passport');
const User = require('./models/userSchema');
let email = '';

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            callbackURL: "/auth/google/callback",
            scope: ["profile", "email"],
        },
        function (accessToken, refreshToken, profile, callback) {
            // console.log(profile);
            email = profile.emails[0].value;


            User.findOne({ googleId: profile.id })
                .then(user => {
                    if (!user) {
                        User.create({
                            googleId: profile.id,
                            email: profile.emails[0].value,

                        })
                            .then(() => console.log(`${profile.displayName}'s account has been created`))
                            .catch((err) => {
                                consonle.log(`error (while creating user): ${JSON.stringify(err)}`);
                            })
                            ;
                    }
                })
                .catch((err) => console.log(`Error occured while looking for user: ${JSON.stringify(err)}`))
            // console.log(user);

            callback(null, profile);
        }
    )
);


passport.serializeUser((user, done) => {
    done(null, user);
});


passport.deserializeUser((user, done) => {
    done(null, user);
});



module.exports.getUserEmail = function () {
    return new Promise((resolve, reject) => {
        if (email) {
            resolve(email);
        }
    });
};