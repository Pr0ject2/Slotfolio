import { NextResponse } from "next/server";
import { affiliateUrl } from "@/lib/affiliate";
export async function GET(
  request: Request,
  { params }: { params: Promise<{ operator: string }> },
) {
  const { operator } = await params;
  if (operator !== "1win")
    return new NextResponse("Оператор не найден", { status: 404 });
  const url = affiliateUrl();
  if (!url) return NextResponse.redirect(new URL("/disclosure", request.url));
  return NextResponse.redirect(url, 302);
}
