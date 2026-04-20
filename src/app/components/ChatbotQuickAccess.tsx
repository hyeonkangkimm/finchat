import { MessageCircle } from 'lucide-react';

const quickQuestions = [
  '이번 달 왜 많이 썼어?',
  '어디부터 줄이면 좋을까?',
  '내 소비 성향 알려줘',
];

interface ChatbotQuickAccessProps {
  onNavigate?: () => void;
}

export function ChatbotQuickAccess({ onNavigate }: ChatbotQuickAccessProps) {
  return (
    <div className="bg-gradient-to-br from-[#3182F6] to-[#1B64DA] rounded-[20px] p-6 lg:p-8 text-white shadow-[0_2px_10px_rgba(49,130,246,0.2)]">
      <div className="flex items-center gap-2 mb-4">
        <MessageCircle className="w-6 h-6" />
        <h2 className="font-bold text-xl lg:text-2xl">궁금한 걸 바로 물어보세요</h2>
      </div>
      <p className="text-white/80 mb-6">
        AI가 당신의 소비 패턴을 분석해 답변해드려요
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {quickQuestions.map((question, index) => (
          <button
            key={index}
            onClick={onNavigate}
            className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full text-sm backdrop-blur-sm transition-colors"
          >
            {question}
          </button>
        ))}
      </div>
      <button
        onClick={onNavigate}
        className="w-full bg-white text-[#3182F6] h-[52px] rounded-[12px] font-semibold hover:bg-white/90 transition-colors"
      >
        AI 챗봇 열기
      </button>
    </div>
  );
}
