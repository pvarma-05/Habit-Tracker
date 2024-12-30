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
    progressUpdatedDate: {
      type: Date,
      default: null,
    },
    updateTime: {
      type: Date,
      default: null,
    },
    resetTime: {
      type: Date,
      default: null,
    },
    isCompleted: {
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

function calculateTimes(recurrence, lastUpdate) {
  const now = new Date();
  const updateTime = new Date(lastUpdate);
  const resetTime = new Date(lastUpdate);

  switch (recurrence) {
    case "Daily":
      updateTime.setDate(updateTime.getDate() + 1);
      resetTime.setDate(resetTime.getDate() + 2);
      resetTime.setHours(0, 0, 0, 0);
      break;
    case "Weekly":
      updateTime.setDate(updateTime.getDate() + 7);
      resetTime.setDate(resetTime.getDate() + 14);
      resetTime.setHours(0, 0, 0, 0);
      break;
    case "Monthly":
      updateTime.setMonth(updateTime.getMonth() + 1);
      resetTime.setMonth(resetTime.getMonth() + 2);
      resetTime.setDate(1);
      resetTime.setHours(0, 0, 0, 0);
      break;
    default:
      throw new Error("Invalid recurrence type");
  }

  return { updateTime, resetTime };
}

habitSchema.methods.updateProgress = function () {
  const now = new Date();

  if (this.isCompleted) {
    throw new Error("Cannot update a completed habit.");
  }

  if (this.resetTime && now >= this.resetTime) {
    this.streakCount = 0;
  }

  if (this.updateTime && now < this.updateTime) {
    throw new Error("Progress cannot be updated yet.");
  }

  this.streakCount += 1;
  this.streakMaintained = true;
  this.progressUpdatedDate = now;

  const times = calculateTimes(this.recurrence, now);
  this.updateTime = times.updateTime;
  this.resetTime = times.resetTime;
};

habitSchema.methods.completeHabit = function () {
  this.isCompleted = true;
  this.endDate = new Date();
};

const Habit = mongoose.models.Habit || mongoose.model("Habit", habitSchema);
export default Habit;
