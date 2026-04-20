import { useState } from 'react';
import { Monitor } from 'lucide-react';
import { NavigationBar } from './components/NavigationBar';
import { HeroSection } from './components/HeroSection';
import { CategoryCards } from './components/CategoryCards';
import { AIInsights } from './components/AIInsights';
import { ChatbotQuickAccess } from './components/ChatbotQuickAccess';
import { RecentTransactions } from './components/RecentTransactions';
import { SpendingHistory } from './components/SpendingHistory';
import { AIChatbot } from './components/AIChatbot';
import { Presentation } from './components/Presentation';
import { ReportArchive } from './components/ReportArchive';
import { MyPage } from './components/MyPage';

type PageType = '홈' | '소비내역' | 'AI챗봇' | '분석리포트' | '마이페이지';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('홈');
  const [showPresentation, setShowPresentation] = useState(false);

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case '홈':
        return (
          <div className="space-y-8 lg:space-y-12">
            <HeroSection onNavigate={() => handleNavigate('분석리포트')} />
            <CategoryCards onNavigate={() => handleNavigate('분석리포트')} />
            <div className="grid lg:grid-cols-2 gap-8">
              <AIInsights onNavigate={() => handleNavigate('AI챗봇')} />
              <ChatbotQuickAccess onNavigate={() => handleNavigate('AI챗봇')} />
            </div>
            <RecentTransactions onNavigate={() => handleNavigate('소비내역')} />
          </div>
        );
      case '소비내역':
        return <SpendingHistory />;
      case 'AI챗봇':
        return <AIChatbot />;
      case '분석리포트':
        return <ReportArchive />;
      case '마이페이지':
        return <MyPage onNavigateToReports={() => handleNavigate('분석리포트')} />;
      default:
        return null;
    }
  };

  if (showPresentation) {
    return (
      <div className="relative">
        <Presentation />
        <button
          onClick={() => setShowPresentation(false)}
          className="fixed top-4 right-4 z-50 px-6 py-3 bg-white text-[#191F28] rounded-[12px] shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
        >
          <span>앱 데모 보기</span>
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F8FA]">
      <NavigationBar currentPage={currentPage} onNavigate={handleNavigate} />

      <main className="max-w-[1200px] mx-auto px-5 lg:px-8 py-8 lg:py-12">
        {renderPage()}
      </main>

      <button
        onClick={() => setShowPresentation(true)}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-[#3182F6] to-[#1B64DA] text-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center z-50"
        title="프레젠테이션 보기"
      >
        <Monitor className="w-6 h-6" />
      </button>
    </div>
  );
}