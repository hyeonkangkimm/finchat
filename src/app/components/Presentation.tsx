import { useState } from 'react';
import { ChevronLeft, ChevronRight, Home, BarChart3, MessageCircle, History, Sparkles } from 'lucide-react';

const slides = [
  {
    id: 1,
    type: 'cover',
    title: 'FinChat',
    subtitle: '내 소비를 대화로 이해하다',
    description: 'AI 기반 금융 소비 분석 웹 서비스',
    gradient: 'from-[#3182F6] to-[#1B64DA]',
  },
  {
    id: 2,
    type: 'content',
    title: '서비스 개요',
    icon: Sparkles,
    items: [
      {
        label: '타겟',
        value: '소비관리가 어려운 2030 대학생, 사회초년생, 직장인',
      },
      {
        label: '핵심 가치',
        value: '복잡한 금융 데이터를 쉬운 말로 설명',
      },
      {
        label: '차별점',
        value: '단순 조회가 아니라 해석과 상담 제공',
      },
      {
        label: '플랫폼',
        value: '반응형 웹 서비스 (PC·태블릿·모바일 대응)',
      },
    ],
  },
  {
    id: 3,
    type: 'feature',
    title: '5가지 핵심 기능',
    icon: BarChart3,
    features: [
      {
        title: '홈 대시보드',
        description: '이번 달 소비 요약, 카테고리 분석, AI 인사이트 한눈에 보기',
        color: '#3182F6',
      },
      {
        title: '소비내역',
        description: '전체 거래 내역 조회, 검색, 필터링 및 정렬 기능',
        color: '#1B64DA',
      },
      {
        title: 'AI 챗봇',
        description: '자연어 대화로 소비 패턴 질문하고 맞춤 답변 받기',
        color: '#16B364',
      },
      {
        title: '분석리포트',
        description: '월간/주간 리포트, 차트 분석, 가맹점 랭킹, AI 종합 분석',
        color: '#F04452',
      },
      {
        title: '마이페이지',
        description: '프로필 관리, 계정 연동, 데이터 관리, 설정',
        color: '#8B95A1',
      },
    ],
  },
  {
    id: 4,
    type: 'screenshot',
    title: '홈 대시보드',
    icon: Home,
    description: '한눈에 보는 이번 달 소비 요약',
    highlights: [
      '히어로 섹션: 총 소비 금액 및 지난달 대비 증감, 도넛 차트',
      '4가지 요약 카드: 가장 많이 쓴 카테고리, 자주 쓴 사용처, 위험 신호, AI 인사이트',
      'AI 인사이트 리스트: 반복 소비 패턴 자동 감지',
      '챗봇 바로가기: 추천 질문으로 빠른 상담 시작',
      '최근 거래 5건: 실시간 소비 내역 확인',
    ],
  },
  {
    id: 5,
    type: 'screenshot',
    title: '소비내역',
    icon: History,
    description: '전체 거래 내역 조회 및 관리',
    highlights: [
      '검색 기능: 가맹점명으로 거래 찾기',
      '다중 필터: 기간(오늘/7일/30일), 카테고리, 결제수단',
      '정렬 옵션: 최신순, 금액순 (높은순/낮은순)',
      '거래 상세: 각 거래 클릭 시 상세 정보 확인',
      '페이지네이션: 많은 거래 내역 효율적 탐색',
    ],
  },
  {
    id: 6,
    type: 'screenshot',
    title: 'AI 챗봇',
    icon: MessageCircle,
    description: '궁금한 소비 패턴을 대화로 물어보세요',
    highlights: [
      '추천 질문 칩: 이번 달 왜 많이 썼어? / 어디서 줄이면 돼?',
      '최근 질문 기록: 과거 대화 다시 보기',
      '실시간 대화: 메시지 입력 및 AI 답변',
      '2~4줄 답변: 간결한 금융 코치 톤',
      '대화 초기화: 새로운 상담 시작',
    ],
  },
  {
    id: 7,
    type: 'screenshot',
    title: '분석리포트',
    icon: BarChart3,
    description: '월간/주간 리포트 + 상세 분석',
    highlights: [
      '월간/주간 탭 전환: 기간별 리포트 선택',
      '리포트 카드: 기간, 총 소비, 증감률, 핵심 분석',
      '상세 보기: 카테고리별 도넛 차트 + 비중 목록',
      '시간대 분석: 오전/오후/저녁/심야 소비 패턴 막대 차트',
      '가맹점 랭킹: Top 5 + 이용 횟수 + AI 종합 분석',
    ],
  },
  {
    id: 8,
    type: 'screenshot',
    title: '마이페이지',
    icon: Sparkles,
    description: '프로필 및 계정 관리',
    highlights: [
      '프로필 정보: 닉네임, 이메일, 가입일 + 수정 기능',
      '연결된 계정: KB국민은행, 신한카드, 카카오페이 (재연결/해제)',
      '내 데이터: 챗봇 대화 기록, 저장한 답변, 리포트 보관함, 다운로드 기록',
      '설정 메뉴: 알림 설정, 개인정보 관리, 비밀번호 변경, 앱 설정',
      '계정 관리: 로그아웃, 회원 탈퇴',
    ],
  },
  {
    id: 9,
    type: 'closing',
    title: 'FinChat',
    subtitle: '소비를 보는 서비스가 아니라\n소비를 이해하게 만드는 서비스',
    gradient: 'from-[#1B64DA] to-[#3182F6]',
  },
];

export function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const slide = slides[currentSlide];

  const renderSlide = () => {
    switch (slide.type) {
      case 'cover':
        return (
          <div className={`h-full flex flex-col items-center justify-center text-white bg-gradient-to-br ${slide.gradient} p-12`}>
            <div className="text-center space-y-6">
              <h1 className="text-6xl lg:text-8xl font-bold mb-4">{slide.title}</h1>
              <p className="text-2xl lg:text-4xl font-semibold opacity-90">{slide.subtitle}</p>
              <p className="text-xl lg:text-2xl opacity-80 mt-8">{slide.description}</p>
            </div>
          </div>
        );

      case 'content':
        const ContentIcon = slide.icon;
        return (
          <div className="h-full flex flex-col p-12 lg:p-16">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#3182F6] to-[#1B64DA] flex items-center justify-center">
                <ContentIcon className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#191F28]">{slide.title}</h2>
            </div>
            <div className="flex-1 space-y-6">
              {slide.items?.map((item, index) => (
                <div key={index} className="bg-white rounded-[20px] p-6 shadow-[0_2px_10px_rgba(15,23,42,0.06)]">
                  <p className="text-[#8B95A1] text-lg mb-2">{item.label}</p>
                  <p className="text-[#191F28] text-2xl font-semibold">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'feature':
        const FeatureIcon = slide.icon;
        return (
          <div className="h-full flex flex-col p-12 lg:p-16">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#3182F6] to-[#1B64DA] flex items-center justify-center">
                <FeatureIcon className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#191F28]">{slide.title}</h2>
            </div>
            <div className="flex-1 grid md:grid-cols-2 gap-6">
              {slide.features?.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-[20px] p-8 shadow-[0_2px_10px_rgba(15,23,42,0.06)] hover:shadow-[0_4px_20px_rgba(15,23,42,0.1)] transition-shadow"
                >
                  <div
                    className="w-12 h-12 rounded-full mb-4"
                    style={{ backgroundColor: `${feature.color}15` }}
                  >
                    <div className="w-full h-full rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full" style={{ backgroundColor: feature.color }} />
                    </div>
                  </div>
                  <h3 className="text-[#191F28] text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-[#8B95A1] text-lg leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'screenshot':
        const ScreenIcon = slide.icon;
        return (
          <div className="h-full flex flex-col p-12 lg:p-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#3182F6] to-[#1B64DA] flex items-center justify-center">
                <ScreenIcon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-[#191F28]">{slide.title}</h2>
                <p className="text-[#8B95A1] text-xl mt-2">{slide.description}</p>
              </div>
            </div>
            <div className="flex-1 bg-white rounded-[20px] p-8 shadow-[0_2px_10px_rgba(15,23,42,0.06)]">
              <h3 className="text-[#191F28] text-2xl font-semibold mb-6">주요 화면 구성</h3>
              <div className="space-y-4">
                {slide.highlights?.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-[#F7F8FA] rounded-[12px]">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#3182F6] to-[#1B64DA] flex items-center justify-center flex-shrink-0 text-white font-bold">
                      {index + 1}
                    </div>
                    <p className="text-[#191F28] text-lg pt-1">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'closing':
        return (
          <div className={`h-full flex flex-col items-center justify-center text-white bg-gradient-to-br ${slide.gradient} p-12`}>
            <div className="text-center space-y-6">
              <h1 className="text-6xl lg:text-8xl font-bold mb-8">{slide.title}</h1>
              <p className="text-2xl lg:text-3xl font-semibold opacity-90 whitespace-pre-line leading-relaxed">
                {slide.subtitle}
              </p>
              <div className="mt-12 pt-12 border-t border-white/20">
                <p className="text-xl opacity-80">Thank you</p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="h-screen bg-[#F7F8FA] flex flex-col">
      {/* Slide Content */}
      <div className="flex-1 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#F7F8FA]">
          {renderSlide()}
        </div>
      </div>

      {/* Controls */}
      <div className="bg-white border-t border-[#E5E8EB] p-4">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-4">
          {/* Navigation Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-[#F2F4F6] hover:bg-[#E5E8EB] flex items-center justify-center transition-colors"
              disabled={currentSlide === 0}
            >
              <ChevronLeft className="w-5 h-5 text-[#191F28]" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-[#F2F4F6] hover:bg-[#E5E8EB] flex items-center justify-center transition-colors"
              disabled={currentSlide === slides.length - 1}
            >
              <ChevronRight className="w-5 h-5 text-[#191F28]" />
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex items-center gap-2 flex-1 justify-center overflow-x-auto">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? 'w-8 bg-[#3182F6]'
                    : 'w-2 bg-[#E5E8EB] hover:bg-[#8B95A1]'
                }`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-[#8B95A1] font-medium">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>
      </div>
    </div>
  );
}
