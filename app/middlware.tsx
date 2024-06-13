import * as jose from "jose";
import { NextRequest } from "next/server";
const hankoApi = "https://9aca64d7-d59a-4661-8ba7-7c4af8958d5a.hanko.io";
export default async function middleware(req: NextRequest) {
  const token = req.cookies.get("hanko")?.value;
  const JWKS = jose.createRemoteJWKSet(
    new URL(`${hankoApi}/.well-known/jwks.json`)
  );
  try {
    const verifiedJWT = await jose.jwtVerify(token, JWKS);
    console.log(verifiedJWT);
  } catch {
    return NextResponse.redirect(new URL("/", req.url));
  }
}

export const config = {
    matcher: ["/todo"],
  };
  