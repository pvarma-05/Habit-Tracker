import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
    {
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
        isSaved: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

// TTL Index for auto-deletion of notifications after 7 days if not saved
notificationSchema.index(
    { createdAt: 1 },
    {
        expireAfterSeconds: 7 * 24 * 60 * 60, // 7 days
        partialFilterExpression: { isSaved: false }, // Only delete if `isSaved` is false
    }
);

const Notification = mongoose.models.Notification || mongoose.model("Notification", notificationSchema);
export default Notification;
