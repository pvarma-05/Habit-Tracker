import { resetStreaks } from "@/lib/resetStreaks";

export default async function handler(req, res) {
  await resetStreaks();
  res.status(200).json({ message: "Streak reset job executed." });
}
