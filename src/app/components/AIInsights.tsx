import { Sparkles } from 'lucide-react';

interface AIInsightsProps {
  onNavigate?: () => void;
}

const insights = [
  '소액 결제가 자주 발생해 체감보다 지출이 커지고 있어요.',
  '평일 저녁 배달 소비가 반복되고 있어요.',
  '최근 7일간 쇼핑 지출이 빠르게 증가했어요.',
];

export function AIInsights({ onNavigate }: AIInsightsProps) {
  return (
    <div className="bg-white rounded-[20px] p-6 lg:p-8 shadow-[0_2px_10px_rgba(15,23,42,0.06)]">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="w-6 h-6 text-[#3182F6]" />
        <h2 className="text-[#191F28] font-bold text-xl lg:text-2xl">최근 AI 인사이트</h2>
      </div>
      <div className="space-y-4">
        {insights.map((insight, index) => (
          <div
            key={index}
            onClick={onNavigate}
            className="flex items-start gap-3 p-4 bg-[#F7F8FA] rounded-[18px] hover:bg-[#EAF2FF] transition-colors cursor-pointer"
          >
            <div className="w-2 h-2 rounded-full bg-[#3182F6] mt-2 flex-shrink-0" />
            <p className="text-[#191F28]">{insight}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
