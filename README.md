# 🏠 ระบบจัดการหอพัก (Dormitory Management System)

ระบบจัดการหอพักแบบครบวงจร พัฒนาด้วย Next.js 15 สำหรับผู้ดูแลหอพักใช้บริหารจัดการห้องพัก ผู้เช่า และการชำระเงินได้อย่างสะดวกและมีประสิทธิภาพ

---

## ✨ ฟีเจอร์หลัก

- **แดชบอร์ด** — ภาพรวมสถิติห้องพัก ผู้เช่า รายได้ และห้องที่ค้างชำระ
- **ผังห้องพัก (Visual Map)** — แสดงสถานะห้องพักแบบ Grid แยกสีตามสถานะ (ปกติ / ค้างชำระ / ว่าง / ซ่อมบำรุง)
- **จัดการห้องพัก** — เพิ่ม แก้ไข ลบห้องพัก และเปลี่ยนสถานะได้
- **ทำสัญญาเช่า** — บันทึกข้อมูลผู้เช่าใหม่ พร้อมเงินประกันและวันเริ่มสัญญา
- **จดมิเตอร์** — บันทึกเลขมิเตอร์น้ำและไฟฟ้าประจำเดือน คำนวณค่าใช้จ่ายอัตโนมัติ
- **ชำระเงิน** — รองรับการอัปโหลดสลิป และบันทึกประวัติการชำระเงิน
- **ระบบ Authentication** — Login / Register สำหรับผู้ดูแลระบบ

---

## 🛠️ เทคโนโลยีที่ใช้

- [Next.js 15](https://nextjs.org/) — React Framework
- [TypeScript](https://www.typescriptlang.org/) — Type Safety
- [Tailwind CSS](https://tailwindcss.com/) — Styling
- [Vercel](https://vercel.com/) — Deployment

---

## 🚀 การติดตั้งและรันโปรเจกต์

```bash
# 1. Clone repository
git clone https://github.com/your-username/dormitory-1.git
cd dormitory-1

# 2. ติดตั้ง dependencies
npm install

# 3. รัน development server
npm run dev
```

เปิดเบราว์เซอร์ที่ [http://localhost:3000](http://localhost:3000)

---

## 📁 โครงสร้างโปรเจกต์

```
dormitory-1/
├── app/
│   ├── page.tsx              # หน้าแรก
│   ├── admin/
│   │   ├── layout/           # Admin Layout
│   │   └── dashboard/        # แดชบอร์ดหลัก
│   ├── auth/                 # หน้า Login / Register
│   └── api/                  # API Routes
├── public/                   # Static files
└── data/                     # ข้อมูล
```

---

## 👨‍💻 ผู้จัดทำ

| ชื่อ | รหัสนักศึกษา |
|------|--------------|
| นาย ธนาพนธ์ แต้มมาก | 6612732112 |
| นาย วิมลชัย ด่านประสิทธิ์ผล | 6612732126 |
| นาย ปฏิพัทธ์ ศรีบุรินทร์ | 6612732117 |

---

## 📄 License

This project is for educational purposes only.