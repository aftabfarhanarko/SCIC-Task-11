import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    // console.log("Register API called with:", body);

    // Here you would save the user to the database
    // For now, we just return success as requested

    return NextResponse.json(
      { message: "User registered successfully", user: body },
      { status: 201 }
    );
  } catch (error) {
    console.error("Register API error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
