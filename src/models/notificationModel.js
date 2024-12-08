import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    habitId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Habit",
    },
    type: {
        type: String,
        enum: ["Reminder", "Alert"],
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    isRead: {
        type: Boolean,
        default: false,
    },
    isMuted: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Notification = mongoose.models.Notification || mongoose.model("Notification", notificationSchema);
export default Notification;
