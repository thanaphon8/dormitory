import Link from 'next/link';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar ด้านซ้าย */}
      <aside className="w-64 bg-white shadow-md hidden md:flex flex-col">
        <div className="p-6 text-xl font-bold text-blue-600">
          🏢 หอพัก Admin
        </div>
        <nav className="flex-1 px-4 space-y-2">
          <Link href="/admin/dashboard" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded">
             📊 ภาพรวม
          </Link>
          <Link href="/admin/rooms" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded">
             🛏️ ห้องพัก
          </Link>
          <Link href="/admin/meter" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded">
             ⚡ จดมิเตอร์
          </Link>
          <Link href="/admin/invoices" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded">
             💰 ใบแจ้งหนี้
          </Link>
          <Link href="/admin/transactions" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded">
             🧾 ตรวจสลิป
          </Link>
        </nav>
        <div className="p-4 border-t">
          <button className="text-red-500 text-sm">Logout</button>
        </div>
      </aside>

      {/* เนื้อหาหลัก (Main Content) จะเปลี่ยนไปตามหน้า */}
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}