const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");

// const { listingSchema, reviewSchema } = require("../schema.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const review = require("../models/review.js");

const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware.js");

const requireController = require("../controllers/reviews.js");

// reviews 
// Post Route  

router.post("/", isLoggedIn, validateReview, wrapAsync(requireController.createReview));

// reviews
// delete route 
router.delete(
    "/:reviewId", isLoggedIn, isReviewAuthor,
    wrapAsync(requireController.destroyReview)
);

module.exports = router;