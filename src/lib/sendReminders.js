import { connect } from "@/config/config";
import User from "@/models/userModel";
import { sendMail } from "@/lib/sendMail";

connect();

export async function sendReminders() {
  try {
    // Fetch all users
    const users = await User.find({});

    // Email details
    const subject = `Daily Habit Reminder`;
    const text = (name) => `
      Hi ${name},

      This is your daily habit reminder to stay on track with your goals.

      Keep up the great work!

      Best regards,
      Habit Tracker Team
    `;

    // Loop through users and send emails
    for (const user of users) {
      await sendMail(user.email, subject, text(user.name));
    }

    console.log(`Sent reminders to ${users.length} users at 9:00 AM`);
  } catch (error) {
    console.error(`Error sending reminders: ${error.message}`);
  }
}
