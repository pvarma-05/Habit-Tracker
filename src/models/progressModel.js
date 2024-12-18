import mongoose from "mongoose";

const progressSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        habitId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Habit",
            required: true,
        },
        date: {
            type: Date,
            required: true,
            default: Date.now,
        },
        status: {
            type: String,
            enum: ["Completed", "Skipped", "Pending"],
            required: true,
        },
    },
    { timestamps: true }
);

// Compound Index to prevent duplicate progress entries
progressSchema.index({ userId: 1, habitId: 1, date: 1 }, { unique: true });

const Progress = mongoose.models.Progress || mongoose.model("Progress", progressSchema);
export default Progress;
