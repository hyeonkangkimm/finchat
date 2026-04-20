import { useState } from 'react';
import { ChevronLeft, ChevronRight, TrendingUp } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

const categoryData = [
  { name: '식비', value: 437000, percentage: 34, color: '#3182F6' },
  { name: '카페', value: 231000, percentage: 18, color: '#1B64DA' },
  { name: '쇼핑', value: 205000, percentage: 16, color: '#16B364' },
  { name: '교통', value: 154000, percentage: 12, color: '#8B95A1' },
  { name: '기타', value: 259000, percentage: 20, color: '#E5E8EB' },
];

const timeData = [
  { time: '오전', amount: 145000 },
  { time: '오후', amount: 368000 },
  { time: '저녁', amount: 592000 },
  { time: '심야', amount: 181000 },
];

const merchantRanking = [
  { rank: 1, name: '쿠팡', amount: 245000, count: 12 },
  { rank: 2, name: '스타벅스', amount: 186000, count: 28 },
  { rank: 3, name: '배달의민족', amount: 158000, count: 8 },
  { rank: 4, name: '올리브영', amount: 89000, count: 5 },
  { rank: 5, name: 'GS25', amount: 67000, count: 15 },
];

const patterns = [
  {
    title: '평일 저녁 배달 소비 반복',
    description: '화요일과 목요일 저녁 8시경에 배달 주문이 자주 발생해요',
  },
  {
    title: '카페 소액 결제 빈도 높음',
    description: '하루 평균 1.3회 카페 결제가 발생하고 있어요',
  },
  {
    title: '쇼핑 결제 간격이 짧아짐',
    description: '최근 2주간 쇼핑 간격이 7일에서 3일로 단축됐어요',
  },
];

export function AnalysisReport() {
  const [currentMonth, setCurrentMonth] = useState('2026년 4월');

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-white rounded-[20px] p-6 shadow-[0_2px_10px_rgba(15,23,42,0.06)]">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-[#191F28] font-bold text-2xl lg:text-3xl">소비 분석 리포트</h1>
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 rounded-full hover:bg-[#F7F8FA] flex items-center justify-center transition-colors">
              <ChevronLeft className="w-5 h-5 text-[#191F28]" />
            </button>
            <span className="text-[#191F28] font-semibold">{currentMonth}</span>
            <button className="w-10 h-10 rounded-full hover:bg-[#F7F8FA] flex items-center justify-center transition-colors">
              <ChevronRight className="w-5 h-5 text-[#191F28]" />
            </button>
          </div>
        </div>
      </div>

      {/* Summary Card */}
      <div className="bg-gradient-to-br from-[#EAF2FF] to-[#FFFFFF] rounded-[20px] p-6 lg:p-8 shadow-[0_2px_10px_rgba(15,23,42,0.06)]">
        <div className="grid lg:grid-cols-3 gap-6">
          <div>
            <p className="text-[#8B95A1] mb-2">총 소비 금액</p>
            <p className="text-[#191F28] font-bold text-3xl">1,286,000원</p>
          </div>
          <div>
            <p className="text-[#8B95A1] mb-2">지난달 대비</p>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-[#F04452]" />
              <p className="text-[#F04452] font-bold text-2xl">+124,000원</p>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-white rounded-[18px] p-4">
              <p className="text-[#191F28]">지난달보다 식비와 쇼핑 지출이 늘었어요.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Category Analysis */}
      <div className="bg-white rounded-[20px] p-6 lg:p-8 shadow-[0_2px_10px_rgba(15,23,42,0.06)]">
        <h2 className="text-[#191F28] font-bold text-xl lg:text-2xl mb-6">카테고리별 소비</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Pie Chart */}
          <div className="flex justify-center">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="value"
                  label={({ name, percentage }) => `${name} ${percentage}%`}
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Category List */}
          <div className="space-y-3">
            {categoryData.map((category, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-[#F7F8FA] rounded-[12px]">
                <div className="flex items-center gap-3">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: category.color }}
                  />
                  <span className="text-[#191F28] font-medium">{category.name}</span>
                </div>
                <div className="text-right">
                  <p className="text-[#191F28] font-semibold">{category.value.toLocaleString()}원</p>
                  <p className="text-[#8B95A1] text-sm">{category.percentage}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Time Analysis */}
      <div className="bg-white rounded-[20px] p-6 lg:p-8 shadow-[0_2px_10px_rgba(15,23,42,0.06)]">
        <h2 className="text-[#191F28] font-bold text-xl lg:text-2xl mb-6">소비 집중 시간대</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={timeData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E8EB" />
            <XAxis dataKey="time" stroke="#8B95A1" />
            <YAxis stroke="#8B95A1" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #E5E8EB',
                borderRadius: '12px',
              }}
            />
            <Bar dataKey="amount" fill="#3182F6" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
        <div className="mt-4 p-4 bg-[#ECFDF3] rounded-[18px]">
          <p className="text-[#191F28]">주말 저녁 시간대에 소비가 집중돼 있어요.</p>
        </div>
      </div>

      {/* Merchant Ranking */}
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-[20px] p-6 lg:p-8 shadow-[0_2px_10px_rgba(15,23,42,0.06)]">
          <h2 className="text-[#191F28] font-bold text-xl lg:text-2xl mb-6">자주 사용한 가맹점</h2>
          <div className="space-y-3">
            {merchantRanking.map((merchant) => (
              <div key={merchant.rank} className="flex items-center justify-between p-4 hover:bg-[#F7F8FA] rounded-[12px] transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3182F6] to-[#1B64DA] text-white flex items-center justify-center font-bold">
                    {merchant.rank}
                  </div>
                  <div>
                    <p className="text-[#191F28] font-medium">{merchant.name}</p>
                    <p className="text-[#8B95A1] text-sm">{merchant.count}회 이용</p>
                  </div>
                </div>
                <p className="text-[#191F28] font-semibold">{merchant.amount.toLocaleString()}원</p>
              </div>
            ))}
          </div>
        </div>

        {/* Patterns */}
        <div className="bg-white rounded-[20px] p-6 lg:p-8 shadow-[0_2px_10px_rgba(15,23,42,0.06)]">
          <h2 className="text-[#191F28] font-bold text-xl lg:text-2xl mb-6">반복 소비 패턴</h2>
          <div className="space-y-4">
            {patterns.map((pattern, index) => (
              <div key={index} className="p-4 bg-[#FFF4E5] rounded-[18px]">
                <p className="text-[#191F28] font-semibold mb-2">{pattern.title}</p>
                <p className="text-[#8B95A1] text-sm">{pattern.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Summary */}
      <div className="bg-gradient-to-br from-[#3182F6] to-[#1B64DA] rounded-[20px] p-6 lg:p-8 text-white shadow-[0_2px_10px_rgba(49,130,246,0.2)]">
        <h2 className="font-bold text-xl lg:text-2xl mb-4">AI 종합 분석</h2>
        <div className="bg-white/10 backdrop-blur-sm rounded-[18px] p-5 leading-relaxed">
          <p>
            이번 달 소비는 식비와 카페에 집중되어 있어요.
            특히 평일 저녁과 주말에 반복 소비가 나타납니다.
            줄이기 쉬운 시작점은 카페와 배달 소비예요.
          </p>
        </div>
      </div>
    </div>
  );
}
