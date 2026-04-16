import { NextResponse } from "next/server";
import { getToys, addToy } from "@/backend/controller/toyController";

export async function GET() {
  try {
    const toys = await getToys();
    return NextResponse.json({ toys }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { title, category, brand } = body;

    if (!title || !category || !brand)
      return NextResponse.json(
        { message: "Title, category, and brand are required." },
        { status: 400 }
      );

    const toy = await addToy(body);
    return NextResponse.json({ message: "Toy added!", toy }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}