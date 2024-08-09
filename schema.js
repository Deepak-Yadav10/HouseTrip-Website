const Joi = require("joi");

module.exports.listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    location: Joi.string().required(),
    country: Joi.string().required(),
    price: Joi.number().required().min(0),
    image: Joi.string().allow("", null),
  }).required(),
});

const joi = require("joi");

module.exports.reviewSchema = joi.object({
  review: joi
    .object({
      rating: joi.number().required(),
      comment: joi.string().required(),
    })
    .required(),
});
