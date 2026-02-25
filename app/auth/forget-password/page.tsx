'use client';

import React, { useState } from 'react';

const Icons = {
  Mail: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </svg>
  ),
  ArrowLeft: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="19" y1="12" x2="5" y2="12"></line>
      <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
  ),
  Check: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  ),
};

export default function ForgetPasswordPage() {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [forgetForm, setForgetForm] = useState({ email: '' });

  const handleBackToLogin = () => {
    window.location.href = '/auth/login';
  };

  const handleGoToRegister = () => {
    window.location.href = '/auth/register';
  };

  const handleForgetPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!forgetForm.email) {
      alert('กรุณากรอกอีเมล');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccessMessage('ส่งลิงค์รีเซ็ตรหัสผ่านไปยังอีเมลของคุณแล้ว');
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Success Message */}
        {successMessage && (
          <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white flex-shrink-0">
              <Icons.Check />
            </div>
            <span className="text-sm font-bold text-green-800">{successMessage}</span>
          </div>
        )}

        <div className="bg-white/90 backdrop-blur-xl border border-slate-200 rounded-3xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
          <button
            onClick={handleBackToLogin}
            className="flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-6 transition-colors group"
          >
            <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
              <Icons.ArrowLeft />
            </div>
            <span className="text-sm font-bold uppercase tracking-wider">กลับไปเข้าสู่ระบบ</span>
          </button>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight">ลืมรหัสผ่าน</h2>
            <p className="text-slate-500 text-sm">ใส่อีเมลของคุณเพื่อรับลิงค์รีเซ็ตรหัสผ่าน</p>
          </div>

          <div className="space-y-4 mb-6">
            <div className="space-y-1.5">
              <label className="text-sm font-bold text-slate-700 ml-1">อีเมลแอดเดรส</label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors">
                  <Icons.Mail />
                </div>
                <input
                  type="email"
                  placeholder="admin@example.com"
                  value={forgetForm.email}
                  onChange={(e) => setForgetForm({ ...forgetForm, email: e.target.value })}
                  className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
              </div>
              <p className="text-xs text-slate-400 mt-2 px-1">เราจะส่งลิงค์สำหรับการตั้งรหัสผ่านใหม่ไปยังอีเมลที่ระบุข้างต้น</p>
            </div>

            <button
              onClick={handleForgetPassword}
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-600/20 transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed mt-4"
            >
              {loading ? 'กำลังประมวลผล...' : 'ส่งลิงค์การตั้งค่ารหัสผ่านใหม่'}
            </button>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl text-center">
            <p className="text-xs text-slate-500">
              ไม่ได้รับอีเมล? โปรดตรวจสอบในจดหมายขยะ (spam) หรือ{' '}
              <button
                onClick={handleGoToRegister}
                className="text-blue-600 hover:text-blue-700 font-bold"
              >
                สมัครสมาชิกใหม่
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}