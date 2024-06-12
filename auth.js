// sets up Passport with a local authentication strategy, using a person modal

const passport = require("passport");
const LocalStrategy = require("passport-local");
const Person = require("./models/Person");

passport.use(
  new LocalStrategy(async (USERNAME, PASSWORD, done) => {
    // authentication logic here
    try {
      console.log("reserved crenditials:", USERNAME, PASSWORD);
      const user = await Person.findOne({ username: USERNAME });
      if (!user) {
        return done(null, false, { message: "Incorrect username." });
      }
      const isPasswordMatch = user.password === PASSWORD ? true : false;
      if (isPasswordMatch) {
        return done(null, user);
      } else {
        return done(null, false, { message: "Incorrect password." });
      }
    } catch (err) {
      return done(err);
    }
  })
);

module.exports = passport;
