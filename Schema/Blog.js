const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(

    {
        url: { type: mongoose.SchemaTypes.String, required:true},
        title: { type: mongoose.SchemaTypes.String, required:true},
        description: { type: mongoose.SchemaTypes.String, required:true},
        user: { type: mongoose.SchemaTypes.ObjectId,ref: "user", required:true}
    },
    { timestamps: true}
);

const blog = mongoose.model("Blog", blogSchema);

module.exports = blog;