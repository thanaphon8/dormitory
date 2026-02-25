'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Icons = {
  Home: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
      <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>
  ),
  Users: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  ),
  Bed: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M2 4v16"></path>
      <path d="M2 8h18a2 2 0 0 1 2 2v10"></path>
      <path d="M2 17h20"></path>
      <path d="M6 8V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4"></path>
    </svg>
  ),
  DollarSign: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="12" y1="1" x2="12" y2="23"></line>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
    </svg>
  ),
  Calendar: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
  ),
  Settings: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="3"></circle>
      <path d="M12 1v6m0 6v6m7.071-13.071l-4.243 4.243m-5.656 5.656l-4.243 4.243m13.071 0l-4.243-4.243m-5.656-5.656l-4.243-4.243"></path>
    </svg>
  ),
  Bell: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
    </svg>
  ),
  Search: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.35-4.35"></path>
    </svg>
  ),
  Plus: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  ),
  CheckCircle: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  ),
  Clock: () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  ),
  TrendingUp: () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
      <polyline points="17 6 23 6 23 12"></polyline>
    </svg>
  ),
  Menu: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="3" y1="12" x2="21" y2="12"></line>
      <line x1="3" y1="6" x2="21" y2="6"></line>
      <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
  ),
  X: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  ),
  ArrowLeft: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="19" y1="12" x2="5" y2="12"></line>
      <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
  ),
  Droplet: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
    </svg>
  ),
  Zap: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
    </svg>
  ),
  AlertCircle: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="8" x2="12" y2="12"></line>
      <line x1="12" y1="16" x2="12.01" y2="16"></line>
    </svg>
  ),
  Phone: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  ),
  Trash2: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6"></polyline>
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
      <line x1="10" y1="11" x2="10" y2="17"></line>
      <line x1="14" y1="11" x2="14" y2="17"></line>
    </svg>
  ),
  MoreVertical: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="1"></circle>
      <circle cx="12" cy="5" r="1"></circle>
      <circle cx="12" cy="19" r="1"></circle>
    </svg>
  ),
  Edit3: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 20h9"></path>
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
    </svg>
  ),
  FileText: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
  ),
  Upload: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="17 8 12 3 7 8"></polyline>
      <line x1="12" y1="3" x2="12" y2="15"></line>
    </svg>
  ),
  LogOut: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
      <polyline points="16 17 21 12 16 7"></polyline>
      <line x1="21" y1="12" x2="9" y2="12"></line>
    </svg>
  ),
  User: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  ),
  Shield: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
  ),
  ChevronRight: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  ),
};

interface PaymentHistory {
  date: string;
  amount: number;
  type: string;
  slip?: string;
}

interface Room {
  id: string;
  status: 'occupied' | 'vacant' | 'maintenance';
  tenant: string;
  price: number;
  dueDate: string;
  waterBill: number;
  electricBill: number;
  outstandingBalance: number;
  paymentStatus: 'paid' | 'pending' | 'overdue';
  phone: string;
  moveInDate: string;
  nationalId?: string;
  deposit?: number;
  lastWaterMeter: number;
  lastElectricMeter: number;
  currentWaterMeter: number;
  currentElectricMeter: number;
  history: PaymentHistory[];
}

// Admin Dashboard Page Component

export default function DormitoryManagement() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [showOutstandingOnly, setShowOutstandingOnly] = useState(false);
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const [paymentRoom, setPaymentRoom] = useState<Room | null>(null);

  // Add Room State
  const [isAddRoomModalOpen, setIsAddRoomModalOpen] = useState(false);
  const [newRoomData, setNewRoomData] = useState<{ id: string, price: number, status: 'vacant' | 'maintenance' }>({
    id: '',
    price: 3000,
    status: 'vacant'
  });

  const [roomData, setRoomData] = useState<Room[]>([
    {
      id: 'A101', status: 'occupied', tenant: 'สมชาย ใจดี', price: 3000, dueDate: '2024-12-01',
      waterBill: 150, electricBill: 450, outstandingBalance: 0, paymentStatus: 'paid',
      phone: '081-234-5678', moveInDate: '2024-01-15', nationalId: '1-2345-67890-12-3',
      deposit: 5000, lastWaterMeter: 120, lastElectricMeter: 850,
      currentWaterMeter: 128, currentElectricMeter: 910, history: []
    },
    {
      id: 'A102', status: 'vacant', tenant: '-', price: 3000, dueDate: '-',
      waterBill: 0, electricBill: 0, outstandingBalance: 0, paymentStatus: 'paid',
      phone: '-', moveInDate: '-', lastWaterMeter: 100, lastElectricMeter: 800,
      currentWaterMeter: 100, currentElectricMeter: 800, history: []
    },
    {
      id: 'A103', status: 'occupied', tenant: 'สมหญิง สวยงาม', price: 3000, dueDate: '2024-11-28',
      waterBill: 200, electricBill: 380, outstandingBalance: 3580, paymentStatus: 'overdue',
      phone: '082-345-6789', moveInDate: '2024-03-10', nationalId: '1-3345-67890-12-4',
      deposit: 5000, lastWaterMeter: 210, lastElectricMeter: 750,
      currentWaterMeter: 220, currentElectricMeter: 795, history: []
    },
    {
      id: 'B201', status: 'occupied', tenant: 'วิชัย มั่นคง', price: 3500, dueDate: '2024-12-05',
      waterBill: 180, electricBill: 520, outstandingBalance: 0, paymentStatus: 'paid',
      phone: '083-456-7890', moveInDate: '2024-02-20', nationalId: '1-4345-67890-12-5',
      deposit: 6000, lastWaterMeter: 150, lastElectricMeter: 900,
      currentWaterMeter: 160, currentElectricMeter: 975, history: []
    },
    {
      id: 'B202', status: 'maintenance', tenant: '-', price: 3500, dueDate: '-',
      waterBill: 0, electricBill: 0, outstandingBalance: 0, paymentStatus: 'paid',
      phone: '-', moveInDate: '-', lastWaterMeter: 140, lastElectricMeter: 880,
      currentWaterMeter: 140, currentElectricMeter: 880, history: []
    },
  ]);

  // Modals States
  const [isContractModalOpen, setIsContractModalOpen] = useState(false);
  const [contractRoom, setContractRoom] = useState<Room | null>(null);
  const [contractData, setContractData] = useState({
    tenant: '',
    phone: '',
    nationalId: '',
    startDate: '',
    deposit: 3000
  });

  const [isEditRoomModalOpen, setIsEditRoomModalOpen] = useState(false);
  const [editRoom, setEditRoom] = useState<Room | null>(null);

  const [paymentSlip, setPaymentSlip] = useState<File | null>(null);
  const [paymentDate, setPaymentDate] = useState(new Date().toISOString().split('T')[0]);

  // Rates
  const WATER_RATE = 18;
  const ELECTRIC_RATE = 7;


  const handleAddRoom = () => {
    if (!newRoomData.id) return;

    const newRoom: Room = {
      id: newRoomData.id,
      status: newRoomData.status,
      tenant: '-',
      price: newRoomData.price,
      dueDate: '-',
      waterBill: 0,
      electricBill: 0,
      outstandingBalance: 0,
      paymentStatus: 'paid',
      phone: '-',
      moveInDate: '-',
      lastWaterMeter: 0,
      lastElectricMeter: 0,
      currentWaterMeter: 0,
      currentElectricMeter: 0,
      history: []
    };

    setRoomData([...roomData, newRoom]);
    setIsAddRoomModalOpen(false);
    setNewRoomData({ id: '', price: 3000, status: 'vacant' });
  };

  const handleCreateContract = () => {
    if (!contractRoom || !contractData.tenant) return;

    setRoomData(roomData.map(r => r.id === contractRoom.id ? {
      ...r,
      status: 'occupied',
      tenant: contractData.tenant,
      phone: contractData.phone,
      nationalId: contractData.nationalId,
      moveInDate: contractData.startDate,
      deposit: contractData.deposit,
      paymentStatus: 'paid'
    } : r));

    setIsContractModalOpen(false);
    setContractRoom(null);
    setContractData({ tenant: '', phone: '', nationalId: '', startDate: '', deposit: 3000 });
  };

  const handleUpdateMeters = (roomId: string, water: number, electric: number) => {
    setRoomData(roomData.map(r => {
      if (r.id === roomId) {
        const waterUnits = water - r.lastWaterMeter;
        const electricUnits = electric - r.lastElectricMeter;
        const waterBill = waterUnits * WATER_RATE;
        const electricBill = electricUnits * ELECTRIC_RATE;
        return {
          ...r,
          currentWaterMeter: water,
          currentElectricMeter: electric,
          waterBill,
          electricBill,
          outstandingBalance: r.price + waterBill + electricBill,
          paymentStatus: 'pending'
        };
      }
      return r;
    }));
  };

  const handleConfirmPayment = () => {
    if (!paymentRoom) return;

    const totalPaid = paymentRoom.price + paymentRoom.waterBill + paymentRoom.electricBill + paymentRoom.outstandingBalance;
    const historyItem: PaymentHistory = {
      date: paymentDate,
      amount: totalPaid,
      type: 'ค่าเช่าประจำเดือน',
      slip: paymentSlip ? URL.createObjectURL(paymentSlip) : undefined
    };

    setRoomData(roomData.map(r => r.id === paymentRoom.id ? {
      ...r,
      outstandingBalance: 0,
      paymentStatus: 'paid',
      lastWaterMeter: r.currentWaterMeter,
      lastElectricMeter: r.currentElectricMeter,
      history: [historyItem, ...r.history]
    } : r));

    closePaymentModal();
    setPaymentSlip(null);
  };

  const handleUpdateRoom = (updatedRoom: Room) => {
    setRoomData(roomData.map(r => r.id === updatedRoom.id ? updatedRoom : r));
    setIsEditRoomModalOpen(false);
    setEditRoom(null);
  };

  const handleDeleteRoom = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (window.confirm(`คุณแน่ใจหรือไม่ว่าต้องการลบห้อง ${id}?`)) {
      setRoomData(roomData.filter(r => r.id !== id));
      if (selectedRoom?.id === id) setSelectedRoom(null);
    }
  };

  // Dynamic Stats
  const totalIncome = roomData.reduce((acc, r) => {
    const historicalIncome = r.history.reduce((hAcc, h) => hAcc + h.amount, 0);
    return acc + historicalIncome;
  }, 0);

  const stats = [
    { label: 'ห้องทั้งหมด', value: roomData.length.toString(), icon: 'Bed', color: 'bg-blue-600', change: '+0%' },
    { label: 'ห้องว่าง', value: roomData.filter(r => r.status === 'vacant').length.toString(), icon: 'CheckCircle', color: 'bg-emerald-600', change: '' },
    { label: 'ผู้เช่า', value: roomData.filter(r => r.status === 'occupied').length.toString(), icon: 'Users', color: 'bg-indigo-600', change: '' },
    { label: 'รายได้ร่วม', value: `฿${totalIncome.toLocaleString()}`, icon: 'DollarSign', color: 'bg-amber-600', change: '' },
  ];

  const navItems = [
    { icon: 'Home', label: 'แดชบอร์ด', id: 'dashboard' },
    { icon: 'Bed', label: 'จัดการห้องพัก', id: 'rooms' },
    { icon: 'Zap', label: 'จดมิเตอร์', id: 'meters' },
    { icon: 'Users', label: 'ผู้เช่า', id: 'tenants' },
  ];

  const getStatusBadge = (status: string) => {
    const styles: Record<string, string> = {
      occupied: 'bg-green-500/10 text-green-400 border-green-500/20',
      vacant: 'bg-slate-500/10 text-slate-400 border-slate-500/20',
      maintenance: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
    };
    const labels: Record<string, string> = {
      occupied: 'มีผู้เช่า',
      vacant: 'ว่าง',
      maintenance: 'ซ่อมบำรุง',
    };
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${styles[status]}`}>
        {labels[status]}
      </span>
    );
  };

  const getPaymentStatusBadge = (status: string) => {
    const styles: Record<string, string> = {
      paid: 'bg-green-500/10 text-green-400 border-green-500/20',
      pending: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
      overdue: 'bg-red-500/10 text-red-400 border-red-500/20',
    };
    const labels: Record<string, string> = {
      paid: 'ชำระแล้ว',
      pending: 'รอชำระ',
      overdue: 'เกินกำหนด',
    };
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${styles[status]}`}>
        {labels[status]}
      </span>
    );
  };

  const IconComponent = ({ name }: { name: string }) => {
    const Component = Icons[name as keyof typeof Icons];
    return Component ? <Component /> : null;
  };

  const handleRoomClick = (room: Room) => {
    if (room.status === 'vacant') {
      setContractRoom(room);
      setIsContractModalOpen(true);
    } else {
      setSelectedRoom(room);
    }
  };

  const handleCloseDetail = () => {
    setSelectedRoom(null);
  };

  const openPaymentModal = (room: Room) => {
    setPaymentRoom(room);
    setPaymentModalOpen(true);
  };
  const closePaymentModal = () => {
    setPaymentRoom(null);
    setPaymentModalOpen(false);
  };

  const outstandingRooms = roomData.filter(r => r.outstandingBalance > 0);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200">
      <header className="bg-slate-900 border-b border-slate-700 sticky top-0 z-50">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-slate-800 rounded-lg lg:hidden"
            >
              {sidebarOpen ? <Icons.X /> : <Icons.Menu />}
            </button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-white">
                <Icons.Home />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-100">ระบบจัดการหอพัก</h1>
                <p className="text-xs text-slate-300">Dormitory Management System</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <Icons.Search />
              </div>
              <input
                type="text"
                placeholder="ค้นหาห้อง, ผู้เช่า..."
                className="pl-10 pr-4 py-2 border border-slate-700 rounded-lg bg-slate-800 text-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-500 w-64"
              />
            </div>
            <button className="relative p-2 hover:bg-slate-800 rounded-lg">
              <Icons.Bell />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            {/* Profile button — navigates to admin dashboard */}
            <button
              onClick={() => router.push('/admin/dashboard')}
              className="w-10 h-10 bg-slate-700 hover:bg-slate-600 rounded-full flex items-center justify-center text-white font-semibold transition-colors ring-2 ring-transparent hover:ring-blue-500/50"
              title="โปรไฟล์ผู้ดูแลระบบ"
            >
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        <aside className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-40 w-64 bg-slate-900 border-r border-slate-700 transition-transform duration-300 pt-16 lg:pt-0`}>
          <nav className="p-4 space-y-2 h-full">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { setActiveTab(item.id); setSelectedRoom(null); }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${activeTab === item.id
                  ? 'bg-slate-700 text-slate-100 font-medium'
                  : 'text-slate-300 hover:bg-slate-800'
                  }`}
              >
                <IconComponent name={item.icon} />
                {item.label}
              </button>
            ))}
          </nav>
        </aside>

        <main className="flex-1 p-6 lg:p-8">
          {activeTab === 'dashboard' && !selectedRoom ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, idx) => (
                  <div key={idx} className="bg-slate-800 rounded-xl border border-slate-700 p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center text-white`}>
                        <IconComponent name={stat.icon} />
                      </div>
                      {stat.change && (
                        <span className={`text-xs font-medium ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                          {stat.change}
                        </span>
                      )}
                    </div>
                    <p className="text-slate-300 text-sm mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold text-slate-100">
                      {stat.label.includes('รายได้') ? '฿' : ''}{stat.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {outstandingRooms.length ? outstandingRooms.map(r => (
                  <div key={r.id} className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <p className="text-xs text-slate-300">ห้อง</p>
                        <p className="text-lg font-bold text-slate-100">{r.id}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-slate-300">ค้างชำระ</p>
                        <p className="text-lg font-bold text-red-400">฿{r.outstandingBalance.toLocaleString()}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => openPaymentModal(r)}
                        className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-md text-sm font-bold"
                      >
                        ชำระเงิน
                      </button>
                      <button
                        onClick={() => { setSelectedRoom(r); setActiveTab('rooms'); }}
                        className="px-3 py-2 border border-slate-700 rounded-md text-sm text-slate-200 hover:bg-slate-700"
                      >
                        ดูรายละเอียด
                      </button>
                    </div>
                  </div>
                )) : (
                  <div className="col-span-full text-slate-400 text-sm bg-slate-800/50 p-4 rounded-lg border border-slate-800 border-dashed text-center">
                    ไม่มีรายการค้างชำระในขณะนี้
                  </div>
                )}
              </div>

              {/* Visual Room Grid Section */}
              <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-slate-100">ผังห้องพัก (Visual Map)</h2>
                    <p className="text-sm text-slate-400 mt-1">แสดงสถานะห้องพักแบบแยกประเภท</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-slate-300">ปกติ</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span className="text-xs text-slate-300">ค้างชำระ</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-slate-600 rounded-full"></div>
                      <span className="text-xs text-slate-300">ว่าง</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-4">
                  {roomData.map((room) => (
                    <div
                      key={room.id}
                      onClick={() => handleRoomClick(room)}
                      className={`aspect-square rounded-xl border-2 flex flex-col items-center justify-center cursor-pointer transition-all hover:scale-105 active:scale-95 relative group ${room.status === 'occupied'
                        ? room.outstandingBalance > 0 ? 'bg-red-500/20 border-red-500/50' : 'bg-green-500/20 border-green-500/50'
                        : room.status === 'maintenance' ? 'bg-yellow-500/20 border-yellow-500/50' : 'bg-slate-700/50 border-slate-600'
                        }`}
                    >
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setEditRoom(room);
                          setIsEditRoomModalOpen(true);
                        }}
                        className="absolute top-2 left-2 w-8 h-8 bg-slate-800/80 text-slate-300 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 hover:text-blue-400 transition-all backdrop-blur-sm border border-slate-700"
                      >
                        <Icons.Settings />
                      </button>

                      {room.status === 'vacant' ? (
                        <div className="flex flex-col items-center">
                          <span className="text-xl font-black text-slate-100">{room.id}</span>
                          <div className="mt-1 px-2 py-0.5 bg-slate-600 rounded text-[10px] font-black text-white uppercase tracking-tighter">
                            ว่าง / ทำสัญญา
                          </div>
                        </div>
                      ) : (
                        <>
                          <span className="text-xl font-black text-slate-100">{room.id}</span>
                          <span className={`text-[10px] font-bold uppercase mt-1 ${room.status === 'occupied'
                            ? room.outstandingBalance > 0 ? 'text-red-400' : 'text-green-400'
                            : 'text-slate-400'
                            }`}>
                            {room.status === 'occupied' ? (room.outstandingBalance > 0 ? 'ค้างชำระ' : 'ปกติ') : 'ซ่อม'}
                          </span>
                        </>
                      )}
                    </div>
                  ))}
                  <button
                    onClick={() => setIsAddRoomModalOpen(true)}
                    className="aspect-square rounded-xl border-2 border-dashed border-slate-700 flex flex-col items-center justify-center text-slate-500 hover:border-slate-500 hover:text-slate-300 transition-colors bg-slate-800/30"
                  >
                    <Icons.Plus />
                    <span className="text-[10px] mt-1 font-bold">เพิ่มห้องพัก</span>
                  </button>
                </div>
              </div>

              <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
                <div className="p-4 sm:p-6 border-b border-slate-700 flex items-center justify-between">
                  <div>
                    <h2 className="text-base sm:text-lg font-bold text-slate-100">
                      {showOutstandingOnly ? 'ห้องที่ค้างชำระ' : 'รายการห้องพัก'}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1">
                      {showOutstandingOnly
                        ? `แสดงห้องที่มียอดค้างชำระ ${roomData.filter(r => r.outstandingBalance > 0).length} ห้อง`
                        : 'ข้อมูลและสถานะการชำระเงิน'
                      }
                    </p>
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={() => setShowOutstandingOnly(!showOutstandingOnly)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${showOutstandingOnly ? 'bg-red-600 text-white' : 'bg-slate-700 text-slate-100 hover:bg-slate-600'
                        }`}
                    >
                      {showOutstandingOnly ? 'แสดงทั้งหมด' : 'ดูค้างชำระ'}
                    </button>
                  </div>
                </div>

                <div className="hidden md:block overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-slate-900/50 border-b border-slate-700">
                      <tr>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">ห้อง</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">สถานะ</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">ผู้เช่า</th>
                        <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">ค่าเช่า</th>
                        {showOutstandingOnly && (
                          <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">ค้างชำระ</th>
                        )}
                        <th className="px-6 py-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider">การชำระ</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-700">
                      {(showOutstandingOnly ? roomData.filter(r => r.outstandingBalance > 0) : roomData).map((room) => (
                        <tr
                          key={room.id}
                          onClick={() => handleRoomClick(room)}
                          className={`group transition-colors ${room.status !== 'vacant' ? 'hover:bg-slate-700/50 cursor-pointer' : 'opacity-60'} ${room.outstandingBalance > 0 && showOutstandingOnly ? 'bg-red-900/10' : ''}`}
                        >
                          <td className="px-6 py-4">
                            <span className="font-bold text-slate-100 group-hover:text-blue-400 transition-colors">{room.id}</span>
                          </td>
                          <td className="px-6 py-4">
                            {getStatusBadge(room.status)}
                          </td>
                          <td className="px-6 py-4 text-sm text-slate-300">{room.tenant}</td>
                          <td className="px-6 py-4 text-sm font-medium text-slate-100">฿{room.price.toLocaleString()}</td>
                          {showOutstandingOnly && (
                            <td className="px-6 py-4">
                              <span className="text-sm font-bold text-red-400">฿{room.outstandingBalance.toLocaleString()}</span>
                            </td>
                          )}
                          <td className="px-6 py-4">
                            {room.status === 'occupied' && getPaymentStatusBadge(room.paymentStatus)}
                            {room.status !== 'occupied' && <span className="text-xs text-slate-500">-</span>}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="md:hidden divide-y divide-slate-700">
                  {(showOutstandingOnly ? roomData.filter(r => r.outstandingBalance > 0) : roomData).map((room) => (
                    <div
                      key={room.id}
                      onClick={() => handleRoomClick(room)}
                      className={`p-4 transition-colors ${room.status !== 'vacant' ? 'cursor-pointer' : 'opacity-60'} ${room.outstandingBalance > 0 && showOutstandingOnly ? 'bg-red-900/20' : ''}`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-lg font-bold text-slate-100 mb-1">ห้อง {room.id}</h3>
                          <p className="text-sm text-slate-400">{room.tenant}</p>
                        </div>
                        {getStatusBadge(room.status)}
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-slate-500 mb-1">ค่าเช่า</p>
                          <p className="text-base font-semibold text-slate-100">฿{room.price.toLocaleString()}</p>
                          {showOutstandingOnly && room.outstandingBalance > 0 && (
                            <>
                              <p className="text-xs text-red-400 mt-2 font-bold">ค้างชำระ</p>
                              <p className="text-base font-bold text-red-400">฿{room.outstandingBalance.toLocaleString()}</p>
                            </>
                          )}
                        </div>
                        {room.status === 'occupied' && (
                          <div className="text-right">
                            {getPaymentStatusBadge(room.paymentStatus)}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : null}

          {/* Room Details View */}
          {activeTab === 'meters' && (
            <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden">
              <div className="p-6 border-b border-slate-700">
                <h2 className="text-2xl font-black text-slate-100">จดมิเตอร์ประจำเดือน</h2>
                <p className="text-sm text-slate-400 mt-1">บันทึกเลขมิเตอร์เพื่อคำนวณค่าน้ำ-ไฟ</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-900/50">
                    <tr className="text-xs uppercase font-black text-slate-500">
                      <th className="px-6 py-4 text-left">ห้องพัก</th>
                      <th className="px-6 py-4 text-left">เลขมิเตอร์น้ำ (เก่า/ใหม่)</th>
                      <th className="px-6 py-4 text-left">เลขมิเตอร์ไฟ (เก่า/ใหม่)</th>
                      <th className="px-6 py-4 text-right">ยอดรวมที่ต้องชำระ</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700">
                    {roomData.filter(r => r.status === 'occupied').map(room => (
                      <tr key={room.id} className="hover:bg-slate-700/30 transition-colors">
                        <td className="px-6 py-4 font-bold text-slate-100">{room.id}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-slate-500 w-8">{room.lastWaterMeter}</span>
                            <input
                              type="number"
                              placeholder="เลขใหม่"
                              defaultValue={room.currentWaterMeter}
                              onBlur={(e) => handleUpdateMeters(room.id, parseInt(e.target.value), room.currentElectricMeter)}
                              className="bg-slate-900 border border-slate-600 rounded px-2 py-1 w-20 text-sm focus:ring-1 focus:ring-blue-500 outline-none"
                            />
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-slate-500 w-8">{room.lastElectricMeter}</span>
                            <input
                              type="number"
                              placeholder="เลขใหม่"
                              defaultValue={room.currentElectricMeter}
                              onBlur={(e) => handleUpdateMeters(room.id, room.currentWaterMeter, parseInt(e.target.value))}
                              className="bg-slate-900 border border-slate-600 rounded px-2 py-1 w-20 text-sm focus:ring-1 focus:ring-blue-500 outline-none"
                            />
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <p className="font-black text-slate-100">฿{(room.price + room.waterBill + room.electricBill).toLocaleString()}</p>
                          <p className="text-[10px] text-slate-500">รวมค่าเช่า ฿{room.price.toLocaleString()}</p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {selectedRoom && (
            <div className="max-w-4xl mx-auto">
              <button
                onClick={handleCloseDetail}
                className="flex items-center gap-2 mb-4 sm:mb-6 px-3 sm:px-4 py-2 text-sm sm:text-base text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded-lg transition-colors group"
              >
                <div className="group-hover:-translate-x-1 transition-transform">
                  <Icons.ArrowLeft />
                </div>
                <span>กลับไปแดชบอร์ด</span>
              </button>

              <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden shadow-2xl">
                <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-6 sm:p-8 text-white border-b border-slate-700">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <h1 className="text-3xl sm:text-4xl font-black mb-2 tracking-tight">ห้อง {selectedRoom.id}</h1>
                      <p className="text-sm sm:text-base text-slate-400 font-medium">จัดการรายละเอียดและสถานะห้องพัก</p>
                    </div>
                    <div className="self-start sm:self-auto flex items-center gap-3">
                      {getPaymentStatusBadge(selectedRoom.paymentStatus)}
                      <button
                        onClick={() => {
                          setEditRoom(selectedRoom);
                          setIsEditRoomModalOpen(true);
                        }}
                        className="p-2 bg-slate-700 text-slate-300 hover:text-white rounded-lg transition-colors border border-slate-600"
                        title="แก้ไขข้อมูล"
                      >
                        <Icons.Edit3 />
                      </button>
                      <button
                        onClick={() => handleDeleteRoom(selectedRoom.id)}
                        className="p-2 bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white rounded-lg transition-colors border border-red-500/20"
                        title="ลบห้อง"
                      >
                        <Icons.Trash2 />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 border-b border-slate-700">
                  <h2 className="text-lg font-bold text-slate-100 mb-6 flex items-center gap-2 text-blue-400">
                    <Icons.Users />
                    ข้อมูลผู้เช่า
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex items-center gap-4 bg-slate-900/50 p-4 rounded-xl border border-slate-700">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-black text-xl flex-shrink-0 shadow-lg shadow-blue-500/20">
                        {selectedRoom.tenant.charAt(0)}
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">ชื่อผู้เช่า</p>
                        <p className="font-bold text-lg text-slate-100 truncate">{selectedRoom.tenant}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 bg-slate-900/50 p-4 rounded-xl border border-slate-700">
                      <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-blue-400 flex-shrink-0 border border-slate-700">
                        <Icons.Phone />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">เบอร์โทรศัพท์</p>
                        <p className="font-bold text-lg text-slate-100">{selectedRoom.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 bg-slate-900/50 p-4 rounded-xl border border-slate-700">
                      <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 flex-shrink-0 border border-emerald-500/20">
                        <Icons.Calendar />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">วันที่เข้าพัก</p>
                        <p className="font-bold text-lg text-slate-100">{selectedRoom.moveInDate}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 bg-slate-900/50 p-4 rounded-xl border border-slate-700">
                      <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-400 flex-shrink-0 border border-amber-500/20">
                        <Icons.DollarSign />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">ค่าเช่าต่อเดือน</p>
                        <p className="font-bold text-lg text-slate-100">฿{selectedRoom.price.toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <h2 className="text-lg font-bold text-slate-100 mb-6 flex items-center gap-2 text-amber-400">
                    <Icons.DollarSign />
                    สรุปค่าใช้จ่าย
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-slate-900/80 rounded-xl border border-slate-700">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-300">
                          <Icons.Home />
                        </div>
                        <p className="font-bold text-slate-200">ค่าเช่าห้องพัก</p>
                      </div>
                      <p className="text-lg font-bold text-slate-100">฿{selectedRoom.price.toLocaleString()}</p>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-slate-900/80 rounded-xl border border-slate-700">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400">
                          <Icons.Droplet />
                        </div>
                        <p className="font-bold text-slate-200">ค่าน้ำประปา</p>
                      </div>
                      <p className="text-lg font-bold text-slate-100">฿{selectedRoom.waterBill.toLocaleString()}</p>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-slate-900/80 rounded-xl border border-slate-700">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center text-amber-400">
                          <Icons.Zap />
                        </div>
                        <p className="font-bold text-slate-200">ค่าไฟฟ้า</p>
                      </div>
                      <p className="text-lg font-bold text-slate-100">฿{selectedRoom.electricBill.toLocaleString()}</p>
                    </div>
                    <div className="flex items-center justify-between p-6 bg-blue-600/10 rounded-xl border-2 border-blue-500/30">
                      <p className="text-xl font-black text-blue-400">ยอดรวมทั้งสิ้น</p>
                      <p className="text-3xl font-black text-blue-400">
                        ฿{(selectedRoom.price + selectedRoom.waterBill + selectedRoom.electricBill).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>

                {selectedRoom.outstandingBalance > 0 && (
                  <div className="mx-6 sm:mx-8 mb-8 p-6 bg-red-500/10 border-2 border-red-500/30 rounded-2xl flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-red-500/30">
                        <Icons.AlertCircle />
                      </div>
                      <div>
                        <p className="text-red-400 font-black uppercase text-xs tracking-widest mb-1">ยอดค้างชำระ</p>
                        <p className="text-2xl font-black text-red-500">฿{selectedRoom.outstandingBalance.toLocaleString()}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => openPaymentModal(selectedRoom)}
                      className="px-8 py-3 bg-red-500 hover:bg-red-600 text-white font-black rounded-xl transition-all shadow-lg shadow-red-500/20 active:scale-95"
                    >
                      ชำระทันที
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* New Tenant / Contract Modal */}
          {isContractModalOpen && contractRoom && (
            <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
              <div className="w-full max-w-lg bg-slate-800 rounded-3xl border border-slate-700 p-8 shadow-2xl font-['Inter']">
                <style jsx>{`
                  input[type="date"]::-webkit-calendar-picker-indicator {
                      filter: invert(1);
                  }
                `}</style>
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="text-2xl font-black text-slate-100">ทำสัญญาเช่าใหม่</h3>
                    <p className="text-blue-400 font-bold">ห้อง {contractRoom.id}</p>
                  </div>
                  <button onClick={() => setIsContractModalOpen(false)} className="text-slate-500 hover:text-slate-300">
                    <Icons.X />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">ชื่อ-นามสกุล ผู้เช่า</label>
                    <input
                      type="text"
                      placeholder="ระบุชื่อผู้เช่า"
                      value={contractData.tenant}
                      onChange={(e) => setContractData({ ...contractData, tenant: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 font-bold outline-none focus:ring-2 focus:ring-blue-500/50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">เบอร์โทรศัพท์</label>
                    <input
                      type="text"
                      placeholder="08X-XXX-XXXX"
                      value={contractData.phone}
                      onChange={(e) => setContractData({ ...contractData, phone: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 font-bold outline-none focus:ring-2 focus:ring-blue-500/50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">เลขบัตรประชาชน</label>
                    <input
                      type="text"
                      placeholder="X-XXXX-XXXXX-XX-X"
                      value={contractData.nationalId}
                      onChange={(e) => setContractData({ ...contractData, nationalId: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 font-bold outline-none focus:ring-2 focus:ring-blue-500/50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">วันเริ่มสัญญา</label>
                    <input
                      type="date"
                      value={contractData.startDate}
                      onChange={(e) => setContractData({ ...contractData, startDate: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 font-bold outline-none focus:ring-2 focus:ring-blue-500/50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">เงินประกัน (Deposit)</label>
                    <input
                      type="number"
                      value={contractData.deposit}
                      onChange={(e) => setContractData({ ...contractData, deposit: parseInt(e.target.value) })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 font-bold outline-none focus:ring-2 focus:ring-blue-500/50"
                    />
                  </div>
                </div>

                <button
                  onClick={handleCreateContract}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 rounded-2xl mt-8 shadow-xl shadow-blue-600/20 active:scale-[0.98] transition-all"
                >
                  ยืนยันทำสัญญา
                </button>
              </div>
            </div>
          )}

          {/* Edit Room Modal */}
          {isEditRoomModalOpen && editRoom && (
            <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
              <div className="w-full max-w-md bg-slate-800 rounded-3xl border border-slate-700 p-8 shadow-2xl">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-black text-slate-100">แก้ไขข้อมูลห้อง {editRoom.id}</h3>
                  <button onClick={() => setIsEditRoomModalOpen(false)} className="text-slate-500 hover:text-slate-300">
                    <Icons.X />
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">ชื่อห้อง / หมายเลข</label>
                    <input
                      type="text"
                      value={editRoom.id}
                      onChange={(e) => setEditRoom({ ...editRoom, id: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 font-bold"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">ราคาค่าเช่า</label>
                    <input
                      type="number"
                      value={editRoom.price}
                      onChange={(e) => setEditRoom({ ...editRoom, price: parseInt(e.target.value) })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 font-bold"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">สถานะ</label>
                    <select
                      value={editRoom.status}
                      onChange={(e) => setEditRoom({ ...editRoom, status: e.target.value as 'vacant' | 'occupied' | 'maintenance' })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 font-bold"
                    >
                      <option value="vacant">ว่าง</option>
                      <option value="occupied">มีผู้เช่า</option>
                      <option value="maintenance">ซ่อมบำรุง</option>
                    </select>
                  </div>

                  <div className="pt-4 border-t border-slate-700 mt-4 flex gap-3">
                    <button
                      onClick={() => handleUpdateRoom(editRoom)}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-black py-3 rounded-xl transition-all"
                    >
                      บันทึกการแก้ไข
                    </button>
                    <button
                      onClick={() => {
                        handleDeleteRoom(editRoom.id);
                        setIsEditRoomModalOpen(false);
                      }}
                      className="px-4 bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white rounded-xl transition-all border border-red-500/20"
                    >
                      <Icons.Trash2 />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Add Room Modal */}
          {isAddRoomModalOpen && (
            <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
              <div className="w-full max-w-md bg-slate-800 rounded-3xl border border-slate-700 p-8 shadow-2xl">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-black text-slate-100 tracking-tight">เพิ่มห้องพักใหม่</h3>
                  <button onClick={() => setIsAddRoomModalOpen(false)} className="text-slate-500 hover:text-slate-300 transition-colors">
                    <Icons.X />
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">หมายเลขห้อง</label>
                    <input
                      type="text"
                      placeholder="เช่น A104, B305"
                      value={newRoomData.id}
                      onChange={(e) => setNewRoomData({ ...newRoomData, id: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all font-bold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">ราคาค่าเช่าม (บาท)</label>
                    <input
                      type="number"
                      value={newRoomData.price}
                      onChange={(e) => setNewRoomData({ ...newRoomData, price: parseInt(e.target.value) })}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all font-bold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">สถานะเริ่มต้น</label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        onClick={() => setNewRoomData({ ...newRoomData, status: 'vacant' })}
                        className={`py-3 rounded-xl border-2 font-bold transition-all ${newRoomData.status === 'vacant' ? 'bg-slate-700 border-blue-500 text-blue-400' : 'bg-slate-900 border-slate-700 text-slate-500'}`}
                      >
                        ว่าง
                      </button>
                      <button
                        onClick={() => setNewRoomData({ ...newRoomData, status: 'maintenance' })}
                        className={`py-3 rounded-xl border-2 font-bold transition-all ${newRoomData.status === 'maintenance' ? 'bg-slate-700 border-yellow-500 text-yellow-500' : 'bg-slate-900 border-slate-700 text-slate-500'}`}
                      >
                        ซ่อมบำรุง
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-8">
                  <button
                    onClick={handleAddRoom}
                    disabled={!newRoomData.id}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-black py-4 rounded-2xl shadow-xl shadow-blue-600/20 transition-all active:scale-[0.98] uppercase tracking-wider"
                  >
                    ยืนยันการเพิ่ม
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Payment Modal */}
          {paymentModalOpen && paymentRoom && (
            <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
              <div className="w-full max-w-md bg-slate-800 rounded-3xl border border-slate-700 p-8 shadow-2xl overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full -translate-x-12 -translate-y-12 blur-3xl"></div>

                <h3 className="text-2xl font-black mb-6 text-slate-100 tracking-tight">ชำระเงิน — ห้อง <span className="text-blue-400">{paymentRoom.id}</span></h3>

                <div className="space-y-4 mb-8 bg-slate-900/50 p-6 rounded-2xl border border-slate-700">
                  <div className="flex justify-between text-sm font-bold text-slate-400">
                    <span>ค่าเช่าห้อง</span>
                    <span className="text-slate-100">฿{paymentRoom.price.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-slate-400">
                    <span>ค่าน้ำ / ค่าไฟ</span>
                    <span className="text-slate-100">฿{(paymentRoom.waterBill + paymentRoom.electricBill).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-xl font-black pt-4 border-t border-slate-800 text-emerald-400">
                    <span>รวมทั้งสิ้น</span>
                    <span>฿{(paymentRoom.price + paymentRoom.waterBill + paymentRoom.electricBill).toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex justify-center mb-6">
                  <div className="w-48 h-48 bg-white rounded-3xl p-4 shadow-inner flex items-center justify-center relative overflow-hidden group">
                    <img src="/QR.jpg" alt="QR Code" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div>
                    <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">อัปโหลดสลิป / หลักฐานการโอน</label>
                    <div className="relative group">
                      <input
                        type="file"
                        onChange={(e) => setPaymentSlip(e.target.files?.[0] || null)}
                        className="hidden"
                        id="slip-upload"
                        accept="image/*"
                      />
                      <label
                        htmlFor="slip-upload"
                        className="flex items-center justify-center gap-3 w-full bg-slate-900 border border-dashed border-slate-600 hover:border-blue-500 rounded-2xl p-4 cursor-pointer transition-all"
                      >
                        <Icons.Upload />
                        <span className="font-bold text-slate-400 group-hover:text-blue-400">
                          {paymentSlip ? paymentSlip.name : 'เลือกไฟล์รูปภาพสลิป'}
                        </span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-2">วันที่โอนเงิน</label>
                    <input
                      type="date"
                      value={paymentDate}
                      onChange={(e) => setPaymentDate(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 font-bold outline-none"
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={handleConfirmPayment}
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-black py-4 rounded-2xl shadow-xl shadow-emerald-600/20 transition-all active:scale-[0.98] uppercase tracking-wider"
                  >
                    ยืนยันการชำระ
                  </button>
                  <button
                    onClick={closePaymentModal}
                    className="px-6 py-4 border border-slate-700 rounded-2xl text-slate-400 hover:bg-slate-700 hover:text-slate-200 font-black transition-all"
                  >
                    ยกเลิก
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}