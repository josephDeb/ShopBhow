

const stripe = require("stripe")(process.env.STRIPE_KEY)

("use strict");

const {createCoreController} = require("@strapi/strapi").factories