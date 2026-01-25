import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");
  const tag = request.nextUrl.searchParams.get("tag");
  const path = request.nextUrl.searchParams.get("path");

  if (secret !== process.env.NEXT_PRIVATE_REVALIDATION_KEY) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  if (tag) {
    revalidateTag(tag);
    return NextResponse.json({ revalidated: true, now: Date.now(), tag });
  }

  if (path) {
    revalidatePath(path);
    return NextResponse.json({ revalidated: true, now: Date.now(), path });
  }

  return NextResponse.json(
    { message: "Missing path or tag to revalidate" },
    { status: 400 },
  );
}
