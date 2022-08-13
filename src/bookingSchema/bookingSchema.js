const mongoose1 = require("mongoose");

const booksSchema = new mongoose1.Schema(
  {
    bookName: {
      type: String,
      unique: true,
      required: true,
    },
    authorName: String,
    category: String,
    year: Number,
  },
  { timestamps: true }
);

module.exports = mongoose1.model("Book", booksSchema);
