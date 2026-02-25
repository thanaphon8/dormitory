'use client';

import React, { useState } from 'react';

const Icons = {
  Home: () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>),
  Users: () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>),
  Bed: () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 4v16"></path><path d="M2 8h18a2 2 0 0 1 2 2v10"></path><path d="M2 17h20"></path><path d="M6 8V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4"></path></svg>),
  DollarSign: () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>),
  Calendar: () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>),
  Settings: () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"></circle><path d="M12 1v6m0 6v6m7.071-13.071l-4.243 4.243m-5.656 5.656l-4.243 4.243m13.071 0l-4.243-4.243m-5.656-5.656l-4.243-4.243"></path></svg>),
  Bell: () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>),
  Search: () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path></svg>),
  Plus: () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>),
  CheckCircle: () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>),
  Menu: () => (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>),
  X: () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>),
  ArrowLeft: () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>),
  Droplet: () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>),
  Zap: () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>),
  AlertCircle: () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>),
  Phone: () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>),
  Trash2: () => (<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>),
  Edit3: () => (<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>),
  Upload: () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>),
  LogOut: () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>),
  User: () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>),
  Shield: () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>),
  ChevronRight: () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"></polyline></svg>),
};

interface PaymentHistory { date: string; amount: number; type: string; slip?: string; }

interface Room {
  id: string;
  status: 'occupied' | 'vacant' | 'maintenance';
  tenant: string; price: number; dueDate: string;
  waterBill: number; electricBill: number; outstandingBalance: number;
  paymentStatus: 'paid' | 'pending' | 'overdue';
  phone: string; moveInDate: string; nationalId?: string; deposit?: number;
  lastWaterMeter: number; lastElectricMeter: number;
  currentWaterMeter: number; currentElectricMeter: number;
  history: PaymentHistory[];
}

/* ─── Bottom Sheet Modal wrapper ────────────────────────────────────────── */
function Sheet({ open, onClose, title, children }: {
  open: boolean; onClose: () => void; title?: React.ReactNode; children: React.ReactNode;
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[60] flex flex-col justify-end sm:items-center sm:justify-center bg-black/70 backdrop-blur-sm">
      <div
        className="absolute inset-0"
        onClick={onClose}
      />
      <div className="relative w-full sm:max-w-lg bg-slate-800 border border-slate-700 shadow-2xl
                      rounded-t-3xl sm:rounded-3xl max-h-[92dvh] flex flex-col">
        {/* drag handle (mobile) */}
        <div className="flex justify-center pt-3 pb-1 sm:hidden">
          <div className="w-10 h-1 bg-slate-600 rounded-full" />
        </div>
        {title && (
          <div className="flex items-center justify-between px-6 pt-4 pb-3 border-b border-slate-700 flex-shrink-0">
            <div>{title}</div>
            <button onClick={onClose} className="p-2 hover:bg-slate-700 rounded-lg text-slate-400 hover:text-slate-200">
              <Icons.X />
            </button>
          </div>
        )}
        <div className="overflow-y-auto flex-1 px-6 py-5">{children}</div>
      </div>
    </div>
  );
}

/* ─── Admin profile page ─────────────────────────────────────────────────── */
function AdminProfilePage({ onBack }: { onBack: () => void }) {
  const menuItems = [
    { icon: 'User', label: 'ข้อมูลส่วนตัว', desc: 'แก้ไขชื่อ อีเมล และรูปโปรไฟล์', color: 'text-blue-400', bg: 'bg-blue-500/10' },
    { icon: 'Shield', label: 'ความปลอดภัย', desc: 'เปลี่ยนรหัสผ่าน และการยืนยันตัวตน', color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
    { icon: 'Bell', label: 'การแจ้งเตือน', desc: 'ตั้งค่าการรับแจ้งเตือนต่างๆ', color: 'text-amber-400', bg: 'bg-amber-500/10' },
    { icon: 'Settings', label: 'ตั้งค่าระบบ', desc: 'ปรับแต่งการทำงานของระบบหอพัก', color: 'text-purple-400', bg: 'bg-purple-500/10' },
  ];
  return (
    <div className="min-h-screen bg-slate-900 text-slate-200">
      <div className="max-w-2xl mx-auto p-4 sm:p-8">
        <button onClick={onBack}
          className="flex items-center gap-2 mb-6 px-3 py-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded-lg transition-colors">
          <Icons.ArrowLeft /><span className="text-sm font-medium">กลับ</span>
        </button>
        <div className="bg-slate-800 rounded-2xl border border-slate-700 p-6 mb-4">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-700 rounded-2xl flex items-center justify-center text-white font-black text-3xl flex-shrink-0">A</div>
            <div>
              <h1 className="text-xl font-black text-slate-100">Admin</h1>
              <p className="text-slate-400 text-sm">ผู้ดูแลระบบหอพัก</p>
              <span className="mt-1.5 inline-flex items-center gap-1 px-2 py-0.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full text-xs font-bold uppercase tracking-wider">
                <Icons.Shield /> Super Admin
              </span>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          {menuItems.map((item) => {
            const IconComp = Icons[item.icon as keyof typeof Icons];
            return (
              <button key={item.label}
                className="w-full flex items-center justify-between gap-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl p-4 transition-colors text-left">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 ${item.bg} rounded-xl flex items-center justify-center ${item.color} flex-shrink-0`}>
                    {IconComp && <IconComp />}
                  </div>
                  <div>
                    <p className="font-bold text-slate-100 text-sm">{item.label}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
                <Icons.ChevronRight />
              </button>
            );
          })}
        </div>
        <button className="w-full mt-4 flex items-center justify-center gap-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-red-400 font-bold py-3 rounded-xl transition-colors">
          <Icons.LogOut /> ออกจากระบบ
        </button>
      </div>
    </div>
  );
}

/* ─── Main component ─────────────────────────────────────────────────────── */
export default function DormitoryManagement() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [showOutstandingOnly, setShowOutstandingOnly] = useState(false);
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [paymentRoom, setPaymentRoom] = useState<Room | null>(null);
  const [showAdminProfile, setShowAdminProfile] = useState(false);
  const [isAddRoomModalOpen, setIsAddRoomModalOpen] = useState(false);
  const [newRoomData, setNewRoomData] = useState<{ id: string; price: number; status: 'vacant' | 'maintenance' }>({ id: '', price: 3000, status: 'vacant' });
  const [isContractModalOpen, setIsContractModalOpen] = useState(false);
  const [contractRoom, setContractRoom] = useState<Room | null>(null);
  const [contractData, setContractData] = useState({ tenant: '', phone: '', nationalId: '', startDate: '', deposit: 3000 });
  const [isEditRoomModalOpen, setIsEditRoomModalOpen] = useState(false);
  const [editRoom, setEditRoom] = useState<Room | null>(null);
  const [paymentSlip, setPaymentSlip] = useState<File | null>(null);
  const [paymentDate, setPaymentDate] = useState(new Date().toISOString().split('T')[0]);

  const [roomData, setRoomData] = useState<Room[]>([
    { id: 'A101', status: 'occupied', tenant: 'สมชาย ใจดี', price: 3000, dueDate: '2024-12-01', waterBill: 150, electricBill: 450, outstandingBalance: 0, paymentStatus: 'paid', phone: '081-234-5678', moveInDate: '2024-01-15', nationalId: '1-2345-67890-12-3', deposit: 5000, lastWaterMeter: 120, lastElectricMeter: 850, currentWaterMeter: 128, currentElectricMeter: 910, history: [] },
    { id: 'A102', status: 'vacant', tenant: '-', price: 3000, dueDate: '-', waterBill: 0, electricBill: 0, outstandingBalance: 0, paymentStatus: 'paid', phone: '-', moveInDate: '-', lastWaterMeter: 100, lastElectricMeter: 800, currentWaterMeter: 100, currentElectricMeter: 800, history: [] },
    { id: 'A103', status: 'occupied', tenant: 'สมหญิง สวยงาม', price: 3000, dueDate: '2024-11-28', waterBill: 200, electricBill: 380, outstandingBalance: 3580, paymentStatus: 'overdue', phone: '082-345-6789', moveInDate: '2024-03-10', nationalId: '1-3345-67890-12-4', deposit: 5000, lastWaterMeter: 210, lastElectricMeter: 750, currentWaterMeter: 220, currentElectricMeter: 795, history: [] },
    { id: 'B201', status: 'occupied', tenant: 'วิชัย มั่นคง', price: 3500, dueDate: '2024-12-05', waterBill: 180, electricBill: 520, outstandingBalance: 0, paymentStatus: 'paid', phone: '083-456-7890', moveInDate: '2024-02-20', nationalId: '1-4345-67890-12-5', deposit: 6000, lastWaterMeter: 150, lastElectricMeter: 900, currentWaterMeter: 160, currentElectricMeter: 975, history: [] },
    { id: 'B202', status: 'maintenance', tenant: '-', price: 3500, dueDate: '-', waterBill: 0, electricBill: 0, outstandingBalance: 0, paymentStatus: 'paid', phone: '-', moveInDate: '-', lastWaterMeter: 140, lastElectricMeter: 880, currentWaterMeter: 140, currentElectricMeter: 880, history: [] },
  ]);

  const WATER_RATE = 18;
  const ELECTRIC_RATE = 7;

  if (showAdminProfile) return <AdminProfilePage onBack={() => setShowAdminProfile(false)} />;

  /* handlers */
  const handleAddRoom = () => {
    if (!newRoomData.id) return;
    setRoomData([...roomData, { id: newRoomData.id, status: newRoomData.status, tenant: '-', price: newRoomData.price, dueDate: '-', waterBill: 0, electricBill: 0, outstandingBalance: 0, paymentStatus: 'paid', phone: '-', moveInDate: '-', lastWaterMeter: 0, lastElectricMeter: 0, currentWaterMeter: 0, currentElectricMeter: 0, history: [] }]);
    setIsAddRoomModalOpen(false);
    setNewRoomData({ id: '', price: 3000, status: 'vacant' });
  };

  const handleCreateContract = () => {
    if (!contractRoom || !contractData.tenant) return;
    setRoomData(roomData.map(r => r.id === contractRoom.id ? { ...r, status: 'occupied', tenant: contractData.tenant, phone: contractData.phone, nationalId: contractData.nationalId, moveInDate: contractData.startDate, deposit: contractData.deposit, paymentStatus: 'paid' } : r));
    setIsContractModalOpen(false); setContractRoom(null);
    setContractData({ tenant: '', phone: '', nationalId: '', startDate: '', deposit: 3000 });
  };

  const handleUpdateMeters = (roomId: string, water: number, electric: number) => {
    setRoomData(roomData.map(r => {
      if (r.id !== roomId) return r;
      const wb = (water - r.lastWaterMeter) * WATER_RATE;
      const eb = (electric - r.lastElectricMeter) * ELECTRIC_RATE;
      return { ...r, currentWaterMeter: water, currentElectricMeter: electric, waterBill: wb, electricBill: eb, outstandingBalance: r.price + wb + eb, paymentStatus: 'pending' };
    }));
  };

  const handleConfirmPayment = () => {
    if (!paymentRoom) return;
    const total = paymentRoom.price + paymentRoom.waterBill + paymentRoom.electricBill + paymentRoom.outstandingBalance;
    setRoomData(roomData.map(r => r.id === paymentRoom.id ? { ...r, outstandingBalance: 0, paymentStatus: 'paid', lastWaterMeter: r.currentWaterMeter, lastElectricMeter: r.currentElectricMeter, history: [{ date: paymentDate, amount: total, type: 'ค่าเช่าประจำเดือน', slip: paymentSlip ? URL.createObjectURL(paymentSlip) : undefined }, ...r.history] } : r));
    setPaymentRoom(null); setPaymentModalOpen(false); setPaymentSlip(null);
  };

  const handleUpdateRoom = (u: Room) => { setRoomData(roomData.map(r => r.id === u.id ? u : r)); setIsEditRoomModalOpen(false); setEditRoom(null); };

  const handleDeleteRoom = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!window.confirm(`ยืนยันลบห้อง ${id}?`)) return;
    setRoomData(roomData.filter(r => r.id !== id));
    if (selectedRoom?.id === id) setSelectedRoom(null);
  };

  const handleRoomClick = (room: Room) => {
    if (room.status === 'vacant') { setContractRoom(room); setIsContractModalOpen(true); }
    else setSelectedRoom(room);
  };

  const changeTab = (id: string) => { setActiveTab(id); setSelectedRoom(null); setSidebarOpen(false); };

  const totalIncome = roomData.reduce((a, r) => a + r.history.reduce((b, h) => b + h.amount, 0), 0);
  const outstandingRooms = roomData.filter(r => r.outstandingBalance > 0);

  const stats = [
    { label: 'ห้องทั้งหมด', value: roomData.length, icon: <Icons.Bed />, color: 'bg-blue-600' },
    { label: 'ห้องว่าง', value: roomData.filter(r => r.status === 'vacant').length, icon: <Icons.CheckCircle />, color: 'bg-emerald-600' },
    { label: 'ผู้เช่า', value: roomData.filter(r => r.status === 'occupied').length, icon: <Icons.Users />, color: 'bg-indigo-600' },
    { label: 'รายได้รวม', value: `฿${totalIncome.toLocaleString()}`, icon: <Icons.DollarSign />, color: 'bg-amber-600' },
  ];

  const navItems = [
    { icon: <Icons.Home />, label: 'แดชบอร์ด', id: 'dashboard' },
    { icon: <Icons.Bed />, label: 'ห้องพัก', id: 'rooms' },
    { icon: <Icons.Zap />, label: 'มิเตอร์', id: 'meters' },
    { icon: <Icons.Users />, label: 'ผู้เช่า', id: 'tenants' },
  ];

  const statusBadge = (s: string) => {
    const map: Record<string, [string, string]> = { occupied: ['bg-green-500/10 text-green-400 border-green-500/20', 'มีผู้เช่า'], vacant: ['bg-slate-500/10 text-slate-400 border-slate-500/20', 'ว่าง'], maintenance: ['bg-yellow-500/10 text-yellow-400 border-yellow-500/20', 'ซ่อมบำรุง'] };
    const [cls, label] = map[s] ?? ['bg-gray-500/10 text-gray-400 border-gray-500/20', s];
    return <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${cls}`}>{label}</span>;
  };

  const payBadge = (s: string) => {
    const map: Record<string, [string, string]> = { paid: ['bg-green-500/10 text-green-400 border-green-500/20', 'ชำระแล้ว'], pending: ['bg-yellow-500/10 text-yellow-400 border-yellow-500/20', 'รอชำระ'], overdue: ['bg-red-500/10 text-red-400 border-red-500/20', 'เกินกำหนด'] };
    const [cls, label] = map[s] ?? ['bg-gray-500/10 text-gray-400 border-gray-500/20', s];
    return <span className={`px-2 py-0.5 rounded-full text-xs font-medium border ${cls}`}>{label}</span>;
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200">

      {/* ════ HEADER ════════════════════════════════════════════════════════ */}
      <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-700">
        <div className="flex items-center justify-between px-3 sm:px-6 h-14">
          {/* left */}
          <div className="flex items-center gap-2 min-w-0">
            <button onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-slate-800 rounded-lg lg:hidden flex-shrink-0">
              {sidebarOpen ? <Icons.X /> : <Icons.Menu />}
            </button>
            <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0">
              <Icons.Home />
            </div>
            <div className="min-w-0 leading-tight">
              {/* ย่อชื่อบน mobile */}
              <p className="font-bold text-slate-100 text-sm truncate">
                <span className="lg:hidden">หอพัก</span>
                <span className="hidden lg:inline">ระบบจัดการหอพัก</span>
              </p>
              <p className="text-[10px] text-slate-500 hidden sm:block">Dormitory Management System</p>
            </div>
          </div>
          {/* right */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="relative hidden md:block">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"><Icons.Search /></span>
              <input type="text" placeholder="ค้นหาห้อง, ผู้เช่า..."
                className="pl-9 pr-4 py-1.5 border border-slate-700 rounded-lg bg-slate-800 text-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-500 w-52 text-sm" />
            </div>
            <button className="relative p-2 hover:bg-slate-800 rounded-lg flex-shrink-0">
              <Icons.Bell />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-red-500 rounded-full" />
            </button>
            <button onClick={() => setShowAdminProfile(true)}
              className="w-8 h-8 bg-slate-700 hover:bg-slate-600 rounded-full flex items-center justify-center text-white font-semibold text-sm ring-2 ring-transparent hover:ring-blue-500/50 transition-all flex-shrink-0">
              A
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* ════ SIDEBAR OVERLAY ════════════════════════════════════════════ */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-30 bg-black/60 lg:hidden" onClick={() => setSidebarOpen(false)} />
        )}

        {/* ════ SIDEBAR ════════════════════════════════════════════════════ */}
        <aside className={`fixed inset-y-0 left-0 z-40 w-60 bg-slate-900 border-r border-slate-700 pt-14
                          transition-transform duration-300 lg:static lg:pt-0 lg:translate-x-0 lg:block
                          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <nav className="p-3 space-y-1">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => changeTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors text-sm font-medium ${activeTab === item.id ? 'bg-slate-700 text-slate-100' : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'}`}>
                {item.icon} {item.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* ════ MAIN ════════════════════════════════════════════════════════ */}
        {/* pb-20 = room for bottom nav on mobile */}
        <main className="flex-1 min-w-0 p-3 sm:p-5 lg:p-8 pb-24 lg:pb-8">

          {/* ── DASHBOARD ──────────────────────────────────────────────── */}
          {activeTab === 'dashboard' && !selectedRoom && (
            <>
              {/* Stats — 2 cols mobile, 4 cols desktop */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
                {stats.map((s, i) => (
                  <div key={i} className="bg-slate-800 rounded-xl border border-slate-700 p-4">
                    <div className={`${s.color} w-9 h-9 rounded-lg flex items-center justify-center text-white mb-3`}>{s.icon}</div>
                    <p className="text-slate-400 text-xs mb-0.5 truncate">{s.label}</p>
                    <p className="text-xl font-bold text-slate-100 truncate">{s.value}</p>
                  </div>
                ))}
              </div>

              {/* Outstanding cards */}
              {outstandingRooms.length > 0 && (
                <div className="mb-5">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">ค้างชำระ</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {outstandingRooms.map(r => (
                      <div key={r.id} className="bg-slate-800 p-4 rounded-xl border border-red-500/20">
                        <div className="flex justify-between mb-3">
                          <div><p className="text-xs text-slate-500">ห้อง</p><p className="font-bold text-slate-100">{r.id}</p></div>
                          <div className="text-right"><p className="text-xs text-slate-500">ค้างชำระ</p><p className="font-bold text-red-400">฿{r.outstandingBalance.toLocaleString()}</p></div>
                        </div>
                        <div className="flex gap-2">
                          <button onClick={() => { setPaymentRoom(r); setPaymentModalOpen(true); }}
                            className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg text-sm font-bold">ชำระเงิน</button>
                          <button onClick={() => setSelectedRoom(r)}
                            className="px-3 py-2 border border-slate-700 rounded-lg text-xs text-slate-300 hover:bg-slate-700">รายละเอียด</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Visual room map */}
              <div className="bg-slate-800 rounded-xl border border-slate-700 p-4 mb-5">
                <div className="mb-4">
                  <h2 className="text-base font-bold text-slate-100">ผังห้องพัก</h2>
                  {/* legend wraps on small screens */}
                  <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1.5">
                    {[['bg-green-500', 'ปกติ'], ['bg-red-500', 'ค้างชำระ'], ['bg-slate-600', 'ว่าง'], ['bg-yellow-500', 'ซ่อมบำรุง']].map(([c, l]) => (
                      <div key={l} className="flex items-center gap-1.5"><div className={`w-2 h-2 ${c} rounded-full`} /><span className="text-xs text-slate-400">{l}</span></div>
                    ))}
                  </div>
                </div>
                {/* 3 cols → 4 → 6 → 8 */}
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-3">
                  {roomData.map((room) => (
                    <div key={room.id} onClick={() => handleRoomClick(room)}
                      className={`aspect-square rounded-xl border-2 flex flex-col items-center justify-center cursor-pointer transition-all active:scale-95 relative group
                        ${room.status === 'occupied'
                          ? room.outstandingBalance > 0 ? 'bg-red-500/20 border-red-500/50' : 'bg-green-500/20 border-green-500/50'
                          : room.status === 'maintenance' ? 'bg-yellow-500/20 border-yellow-500/50' : 'bg-slate-700/50 border-slate-600'}`}>
                      <button onClick={(e) => { e.stopPropagation(); setEditRoom(room); setIsEditRoomModalOpen(true); }}
                        className="absolute top-1 left-1 w-6 h-6 bg-slate-800/90 rounded-md flex items-center justify-center opacity-0 group-hover:opacity-100 text-slate-400 hover:text-blue-400 border border-slate-700 transition-all">
                        <Icons.Settings />
                      </button>
                      <span className="text-xs sm:text-sm font-black text-slate-100 leading-none">{room.id}</span>
                      <span className={`text-[9px] font-bold uppercase mt-0.5 text-center leading-tight px-0.5
                        ${room.status === 'occupied' ? room.outstandingBalance > 0 ? 'text-red-400' : 'text-green-400' : room.status === 'maintenance' ? 'text-yellow-400' : 'text-slate-400'}`}>
                        {room.status === 'occupied' ? (room.outstandingBalance > 0 ? 'ค้าง' : 'ปกติ') : room.status === 'maintenance' ? 'ซ่อม' : 'ว่าง'}
                      </span>
                    </div>
                  ))}
                  <button onClick={() => setIsAddRoomModalOpen(true)}
                    className="aspect-square rounded-xl border-2 border-dashed border-slate-700 flex flex-col items-center justify-center text-slate-500 hover:border-slate-500 hover:text-slate-300 transition-colors">
                    <Icons.Plus /><span className="text-[9px] mt-0.5 font-bold">เพิ่ม</span>
                  </button>
                </div>
              </div>

              {/* Room list */}
              <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                <div className="p-4 border-b border-slate-700 flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <h2 className="text-sm font-bold text-slate-100 truncate">{showOutstandingOnly ? 'ห้องที่ค้างชำระ' : 'รายการห้องพัก'}</h2>
                    <p className="text-xs text-slate-500 mt-0.5 hidden sm:block">{showOutstandingOnly ? `ค้างชำระ ${outstandingRooms.length} ห้อง` : 'สถานะการชำระเงินทั้งหมด'}</p>
                  </div>
                  <button onClick={() => setShowOutstandingOnly(!showOutstandingOnly)}
                    className={`flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${showOutstandingOnly ? 'bg-red-600 text-white' : 'bg-slate-700 text-slate-200 hover:bg-slate-600'}`}>
                    {showOutstandingOnly ? 'ทั้งหมด' : 'ค้างชำระ'}
                  </button>
                </div>
                {/* Desktop table */}
                <div className="hidden md:block overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-slate-900/50 border-b border-slate-700">
                      <tr>
                        {['ห้อง', 'สถานะ', 'ผู้เช่า', 'ค่าเช่า', ...(showOutstandingOnly ? ['ค้างชำระ'] : []), 'การชำระ'].map(h => (
                          <th key={h} className="px-5 py-3 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-700">
                      {(showOutstandingOnly ? outstandingRooms : roomData).map(room => (
                        <tr key={room.id} onClick={() => handleRoomClick(room)}
                          className={`transition-colors ${room.status !== 'vacant' ? 'hover:bg-slate-700/40 cursor-pointer' : 'opacity-60'}`}>
                          <td className="px-5 py-3 font-bold text-slate-100">{room.id}</td>
                          <td className="px-5 py-3">{statusBadge(room.status)}</td>
                          <td className="px-5 py-3 text-sm text-slate-300">{room.tenant}</td>
                          <td className="px-5 py-3 text-sm font-medium text-slate-100">฿{room.price.toLocaleString()}</td>
                          {showOutstandingOnly && <td className="px-5 py-3 text-sm font-bold text-red-400">฿{room.outstandingBalance.toLocaleString()}</td>}
                          <td className="px-5 py-3">{room.status === 'occupied' ? payBadge(room.paymentStatus) : <span className="text-xs text-slate-600">-</span>}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {/* Mobile card list */}
                <div className="md:hidden divide-y divide-slate-700">
                  {(showOutstandingOnly ? outstandingRooms : roomData).map(room => (
                    <div key={room.id} onClick={() => handleRoomClick(room)}
                      className={`p-4 ${room.status !== 'vacant' ? 'cursor-pointer active:bg-slate-700/50' : 'opacity-60'}`}>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div><p className="font-bold text-slate-100">ห้อง {room.id}</p><p className="text-xs text-slate-400 mt-0.5">{room.tenant}</p></div>
                        <div className="flex flex-col items-end gap-1">{statusBadge(room.status)}{room.status === 'occupied' && payBadge(room.paymentStatus)}</div>
                      </div>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-sm font-semibold text-slate-200">฿{room.price.toLocaleString()}/เดือน</span>
                        {showOutstandingOnly && room.outstandingBalance > 0 && <span className="text-sm font-bold text-red-400">ค้าง ฿{room.outstandingBalance.toLocaleString()}</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* ── METERS ─────────────────────────────────────────────────── */}
          {activeTab === 'meters' && (
            <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
              <div className="p-4 sm:p-6 border-b border-slate-700">
                <h2 className="text-lg font-bold text-slate-100">จดมิเตอร์ประจำเดือน</h2>
                <p className="text-xs text-slate-400 mt-1">บันทึกเลขมิเตอร์เพื่อคำนวณค่าน้ำ-ไฟ</p>
              </div>
              {/* Desktop */}
              <div className="hidden sm:block overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-900/50 border-b border-slate-700">
                    <tr className="text-xs uppercase font-bold text-slate-500">
                      <th className="px-5 py-3 text-left">ห้อง</th>
                      <th className="px-5 py-3 text-left">มิเตอร์น้ำ (เก่า → ใหม่)</th>
                      <th className="px-5 py-3 text-left">มิเตอร์ไฟ (เก่า → ใหม่)</th>
                      <th className="px-5 py-3 text-right">ยอดรวม</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700">
                    {roomData.filter(r => r.status === 'occupied').map(room => (
                      <tr key={room.id} className="hover:bg-slate-700/30">
                        <td className="px-5 py-4 font-bold text-slate-100">{room.id}</td>
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-slate-500">{room.lastWaterMeter}</span>
                            <span className="text-slate-600 text-xs">→</span>
                            <input type="number" defaultValue={room.currentWaterMeter}
                              onBlur={e => handleUpdateMeters(room.id, parseInt(e.target.value), room.currentElectricMeter)}
                              className="bg-slate-900 border border-slate-600 rounded-lg px-2 py-1 w-20 text-sm outline-none focus:ring-1 focus:ring-blue-500" />
                          </div>
                        </td>
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-slate-500">{room.lastElectricMeter}</span>
                            <span className="text-slate-600 text-xs">→</span>
                            <input type="number" defaultValue={room.currentElectricMeter}
                              onBlur={e => handleUpdateMeters(room.id, room.currentWaterMeter, parseInt(e.target.value))}
                              className="bg-slate-900 border border-slate-600 rounded-lg px-2 py-1 w-20 text-sm outline-none focus:ring-1 focus:ring-blue-500" />
                          </div>
                        </td>
                        <td className="px-5 py-4 text-right">
                          <p className="font-bold text-slate-100">฿{(room.price + room.waterBill + room.electricBill).toLocaleString()}</p>
                          <p className="text-[10px] text-slate-500">รวมค่าเช่า</p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* Mobile cards */}
              <div className="sm:hidden divide-y divide-slate-700">
                {roomData.filter(r => r.status === 'occupied').map(room => (
                  <div key={room.id} className="p-4 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-slate-100">ห้อง {room.id}</span>
                      <span className="text-sm font-bold text-slate-100">฿{(room.price + room.waterBill + room.electricBill).toLocaleString()}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-slate-900/60 rounded-lg p-3">
                        <div className="flex items-center gap-1.5 mb-2 text-blue-400"><Icons.Droplet /><span className="text-xs font-bold">มิเตอร์น้ำ</span></div>
                        <p className="text-xs text-slate-500 mb-1.5">เก่า: {room.lastWaterMeter}</p>
                        <input type="number" defaultValue={room.currentWaterMeter}
                          onBlur={e => handleUpdateMeters(room.id, parseInt(e.target.value), room.currentElectricMeter)}
                          className="w-full bg-slate-800 border border-slate-600 rounded-lg px-2 py-2 text-sm text-slate-100 outline-none focus:ring-1 focus:ring-blue-500" />
                      </div>
                      <div className="bg-slate-900/60 rounded-lg p-3">
                        <div className="flex items-center gap-1.5 mb-2 text-amber-400"><Icons.Zap /><span className="text-xs font-bold">มิเตอร์ไฟ</span></div>
                        <p className="text-xs text-slate-500 mb-1.5">เก่า: {room.lastElectricMeter}</p>
                        <input type="number" defaultValue={room.currentElectricMeter}
                          onBlur={e => handleUpdateMeters(room.id, room.currentWaterMeter, parseInt(e.target.value))}
                          className="w-full bg-slate-800 border border-slate-600 rounded-lg px-2 py-2 text-sm text-slate-100 outline-none focus:ring-1 focus:ring-amber-500" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── TENANTS ────────────────────────────────────────────────── */}
          {activeTab === 'tenants' && !selectedRoom && (
            <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
              <div className="p-4 border-b border-slate-700">
                <h2 className="text-base font-bold text-slate-100">รายชื่อผู้เช่า</h2>
              </div>
              <div className="divide-y divide-slate-700">
                {roomData.filter(r => r.status === 'occupied').map(room => (
                  <div key={room.id} onClick={() => { setSelectedRoom(room); setActiveTab('dashboard'); }}
                    className="flex items-center gap-3 p-4 cursor-pointer hover:bg-slate-700/40">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-black flex-shrink-0">
                      {room.tenant.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-slate-100 truncate">{room.tenant}</p>
                      <p className="text-xs text-slate-400">{room.phone}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-sm font-bold text-slate-200 mb-0.5">ห้อง {room.id}</p>
                      {payBadge(room.paymentStatus)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── ROOM DETAIL ────────────────────────────────────────────── */}
          {selectedRoom && (
            <div className="max-w-2xl mx-auto">
              <button onClick={() => setSelectedRoom(null)}
                className="flex items-center gap-2 mb-4 px-3 py-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded-lg transition-colors">
                <Icons.ArrowLeft /><span className="text-sm font-medium">กลับ</span>
              </button>
              <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                {/* header */}
                <div className="p-5 border-b border-slate-700">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h1 className="text-2xl font-black text-slate-100">ห้อง {selectedRoom.id}</h1>
                      <p className="text-xs text-slate-400 mt-0.5">รายละเอียดและสถานะห้องพัก</p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      {payBadge(selectedRoom.paymentStatus)}
                      <button onClick={() => { setEditRoom(selectedRoom); setIsEditRoomModalOpen(true); }}
                        className="p-1.5 bg-slate-700 text-slate-300 hover:text-white rounded-lg border border-slate-600"><Icons.Edit3 /></button>
                      <button onClick={() => handleDeleteRoom(selectedRoom.id)}
                        className="p-1.5 bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white rounded-lg border border-red-500/20"><Icons.Trash2 /></button>
                    </div>
                  </div>
                </div>
                {/* tenant info */}
                <div className="p-5 border-b border-slate-700">
                  <p className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-3">ข้อมูลผู้เช่า</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { icon: <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-black">{selectedRoom.tenant.charAt(0)}</div>, label: 'ชื่อผู้เช่า', value: selectedRoom.tenant },
                      { icon: <div className="w-9 h-9 bg-slate-700 rounded-xl flex items-center justify-center text-blue-400"><Icons.Phone /></div>, label: 'เบอร์โทร', value: selectedRoom.phone },
                      { icon: <div className="w-9 h-9 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400"><Icons.Calendar /></div>, label: 'วันเข้าพัก', value: selectedRoom.moveInDate },
                      { icon: <div className="w-9 h-9 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-400"><Icons.DollarSign /></div>, label: 'ค่าเช่า/เดือน', value: `฿${selectedRoom.price.toLocaleString()}` },
                    ].map(({ icon, label, value }) => (
                      <div key={label} className="flex items-center gap-3 bg-slate-900/50 p-3 rounded-xl border border-slate-700">
                        <div className="flex-shrink-0">{icon}</div>
                        <div className="min-w-0"><p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{label}</p><p className="font-bold text-slate-100 truncate">{value}</p></div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* bills */}
                <div className="p-5">
                  <p className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-3">สรุปค่าใช้จ่าย</p>
                  <div className="space-y-2">
                    {[
                      { icon: <Icons.Home />, label: 'ค่าเช่าห้องพัก', value: selectedRoom.price, c: 'text-slate-300' },
                      { icon: <Icons.Droplet />, label: 'ค่าน้ำประปา', value: selectedRoom.waterBill, c: 'text-blue-400' },
                      { icon: <Icons.Zap />, label: 'ค่าไฟฟ้า', value: selectedRoom.electricBill, c: 'text-amber-400' },
                    ].map(({ icon, label, value, c }) => (
                      <div key={label} className={`flex items-center justify-between p-3 bg-slate-900/60 rounded-xl border border-slate-700 ${c}`}>
                        <div className="flex items-center gap-3">{icon}<span className="text-sm font-bold text-slate-200">{label}</span></div>
                        <span className="font-bold text-slate-100">฿{value.toLocaleString()}</span>
                      </div>
                    ))}
                    {/* total — ตัวเลขไม่ล้น */}
                    <div className="flex items-center justify-between p-4 bg-blue-600/10 rounded-xl border-2 border-blue-500/30">
                      <span className="font-black text-blue-400 text-sm sm:text-base">ยอดรวมทั้งสิ้น</span>
                      <span className="text-lg sm:text-2xl font-black text-blue-400">
                        ฿{(selectedRoom.price + selectedRoom.waterBill + selectedRoom.electricBill).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
                {/* outstanding */}
                {selectedRoom.outstandingBalance > 0 && (
                  <div className="mx-4 sm:mx-5 mb-5 p-4 bg-red-500/10 border-2 border-red-500/30 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center text-white flex-shrink-0"><Icons.AlertCircle /></div>
                      <div><p className="text-red-400 font-black text-xs uppercase tracking-widest">ยอดค้างชำระ</p><p className="text-xl font-black text-red-500">฿{selectedRoom.outstandingBalance.toLocaleString()}</p></div>
                    </div>
                    <button onClick={() => { setPaymentRoom(selectedRoom); setPaymentModalOpen(true); }}
                      className="w-full sm:w-auto px-6 py-2.5 bg-red-500 hover:bg-red-600 text-white font-black rounded-xl text-sm">
                      ชำระทันที
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </main>
      </div>

      {/* ════ BOTTOM NAV (mobile only) ══════════════════════════════════════ */}
      <nav className="fixed bottom-0 inset-x-0 bg-slate-900/95 backdrop-blur border-t border-slate-700 flex lg:hidden z-30 safe-area-pb">
        {navItems.map((item) => (
          <button key={item.id} onClick={() => changeTab(item.id)}
            className={`flex-1 flex flex-col items-center justify-center py-2.5 gap-0.5 transition-colors relative ${activeTab === item.id ? 'text-blue-400' : 'text-slate-500 hover:text-slate-300'}`}>
            {item.icon}
            <span className="text-[10px] font-medium">{item.label}</span>
            {activeTab === item.id && <div className="absolute top-0 inset-x-3 h-0.5 bg-blue-400 rounded-b-full" />}
          </button>
        ))}
      </nav>

      {/* ════ MODALS (Sheet) ════════════════════════════════════════════════ */}

      {/* Contract */}
      <Sheet open={isContractModalOpen} onClose={() => setIsContractModalOpen(false)}
        title={<div><h3 className="text-lg font-black text-slate-100">ทำสัญญาเช่าใหม่</h3><p className="text-blue-400 text-sm font-bold">ห้อง {contractRoom?.id}</p></div>}>
        <div className="space-y-4">
          {[
            { label: 'ชื่อ-นามสกุล ผู้เช่า', ph: 'ระบุชื่อผู้เช่า', f: 'tenant', t: 'text' },
            { label: 'เบอร์โทรศัพท์', ph: '08X-XXX-XXXX', f: 'phone', t: 'text' },
            { label: 'เลขบัตรประชาชน', ph: 'X-XXXX-XXXXX-XX-X', f: 'nationalId', t: 'text' },
            { label: 'วันเริ่มสัญญา', ph: '', f: 'startDate', t: 'date' },
            { label: 'เงินประกัน (บาท)', ph: '', f: 'deposit', t: 'number' },
          ].map(({ label, ph, f, t }) => (
            <div key={f}>
              <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-1.5">{label}</label>
              <input type={t} placeholder={ph}
                value={contractData[f as keyof typeof contractData] as string}
                onChange={e => setContractData({ ...contractData, [f]: t === 'number' ? parseInt(e.target.value) : e.target.value })}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 font-bold outline-none focus:ring-2 focus:ring-blue-500/40 text-sm" />
            </div>
          ))}
          <button onClick={handleCreateContract}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 rounded-2xl mt-2 active:scale-[0.98] transition-all">
            ยืนยันทำสัญญา
          </button>
        </div>
      </Sheet>

      {/* Edit room */}
      <Sheet open={isEditRoomModalOpen} onClose={() => setIsEditRoomModalOpen(false)}
        title={<h3 className="text-lg font-black text-slate-100">แก้ไขห้อง {editRoom?.id}</h3>}>
        {editRoom && (
          <div className="space-y-4">
            <div><label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-1.5">ชื่อห้อง</label>
              <input type="text" value={editRoom.id} onChange={e => setEditRoom({ ...editRoom, id: e.target.value })}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 font-bold outline-none focus:ring-2 focus:ring-blue-500/40" /></div>
            <div><label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-1.5">ค่าเช่า</label>
              <input type="number" value={editRoom.price} onChange={e => setEditRoom({ ...editRoom, price: parseInt(e.target.value) })}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 font-bold outline-none focus:ring-2 focus:ring-blue-500/40" /></div>
            <div><label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-1.5">สถานะ</label>
              <select value={editRoom.status} onChange={e => setEditRoom({ ...editRoom, status: e.target.value as Room['status'] })}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 font-bold outline-none">
                <option value="vacant">ว่าง</option><option value="occupied">มีผู้เช่า</option><option value="maintenance">ซ่อมบำรุง</option>
              </select></div>
            <div className="flex gap-3 pt-1">
              <button onClick={() => handleUpdateRoom(editRoom)}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-black py-3 rounded-xl">บันทึก</button>
              <button onClick={() => { handleDeleteRoom(editRoom.id); setIsEditRoomModalOpen(false); }}
                className="px-4 bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white rounded-xl border border-red-500/20 transition-all"><Icons.Trash2 /></button>
            </div>
          </div>
        )}
      </Sheet>

      {/* Add room */}
      <Sheet open={isAddRoomModalOpen} onClose={() => setIsAddRoomModalOpen(false)}
        title={<h3 className="text-lg font-black text-slate-100">เพิ่มห้องพักใหม่</h3>}>
        <div className="space-y-4">
          <div><label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-1.5">หมายเลขห้อง</label>
            <input type="text" placeholder="เช่น A104, B305" value={newRoomData.id}
              onChange={e => setNewRoomData({ ...newRoomData, id: e.target.value })}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 font-bold outline-none focus:ring-2 focus:ring-blue-500/40" /></div>
          <div><label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-1.5">ค่าเช่า (บาท)</label>
            <input type="number" value={newRoomData.price}
              onChange={e => setNewRoomData({ ...newRoomData, price: parseInt(e.target.value) })}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 font-bold outline-none focus:ring-2 focus:ring-blue-500/40" /></div>
          <div>
            <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-1.5">สถานะเริ่มต้น</label>
            <div className="grid grid-cols-2 gap-3">
              <button onClick={() => setNewRoomData({ ...newRoomData, status: 'vacant' })}
                className={`py-3 rounded-xl border-2 font-bold transition-all ${newRoomData.status === 'vacant' ? 'bg-slate-700 border-blue-500 text-blue-400' : 'bg-slate-900 border-slate-700 text-slate-500'}`}>ว่าง</button>
              <button onClick={() => setNewRoomData({ ...newRoomData, status: 'maintenance' })}
                className={`py-3 rounded-xl border-2 font-bold transition-all ${newRoomData.status === 'maintenance' ? 'bg-slate-700 border-yellow-500 text-yellow-500' : 'bg-slate-900 border-slate-700 text-slate-500'}`}>ซ่อมบำรุง</button>
            </div>
          </div>
          <button onClick={handleAddRoom} disabled={!newRoomData.id}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white font-black py-4 rounded-2xl active:scale-[0.98] transition-all">
            ยืนยันการเพิ่ม
          </button>
        </div>
      </Sheet>

      {/* Payment */}
      <Sheet open={paymentModalOpen} onClose={() => { setPaymentModalOpen(false); setPaymentRoom(null); }}
        title={<div><h3 className="text-lg font-black text-slate-100">ชำระเงิน</h3>{paymentRoom && <p className="text-blue-400 text-sm font-bold">ห้อง {paymentRoom.id}</p>}</div>}>
        {paymentRoom && (
          <div className="space-y-5">
            {/* summary */}
            <div className="bg-slate-900/50 rounded-2xl border border-slate-700 p-4 space-y-2.5">
              <div className="flex justify-between text-sm font-bold text-slate-400"><span>ค่าเช่าห้อง</span><span className="text-slate-100">฿{paymentRoom.price.toLocaleString()}</span></div>
              <div className="flex justify-between text-sm font-bold text-slate-400"><span>ค่าน้ำ + ค่าไฟ</span><span className="text-slate-100">฿{(paymentRoom.waterBill + paymentRoom.electricBill).toLocaleString()}</span></div>
              <div className="flex justify-between text-base font-black text-emerald-400 pt-2 border-t border-slate-800"><span>รวมทั้งสิ้น</span><span>฿{(paymentRoom.price + paymentRoom.waterBill + paymentRoom.electricBill).toLocaleString()}</span></div>
            </div>
            {/* QR */}
            <div className="flex justify-center">
              <div className="w-36 h-36 bg-white rounded-2xl p-3 flex items-center justify-center">
                <img src="/QR.jpg" alt="QR Code" className="w-full h-full object-contain" />
              </div>
            </div>
            {/* slip upload */}
            <div>
              <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-1.5">อัปโหลดสลิป</label>
              <input type="file" id="slip-upload" accept="image/*" className="hidden"
                onChange={e => setPaymentSlip(e.target.files?.[0] || null)} />
              <label htmlFor="slip-upload"
                className="flex items-center justify-center gap-2 w-full bg-slate-900 border border-dashed border-slate-600 hover:border-blue-500 rounded-xl p-4 cursor-pointer transition-all">
                <Icons.Upload /><span className="text-sm font-bold text-slate-400">{paymentSlip ? paymentSlip.name : 'เลือกไฟล์สลิป'}</span>
              </label>
            </div>
            <div>
              <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-1.5">วันที่โอนเงิน</label>
              <input type="date" value={paymentDate} onChange={e => setPaymentDate(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 font-bold outline-none" />
            </div>
            <div className="flex gap-3 pb-2">
              <button onClick={handleConfirmPayment}
                className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-black py-4 rounded-2xl active:scale-[0.98] transition-all">
                ยืนยันการชำระ
              </button>
              <button onClick={() => { setPaymentModalOpen(false); setPaymentRoom(null); }}
                className="px-5 py-4 border border-slate-700 rounded-2xl text-slate-400 hover:bg-slate-700 font-black transition-all">
                ยกเลิก
              </button>
            </div>
          </div>
        )}
      </Sheet>
    </div>
  );
}