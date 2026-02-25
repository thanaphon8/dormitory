import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json({ message: "กรุณากรอกข้อมูล" }, { status: 400 });
  }

  const filePath = path.join(process.cwd(), "data", "users.json");
  const fileData = fs.readFileSync(filePath, "utf8");
  const users = JSON.parse(fileData);

  const user = users.find((u: any) => u.email === email && u.password === password);

  if (!user) {
    return NextResponse.json({ message: "อีเมลหรือรหัสผ่านไม่ถูกต้อง" }, { status: 401 });
  }

  return NextResponse.json({
    message: "เข้าสู่ระบบสำเร็จ",
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone
    }
  });
}
