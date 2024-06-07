const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    description: { type: String },
    image: { type: String },
    cookingTime: { type: String },
    calories: { type: String },
    ingredients: [{ type: String }],
    instructions: [{ type: String }],
    ratings: [
      {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        rating: { type: Number },
      },
    ],
    comments: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        comment: {
          type: String,
        },
        date: {
          type: Date,
          default: Date.now(),
        },
      },
    ],
    category: {
      type: String,
      enum: ['Fatloss-Veg', 'Fatloss-Nonveg', 'Musclegain-Veg', 'Musclegain-Nonveg', 'Balanced Diet'],
      required: true,
      validate: {
        validator: function(value) {
          const categories = ['Fatloss-Veg', 'Fatloss-Nonveg', 'Musclegain-Veg', 'Musclegain-Nonveg', 'Balanced Diet'];
          return categories.some(category => category.toLowerCase() === value.toLowerCase());
        },
        message: props => `${props.value} is not a valid category.`
      }
    },
  },
  {
    timestamps: true,
  }
);

const Recipe = mongoose.model("Recipe", schema);
module.exports = Recipe;
