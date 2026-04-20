import { Bell, User, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationBarProps {
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

export function NavigationBar({ currentPage = '홈', onNavigate }: NavigationBarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ['홈', '소비내역', 'AI챗봇', '분석리포트', '마이페이지'];

  const handleNavClick = (item: string) => {
    onNavigate?.(item);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white border-b border-[#E5E8EB] sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#3182F6] to-[#1B64DA] flex items-center justify-center">
              <span className="text-white font-bold">F</span>
            </div>
            <span className="text-xl font-bold text-[#191F28]">FinChat</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`relative py-2 transition-colors ${
                  currentPage === item
                    ? 'text-[#3182F6]'
                    : 'text-[#191F28] hover:text-[#3182F6]'
                }`}
              >
                {item}
                {currentPage === item && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#3182F6]" />
                )}
              </button>
            ))}
          </div>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#F7F8FA] transition-colors">
              <Bell className="w-5 h-5 text-[#8B95A1]" />
            </button>
            <button
              onClick={() => handleNavClick('마이페이지')}
              className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3182F6] to-[#1B64DA] flex items-center justify-center hover:shadow-lg transition-shadow"
            >
              <User className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#F7F8FA] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[#191F28]" />
            ) : (
              <Menu className="w-6 h-6 text-[#191F28]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E5E8EB] bg-white">
          <div className="px-5 py-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`block w-full text-left px-4 py-3 rounded-xl transition-colors ${
                  currentPage === item
                    ? 'bg-[#EAF2FF] text-[#3182F6]'
                    : 'text-[#191F28] hover:bg-[#F7F8FA]'
                }`}
              >
                {item}
              </button>
            ))}
            <div className="h-px bg-[#E5E8EB] my-4" />
            <button className="block w-full text-left px-4 py-3 rounded-xl text-[#191F28] hover:bg-[#F7F8FA] transition-colors">
              설정
            </button>
            <button className="block w-full text-left px-4 py-3 rounded-xl text-[#191F28] hover:bg-[#F7F8FA] transition-colors">
              연동 관리
            </button>
            <button className="block w-full text-left px-4 py-3 rounded-xl text-[#F04452] hover:bg-[#FEF3F2] transition-colors">
              로그아웃
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
