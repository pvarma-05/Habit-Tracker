import { sendReminders } from "@/lib/sendReminders";

export default async function handler(req, res) {
  await sendReminders();
  res.status(200).json({ message: "Reminder job executed." });
}