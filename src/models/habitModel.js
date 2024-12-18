import mongoose from "mongoose";
import User from "./userModel"; // Import User model to fetch preferences

const habitSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    name: {
        type: String,
        required: [true, "Habit name is required"],
        maxlength: 100,
    },
    category: {
        type: String,
        required: [true, "Category is required"],
        validate: {
            validator: async function (value) {
                const user = await User.findById(this.userId); // Fetch user by `userId`
                if (user && user.preferences.tags.includes(value)) {
                    return true;
                }
                return false;
            },
            message: "Invalid category. Ensure the category matches your preferences.",
        },
    },
    recurrence: {
        type: String,
        enum: ["Daily", "Weekly", "Monthly"],
        default: "Daily",
    },
    streakCount: {
        type: Number,
        default: 0,
    },
    streakMaintained: {
        type: Boolean,
        default: false, // Updated dynamically based on streakCount
    },
    startDate: {
        type: Date,
        required: true,
        default: Date.now,
    },
    endDate: {
        type: Date,
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

// // Pre-save hook to update `streakMaintained` based on `streakCount`
// habitSchema.pre("save", function (next) {
//     this.streakMaintained = this.streakCount > 0;
//     next();
// });

const Habit = mongoose.models.Habit || mongoose.model("Habit", habitSchema);
export default Habit;
