import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  const { name, email, phone, password } = await req.json();

  if (!name || !email || !phone || !password) {
    return NextResponse.json({ message: "กรุณากรอกข้อมูลให้ครบ" }, { status: 400 });
  }

  // path ของ users.json
  const filePath = path.join(process.cwd(), "data", "users.json");
  const fileData = fs.readFileSync(filePath, "utf8");
  const users = JSON.parse(fileData);

  // เช็คว่า email ซ้ำไหม
  const exists = users.find((u: any) => u.email === email);
  if (exists) {
    return NextResponse.json({ message: "อีเมลนี้ถูกใช้แล้ว" }, { status: 400 });
  }

  // เพิ่ม user ใหม่
  const newUser = { id: Date.now(), name, email, phone, password };
  users.push(newUser);

  // เขียนไฟล์ใหม่
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

  return NextResponse.json({ message: "สมัครสมาชิกสำเร็จ" }, { status: 201 });
}
