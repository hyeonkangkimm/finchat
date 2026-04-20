import { TrendingUp, TrendingDown } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface HeroSectionProps {
  onNavigate?: () => void;
}

const spendingData = [
  { name: '식비', value: 437000, color: '#3182F6' },
  { name: '카페', value: 231000, color: '#1B64DA' },
  { name: '쇼핑', value: 205000, color: '#16B364' },
  { name: '교통', value: 154000, color: '#8B95A1' },
  { name: '기타', value: 259000, color: '#E5E8EB' },
];

export function HeroSection({ onNavigate }: HeroSectionProps) {
  const totalSpending = 1286000;
  const lastMonthDiff = 124000;
  const isIncrease = lastMonthDiff > 0;

  return (
    <div
      onClick={onNavigate}
      className="bg-gradient-to-br from-[#EAF2FF] to-[#FFFFFF] rounded-[20px] p-6 lg:p-8 cursor-pointer hover:shadow-[0_4px_20px_rgba(15,23,42,0.1)] transition-shadow"
    >
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Numbers */}
        <div className="space-y-4">
          <p className="text-[#8B95A1]">현강님의 이번 달 소비</p>
          <div className="space-y-2">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#191F28]">
              {totalSpending.toLocaleString()}원
            </h1>
            <div className="flex items-center gap-2">
              {isIncrease ? (
                <TrendingUp className="w-5 h-5 text-[#F04452]" />
              ) : (
                <TrendingDown className="w-5 h-5 text-[#16B364]" />
              )}
              <span className={isIncrease ? 'text-[#F04452]' : 'text-[#16B364]'}>
                지난달 대비 {isIncrease ? '+' : ''}{lastMonthDiff.toLocaleString()}원
              </span>
            </div>
          </div>
          <div className="bg-white rounded-[18px] p-4 inline-block shadow-sm">
            <p className="text-[#191F28]">
              이번 달은 식비와 카페 소비가 높았어요.
            </p>
          </div>
        </div>

        {/* Right Side - Chart */}
        <div className="flex justify-center">
          <div className="w-64 h-64 relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={spendingData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {spendingData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-[#8B95A1] text-sm">총 소비</p>
                <p className="text-[#191F28] font-bold text-lg">
                  {(totalSpending / 10000).toFixed(0)}만원
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
