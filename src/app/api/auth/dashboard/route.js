import { getData } from "@/lib/getData";
import { NextRequest,NextResponse } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/config/config";

connect();

export async function GET(request = NextRequest) {
    try {
        const userId = await getData(request);
        const user = await User.findId({_id:userId});
        select("-isVerified -otp -otpExpires -createdAt -updatedAt -verifyToken -verifyTokenExpiry")
        return NextResponse.json({
            message : "User Found",
            data : user,
        })
    } catch (error) {
        return NextResponse.json({error:error.message},{status:400});
    }
}