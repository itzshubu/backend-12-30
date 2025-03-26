import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        profilePic: {
            type: String,
            default: "https://via.placeholder.com/150",
        },
        role: {
            type: String,
            enum: ["user", "admin"],
            default: "user",
        },
        Cart: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
            }
        ],
        address: {
            type: String,
        },
        phone: {
            type: String,
        }
    },
    { timestamps: true }
);

export default mongoose.model("User", userSchema);
