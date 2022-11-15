import express from 'express'
import passport from 'passport'

const router = express.Router()
const CLIENT_URL = "http://localhost:19006/";

router.get("/login/success", (req, res) => {
    console.log(req);
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user,
      //   cookies: req.cookies
    });
  }
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

router.get("/logout", (req, res) => {
    console.log("logout");
    req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect(CLIENT_URL);
  });
});



router.get("/github", passport.authenticate("github", { scope: ["profile"] }));

router.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);


export default router