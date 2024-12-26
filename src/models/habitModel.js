import mongoose from "mongoose";
import User from "./userModel";

const habitSchema = new mongoose.Schema(
    {
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
                    const user = await User.findById(this.userId);
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
            default: false,
        },
        startDate: {
            type: Date,
            required: true,
            default: Date.now,
        },
        endDate: {
            type: Date,
            default: null,
        },
    },
    { timestamps: true }
);

const Habit = mongoose.models.Habit || mongoose.model("Habit", habitSchema);
export default Habit;
