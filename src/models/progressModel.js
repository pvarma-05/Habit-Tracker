import mongoose from "mongoose";

const progressSchema = new mongoose.Schema({
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
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

const Progress = mongoose.models.Progress || mongoose.model("Progress", progressSchema);
export default Progress;
