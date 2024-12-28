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

habitSchema.methods.updateProgress = function () {
    const now = new Date();
  
    if (this.isCompleted) {
      throw new Error("Cannot update for a completed habit.");
    }
  
    const lastUpdated = this.progressUpdatedDate || this.startDate;
    const resetTime = getResetTime(this.recurrence, lastUpdated);
  
    if (this.progressUpdatedDate && this.progressUpdatedDate >= lastUpdated && now < resetTime) {
      throw new Error("Progress has already been updated.");
    }
  
    if (now >= resetTime) {
      this.streakCount = 0;
    } else {
      this.streakCount += 1;
    }
  
    this.streakMaintained = true;
    this.progressUpdatedDate = now;
  };
  
habitSchema.methods.completeHabit = function () {
  this.isCompleted = true;
  this.endDate = new Date();
};

function getResetTime(recurrence, date) {
  const resetTime = new Date(date);

  switch (recurrence) {
    case "Daily":
      resetTime.setDate(resetTime.getDate() + 1);
      break;
    case "Weekly":
      resetTime.setDate(resetTime.getDate() + 7);
      break;
    case "Monthly":
      resetTime.setMonth(resetTime.getMonth() + 1);
      break;
    default:
      throw new Error("Invalid recurrence type");
  }

  resetTime.setHours(0, 0, 0, 0);
  return resetTime;
}

const Habit = mongoose.models.Habit || mongoose.model("Habit", habitSchema);
export default Habit;
