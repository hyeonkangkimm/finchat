import { Send, Sparkles } from 'lucide-react';
import { useState } from 'react';

interface Message {
  id: number;
  text: string;
  isAI: boolean;
  timestamp: string;
}

const initialMessages: Message[] = [
  {
    id: 1,
    text: '안녕하세요. 이번 달 소비 데이터를 기반으로 도와드릴게요.',
    isAI: true,
    timestamp: '14:23',
  },
];

const suggestedQuestions = [
  '이번 달 왜 많이 썼어?',
  '어디서 줄이면 돼?',
  '이번 주 소비 패턴 알려줘',
  '내 소비 성향 분석해줘',
];

const recentQuestions = [
  '이번 달 왜 많이 썼어?',
  '어디부터 줄이면 좋을까?',
  '가장 많이 쓴 곳이 어디야?',
  '내 소비 성향 한 줄 요약해줘',
];

export function AIChatbot() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState('');

  const handleResetChat = () => {
    setMessages(initialMessages);
    setInputValue('');
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isAI: false,
      timestamp: new Date().toLocaleTimeString('ko-KR', {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    const aiResponse: Message = {
      id: messages.length + 2,
      text: '이번 달 지출 증가는 식비와 쇼핑 카테고리에서 주로 발생했어요. 특히 배달의민족, 쿠팡, 스타벅스 사용 빈도가 높았습니다.',
      isAI: true,
      timestamp: new Date().toLocaleTimeString('ko-KR', {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    setMessages([...messages, userMessage, aiResponse]);
    setInputValue('');
  };

  const handleQuestionClick = (question: string) => {
    setInputValue(question);
  };

  return (
    <div className="grid lg:grid-cols-[300px_1fr] gap-6 h-[calc(100vh-140px)]">
      {/* Left Sidebar */}
      <div className="hidden lg:block bg-white rounded-[20px] p-6 shadow-[0_2px_10px_rgba(15,23,42,0.06)] overflow-y-auto">
        <div className="space-y-6">
          {/* Recent Questions */}
          <div>
            <h3 className="text-[#191F28] font-semibold mb-3">최근 질문</h3>
            <div className="space-y-2">
              {recentQuestions.map((question, index) => (
                <button
                  key={index}
                  className="w-full text-left p-3 text-sm text-[#191F28] hover:bg-[#F7F8FA] rounded-[12px] transition-colors"
                  onClick={() => handleQuestionClick(question)}
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-[#E5E8EB]" />

          {/* Suggested Questions */}
          <div>
            <h3 className="text-[#191F28] font-semibold mb-3">추천 질문</h3>
            <div className="space-y-2">
              {suggestedQuestions.map((question, index) => (
                <button
                  key={index}
                  className="w-full text-left px-3 py-2 text-sm bg-[#EAF2FF] text-[#3182F6] rounded-full hover:bg-[#3182F6] hover:text-white transition-colors"
                  onClick={() => handleQuestionClick(question)}
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="bg-white rounded-[20px] shadow-[0_2px_10px_rgba(15,23,42,0.06)] flex flex-col">
        {/* Mobile Suggested Questions */}
        <div className="lg:hidden p-4 border-b border-[#E5E8EB]">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {suggestedQuestions.map((question, index) => (
              <button
                key={index}
                className="flex-shrink-0 px-4 py-2 text-sm bg-[#EAF2FF] text-[#3182F6] rounded-full hover:bg-[#3182F6] hover:text-white transition-colors"
                onClick={() => handleQuestionClick(question)}
              >
                {question}
              </button>
            ))}
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isAI ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-[80%] lg:max-w-[70%] ${
                  message.isAI
                    ? 'bg-[#F2F4F6] text-[#191F28]'
                    : 'bg-[#3182F6] text-white'
                } rounded-[18px] px-5 py-3`}
              >
                {message.isAI && (
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-[#3182F6]" />
                    <span className="text-xs text-[#8B95A1]">AI 챗봇</span>
                  </div>
                )}
                <p className="leading-relaxed">{message.text}</p>
                <p
                  className={`text-xs mt-2 ${
                    message.isAI ? 'text-[#8B95A1]' : 'text-white/70'
                  }`}
                >
                  {message.timestamp}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-[#E5E8EB]">
          <div className="flex items-center gap-2 mb-3">
            <button className="px-4 py-2 text-sm text-[#3182F6] hover:bg-[#EAF2FF] rounded-[12px] transition-colors">
              답변 저장
            </button>
            <button
              onClick={handleResetChat}
              className="px-4 py-2 text-sm text-[#8B95A1] hover:bg-[#F7F8FA] rounded-[12px] transition-colors"
            >
              대화 초기화
            </button>
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="궁금한 소비 패턴을 입력하세요"
              className="flex-1 h-[52px] px-4 bg-[#F7F8FA] rounded-[12px] border border-transparent focus:border-[#3182F6] outline-none transition-colors"
            />
            <button
              onClick={handleSendMessage}
              className="w-[52px] h-[52px] bg-[#3182F6] text-white rounded-[12px] flex items-center justify-center hover:bg-[#1B64DA] transition-colors"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
