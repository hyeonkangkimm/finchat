import { ArrowRight, Coffee, ShoppingCart, Utensils, Bus, Package } from 'lucide-react';

interface RecentTransactionsProps {
  onNavigate?: () => void;
}

const transactions = [
  {
    id: 1,
    merchant: '스타벅스 강남점',
    date: '2026.04.19',
    amount: 6500,
    category: '카페',
    icon: Coffee,
    color: '#1B64DA',
  },
  {
    id: 2,
    merchant: '쿠팡',
    date: '2026.04.18',
    amount: 45200,
    category: '쇼핑',
    icon: Package,
    color: '#16B364',
  },
  {
    id: 3,
    merchant: '배달의민족',
    date: '2026.04.18',
    amount: 18900,
    category: '식비',
    icon: Utensils,
    color: '#3182F6',
  },
  {
    id: 4,
    merchant: 'GS25 편의점',
    date: '2026.04.17',
    amount: 8400,
    category: '편의점',
    icon: ShoppingCart,
    color: '#8B95A1',
  },
  {
    id: 5,
    merchant: '카카오T',
    date: '2026.04.17',
    amount: 12500,
    category: '교통',
    icon: Bus,
    color: '#F04452',
  },
];

export function RecentTransactions({ onNavigate }: RecentTransactionsProps) {
  return (
    <div className="bg-white rounded-[20px] p-6 lg:p-8 shadow-[0_2px_10px_rgba(15,23,42,0.06)]">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[#191F28] font-bold text-xl lg:text-2xl">최근 거래</h2>
        <button
          onClick={onNavigate}
          className="flex items-center gap-1 text-[#3182F6] hover:text-[#1B64DA] transition-colors"
        >
          <span>전체보기</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
      <div className="space-y-3">
        {transactions.map((transaction) => {
          const Icon = transaction.icon;
          return (
            <div
              key={transaction.id}
              className="flex items-center justify-between p-4 hover:bg-[#F7F8FA] rounded-[12px] transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${transaction.color}15` }}
                >
                  <Icon className="w-6 h-6" style={{ color: transaction.color }} />
                </div>
                <div>
                  <p className="text-[#191F28] font-medium">{transaction.merchant}</p>
                  <p className="text-[#8B95A1] text-sm">{transaction.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[#191F28] font-semibold">
                  -{transaction.amount.toLocaleString()}원
                </p>
                <span className="inline-block px-3 py-1 bg-[#F2F4F6] text-[#8B95A1] text-xs rounded-full">
                  {transaction.category}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
