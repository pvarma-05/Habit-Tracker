import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fName: {
        type: String,
        required: [true, "Please Provide a First Name"],
    },
    lName: {
        type: String,
        required: [true, "Please Provide a Last Name"],
    },
    email: {
        type: String,
        required: [true, "Please Provide an Email"],
        unique: true,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    // password: {
    //     type: String,
    //     required: [true, "Please Provide a Password"],
    // },

    verifyToken: String,
    verifyTokenExpiry: Date,
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,

    profilePic: {
        type: String, // URL of the profile picture
        default: null,
    },
    preferences: {
        tags: {
            type: [String],
            default: ["Health", "Work", "Personal Development", "Social", "Finance", "Household"],
        },
        defaultNotificationTime: {
            type: String, // Example: "09:00"
            default: "09:00",
        },
        theme: {
            type: String, // "light" or "dark"
            default: "dark",
        },
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
