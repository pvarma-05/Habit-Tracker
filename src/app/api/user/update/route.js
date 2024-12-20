import { getData } from "@/lib/getData";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/config/config";

connect();

export async function PUT(request = NextRequest) {
    try {
        const userId = await getData(request);
        const { name, email, avatar } = await request.json();

        // Update user details
        const updatedUser  = await User.findByIdAndUpdate(userId, { name, email, avatar }, { new: true });

        if (!updatedUser ) {
            throw new Error("User  not found");
        }

        return NextResponse.json({
            message: "User  updated successfully",
            data: updatedUser ,
        });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}