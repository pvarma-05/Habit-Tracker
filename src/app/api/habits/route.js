import { getData } from "@/lib/getData";
import { connect } from "@/config/config";
import { NextRequest, NextResponse } from "next/server";
import Habit from "@/models/habitModel";

connect();

export async function GET(request = NextRequest) {
    try {
        const userId = await getData(request);
        const habits = await Habit.find({ userId });

        const categorizedHabits = {
            daily: [],
            weekly: [],
            monthly: [],
            completed: [],
        };

        habits.forEach((habit) => {
            if (habit.isCompleted) {
                categorizedHabits.completed.push(habit);
            } else {
                categorizedHabits[habit.recurrence.toLowerCase()].push(habit);
            }
        });

        return NextResponse.json({
            message: "Habits fetched successfully.",
            data: categorizedHabits,
        });
    } catch (error) {
        console.log("Error fetching habits:", error.message);
        return NextResponse.json(
            { message: "Internal server error.", error: error.message },
            { status: 500 }
        );
    }
}
