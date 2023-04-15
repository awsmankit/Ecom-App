import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

// Middleware to verify user authentication
export const requireSignIn = async (req, res, next) => {
  try {
    // Verify the JWT passed in the Authorization header
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    // Attach the decoded user information to the request object
    req.user = decode;
    next(); // Call the next middleware or route handler
  } catch (error) {
    console.log(error); // Log any errors to the console
  }
};

// Middleware to verify user is an admin
export const isAdmin = async (req, res, next) => {
  try {
    // Find the user based on their ID stored in the request object
    const user = await userModel.findById(req.user._id);
    // If the user is not an admin, send a 401 Unauthorized response
    if (user.role !== 1) {
      return res.status(401).send({
        success: false,
        message: "UnAuthorized Access",
      });
    } else {
      next(); // Call the next middleware or route handler
    }
  } catch (error) {
    console.log(error); // Log any errors to the console
    // Send a 401 Unauthorized response with error information
    res.status(401).send({
      success: false,
      error,
      message: "Error in admin middleware",
    });
  }
};
