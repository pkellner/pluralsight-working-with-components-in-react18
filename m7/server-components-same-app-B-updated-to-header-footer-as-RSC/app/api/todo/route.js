import { NextResponse } from "next/server";
import { todos } from "./todos";

export async function GET() {
  return new NextResponse(JSON.stringify({ todos: todos }, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
