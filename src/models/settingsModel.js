import mongoose from "mongoose";

const settingsSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    notificationPreferences: {
        emailReminders: {
            type: Boolean,
            default: true,
        },
        calendarSync: {
            type: Boolean,
            default: false,
        },
    },
    appearance: {
        theme: {
            type: String,
            enum: ["light", "dark"],
            default: "dark",
        },
    },
    habitTags: {
        type: [String],
        default: ["Health", "Work", "Personal Development", "Social", "Finance", "Household"],
    },
});

const Settings = mongoose.models.Settings || mongoose.model("Settings", settingsSchema);
export default Settings;
