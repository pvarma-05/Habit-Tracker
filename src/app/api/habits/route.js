import { getData } from "@/lib/getData";
import { connect } from "@/config/config";
import { NextRequest, NextResponse } from "next/server";
import Habit from "@/models/habitModel";

connect();

export async function GET(request = NextRequest) {
    try {
        const userId = await getData(request);
        const habits = await Habit.find({ userId });

        return NextResponse.json({
            message: "Habits fetched successfully.",
            data: habits,
        });
    } catch (error) {
        console.log("Error fetching habits:", error.message);
        return NextResponse.json(
            { message: "Internal server error.", error: error.message },
            { status: 500 }
        );
    }
}