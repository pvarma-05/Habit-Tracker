import { connect } from "@/config/config";
import User from "@/models/userModel";
import { NextResponse } from "next/server";

connect(); 

export async function POST(request) {
  try {
    const reqBody = await request.json(); 
    const { name, username, email } = reqBody;

    console.log("Request Body:", reqBody); // For debugging, can be removed later

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "User Already Exists" },
        { status: 400 }
      );
    }

    const newUser = new User({ name, username, email });
    const savedUser = await newUser.save();

    return NextResponse.json({
      message: "User Created Successfully",
      success: true,
      savedUser,
    });
    
  } catch (error) {
    console.log("Error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
