import { connect } from "@/config/config";
import User from "@/models/userModel";
import nodemailer from "nodemailer";

connect();

export async function POST(request) {
  try {
    const { email } = await request.json();
    const user = await User.findOne({ email });

    if (!user) {
      return new Response(
        JSON.stringify({ message: "User not found." }),
        { status: 404 }
      );
    }

    // OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpires = new Date(Date.now() + 5 * 60 * 1000); // 5 min

    user.otp = otp;
    user.otpExpires = otpExpires;
    await user.save();

    // Send OTP via mail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Habit Tracker Login OTP",
      text: `Your OTP is ${otp}. It will expire in 5 minutes.`,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "OTP sent successfully." }),
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ message: "Failed to send OTP." }),
      { status: 500 }
    );
  }
}
