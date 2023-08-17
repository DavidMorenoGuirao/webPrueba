import { NextResponse } from "next/server";
import { prisma } from "../../client";

type Params = { params: { id: string } };

export async function PATCH(request: Request, { params }: Params) {
  try {
    const { id } = params;
    const { title } = await request.json();
    const post = await prisma.post.update({
      where: { id: id },
      data: { title },
    });
    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    console.error("request error", error);
    NextResponse.json({ error: "error updating post" }, { status: 500 });
  }
}
