import { Search, Filter, Download, Coffee, ShoppingCart, Utensils, Bus, Package, Store } from 'lucide-react';
import { useState } from 'react';

const allTransactions = [
  { id: 1, merchant: '스타벅스 강남점', date: '2026.04.19', time: '14:23', amount: 6500, category: '카페', method: '신한카드', icon: Coffee, color: '#1B64DA' },
  { id: 2, merchant: '쿠팡', date: '2026.04.18', time: '22:15', amount: 45200, category: '쇼핑', method: 'KB국민카드', icon: Package, color: '#16B364' },
  { id: 3, merchant: '배달의민족', date: '2026.04.18', time: '19:30', amount: 18900, category: '식비', method: '신한카드', icon: Utensils, color: '#3182F6' },
  { id: 4, merchant: 'GS25 편의점', date: '2026.04.17', time: '23:45', amount: 8400, category: '편의점', method: '현금', icon: Store, color: '#8B95A1' },
  { id: 5, merchant: '카카오T', date: '2026.04.17', time: '18:20', amount: 12500, category: '교통', method: '카카오페이', icon: Bus, color: '#F04452' },
  { id: 6, merchant: '올리브영 홍대점', date: '2026.04.16', time: '15:10', amount: 32800, category: '쇼핑', method: 'KB국민카드', icon: ShoppingCart, color: '#16B364' },
  { id: 7, merchant: '스타벅스 역삼점', date: '2026.04.16', time: '09:15', amount: 5900, category: '카페', method: '신한카드', icon: Coffee, color: '#1B64DA' },
  { id: 8, merchant: '쿠팡이츠', date: '2026.04.15', time: '20:40', amount: 24500, category: '식비', method: '신한카드', icon: Utensils, color: '#3182F6' },
  { id: 9, merchant: '이마트24', date: '2026.04.15', time: '12:30', amount: 7200, category: '편의점', method: '현금', icon: Store, color: '#8B95A1' },
  { id: 10, merchant: '무신사', date: '2026.04.14', time: '21:05', amount: 89000, category: '쇼핑', method: 'KB국민카드', icon: ShoppingCart, color: '#16B364' },
];

const categories = ['전체', '식비', '카페', '쇼핑', '교통', '편의점'];
const periods = ['오늘', '7일', '30일', '직접 선택'];

export function SpendingHistory() {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [selectedPeriod, setSelectedPeriod] = useState('30일');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [sortOrder, setSortOrder] = useState('최신순');
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <h1 className="text-[#191F28] font-bold text-2xl lg:text-3xl">소비 내역</h1>
        <button className="flex items-center gap-2 px-4 h-[48px] bg-white text-[#191F28] border border-[#E5E8EB] rounded-[12px] hover:bg-[#F7F8FA] transition-colors">
          <Download className="w-5 h-5" />
          <span>CSV 다운로드</span>
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-[20px] p-6 shadow-[0_2px_10px_rgba(15,23,42,0.06)]">
        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8B95A1]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="가맹점 검색"
            className="w-full h-[52px] pl-12 pr-4 bg-[#F7F8FA] rounded-[12px] border border-transparent focus:border-[#3182F6] outline-none transition-colors"
          />
        </div>

        {/* Mobile Filter Toggle */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="lg:hidden flex items-center gap-2 w-full justify-center px-4 py-3 bg-[#F2F4F6] text-[#191F28] rounded-[12px] mb-4"
        >
          <Filter className="w-5 h-5" />
          <span>필터</span>
        </button>

        {/* Filter Options */}
        <div className={`space-y-4 ${showFilters || 'hidden lg:block'}`}>
          {/* Period Filter */}
          <div>
            <p className="text-[#8B95A1] text-sm mb-2">기간</p>
            <div className="flex flex-wrap gap-2">
              {periods.map((period) => (
                <button
                  key={period}
                  onClick={() => setSelectedPeriod(period)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    selectedPeriod === period
                      ? 'bg-[#EAF2FF] text-[#3182F6]'
                      : 'bg-[#F2F4F6] text-[#191F28] hover:bg-[#E5E8EB]'
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div>
            <p className="text-[#8B95A1] text-sm mb-2">카테고리</p>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    selectedCategory === category
                      ? 'bg-[#EAF2FF] text-[#3182F6]'
                      : 'bg-[#F2F4F6] text-[#191F28] hover:bg-[#E5E8EB]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Transaction List */}
      <div className="bg-white rounded-[20px] p-6 shadow-[0_2px_10px_rgba(15,23,42,0.06)]">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-[#8B95A1] text-sm">총 {allTransactions.length}건</p>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="px-4 py-2 bg-[#F7F8FA] rounded-[12px] text-[#191F28] text-sm border-none outline-none cursor-pointer"
          >
            <option>최신순</option>
            <option>금액순 (높은순)</option>
            <option>금액순 (낮은순)</option>
          </select>
        </div>

        <div className="space-y-3">
          {allTransactions.map((transaction) => {
            const Icon = transaction.icon;
            return (
              <div
                key={transaction.id}
                className="flex items-center justify-between p-4 hover:bg-[#F7F8FA] rounded-[12px] transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${transaction.color}15` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: transaction.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[#191F28] font-medium truncate">{transaction.merchant}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <p className="text-[#8B95A1] text-sm">{transaction.date} {transaction.time}</p>
                      <span className="text-[#E5E8EB]">•</span>
                      <p className="text-[#8B95A1] text-sm">{transaction.method}</p>
                    </div>
                  </div>
                </div>
                <div className="text-right ml-4">
                  <p className="text-[#191F28] font-semibold whitespace-nowrap">
                    -{transaction.amount.toLocaleString()}원
                  </p>
                  <span className="inline-block px-3 py-1 bg-[#F2F4F6] text-[#8B95A1] text-xs rounded-full mt-1">
                    {transaction.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        <div className="mt-6 flex items-center justify-center gap-2">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="w-8 h-8 rounded-lg hover:bg-[#F7F8FA] flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="text-[#8B95A1]">‹</span>
          </button>
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                currentPage === page
                  ? 'bg-[#3182F6] text-white'
                  : 'hover:bg-[#F7F8FA] text-[#191F28]'
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage(Math.min(3, currentPage + 1))}
            disabled={currentPage === 3}
            className="w-8 h-8 rounded-lg hover:bg-[#F7F8FA] flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="text-[#8B95A1]">›</span>
          </button>
        </div>
      </div>
    </div>
  );
}
