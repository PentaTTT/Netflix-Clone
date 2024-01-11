const mongoose = require("mongoose")

const ListSchema = new mongoose.Schema({
    title: { type: String, require: true, unique: true },
    type: { type: String },
    genre: { type: String },
    content: { type: Array },
}, { timestamps: true });

module.export = mongoose.model("User", ListSchema)