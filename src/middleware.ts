import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  if (!request.nextUrl.pathname.includes('.')) {
    console.log('ミドルウェアのテスト')
  }
  return NextResponse.next() // リクエストを次の処理に進める
}

export const config = {
  matcher: ['/blog/:path*']
}