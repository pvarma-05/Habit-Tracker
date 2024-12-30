import { connect } from "@/config/config";
import Habit from "@/models/habitModel";

connect();

export async function resetStreaks() {
  const now = new Date();

  try {
    const habitsToReset = await Habit.find({
      resetTime: { $lte: now },
    });

    for (const habit of habitsToReset) {
      habit.resetStreak();
      await habit.save();
    }

    console.log(`Reset ${habitsToReset.length} streaks at ${now}`);
  } catch (error) {
    console.error(`Error resetting streaks: ${error.message}`);
  }
}
