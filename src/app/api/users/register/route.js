import { Connect } from "@/config/config";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";


Connect()

export async function POST(request = NextRequest) {
    try {
        reqBody = await request.json
        const { fName, lName, email } = reqBody
        console.log(reqBody); //remove

        const user = await User.findOne({ email })
        if (user)
            return NextResponse.json({ error: "User Already Exists" }, { status: 400 })
        
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        const newUser = new user({
            fName, lName, email,password:hashedPassword
        })
        const savedUser = await newUser.save()
        return NextResponse.json(
            {
                message: "User Created Successfully",
                success : "true",
                savedUser
            })

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}