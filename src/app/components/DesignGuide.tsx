export function DesignGuide() {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-[20px] p-8 shadow-[0_2px_10px_rgba(15,23,42,0.06)]">
        <h1 className="text-[#191F28] font-bold text-3xl mb-6">FinChat 디자인 시스템</h1>

        {/* Color Palette */}
        <div className="mb-8">
          <h2 className="text-[#191F28] font-bold text-2xl mb-4">컬러 팔레트</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <div className="w-full h-24 rounded-[12px] bg-[#3182F6] mb-2"></div>
              <p className="text-[#191F28] font-medium">Primary Blue</p>
              <p className="text-[#8B95A1] text-sm">#3182F6</p>
            </div>
            <div>
              <div className="w-full h-24 rounded-[12px] bg-[#1B64DA] mb-2"></div>
              <p className="text-[#191F28] font-medium">Navy</p>
              <p className="text-[#8B95A1] text-sm">#1B64DA</p>
            </div>
            <div>
              <div className="w-full h-24 rounded-[12px] bg-[#16B364] mb-2"></div>
              <p className="text-[#191F28] font-medium">Success</p>
              <p className="text-[#8B95A1] text-sm">#16B364</p>
            </div>
            <div>
              <div className="w-full h-24 rounded-[12px] bg-[#F04452] mb-2"></div>
              <p className="text-[#191F28] font-medium">Danger</p>
              <p className="text-[#8B95A1] text-sm">#F04452</p>
            </div>
          </div>
        </div>

        {/* Typography */}
        <div className="mb-8">
          <h2 className="text-[#191F28] font-bold text-2xl mb-4">타이포그래피</h2>
          <div className="space-y-4">
            <div>
              <p className="text-4xl font-bold text-[#191F28]">히어로 큰 숫자</p>
              <p className="text-[#8B95A1] text-sm">Bold 36px</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#191F28]">페이지 타이틀</p>
              <p className="text-[#8B95A1] text-sm">Bold 28px</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#191F28]">섹션 타이틀</p>
              <p className="text-[#8B95A1] text-sm">Bold 22px</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-[#191F28]">카드 타이틀</p>
              <p className="text-[#8B95A1] text-sm">Semibold 17px</p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mb-8">
          <h2 className="text-[#191F28] font-bold text-2xl mb-4">버튼</h2>
          <div className="space-y-4">
            <button className="w-full lg:w-auto px-8 h-[52px] bg-[#3182F6] text-white rounded-[12px] font-semibold hover:bg-[#1B64DA] transition-colors">
              Primary Button
            </button>
            <button className="w-full lg:w-auto px-8 h-[52px] bg-[#F2F4F6] text-[#191F28] rounded-[12px] font-semibold hover:bg-[#E5E8EB] transition-colors">
              Secondary Button
            </button>
            <button className="w-full lg:w-auto px-8 h-[52px] bg-transparent text-[#3182F6] rounded-[12px] font-semibold hover:bg-[#EAF2FF] transition-colors">
              Ghost Button
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="mb-8">
          <h2 className="text-[#191F28] font-bold text-2xl mb-4">카드</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-[20px] p-6 shadow-[0_2px_10px_rgba(15,23,42,0.06)] hover:shadow-[0_4px_20px_rgba(15,23,42,0.1)] transition-shadow">
              <h3 className="text-[#191F28] font-semibold text-lg mb-2">기본 카드</h3>
              <p className="text-[#8B95A1]">20px border-radius, 그림자 효과</p>
            </div>
            <div className="bg-gradient-to-br from-[#3182F6] to-[#1B64DA] rounded-[20px] p-6 text-white">
              <h3 className="font-semibold text-lg mb-2">그라데이션 카드</h3>
              <p className="text-white/80">Blue to Navy 그라데이션</p>
            </div>
          </div>
        </div>

        {/* Input Fields */}
        <div className="mb-8">
          <h2 className="text-[#191F28] font-bold text-2xl mb-4">입력 필드</h2>
          <input
            type="text"
            placeholder="입력 필드 예시"
            className="w-full h-[52px] px-4 bg-[#F7F8FA] rounded-[12px] border border-transparent focus:border-[#3182F6] outline-none transition-colors"
          />
        </div>

        {/* Tags */}
        <div>
          <h2 className="text-[#191F28] font-bold text-2xl mb-4">태그 / 칩</h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-4 py-2 bg-[#F2F4F6] text-[#191F28] rounded-full">기본 태그</span>
            <span className="px-4 py-2 bg-[#EAF2FF] text-[#3182F6] rounded-full">활성 태그</span>
            <span className="px-4 py-2 bg-[#ECFDF3] text-[#16B364] rounded-full">성공 태그</span>
            <span className="px-4 py-2 bg-[#FEF3F2] text-[#F04452] rounded-full">위험 태그</span>
          </div>
        </div>
      </div>

      {/* Responsive Breakpoints */}
      <div className="bg-white rounded-[20px] p-8 shadow-[0_2px_10px_rgba(15,23,42,0.06)]">
        <h2 className="text-[#191F28] font-bold text-2xl mb-4">반응형 레이아웃</h2>
        <div className="space-y-4">
          <div className="p-4 bg-[#F7F8FA] rounded-[12px]">
            <p className="text-[#191F28] font-semibold mb-2">데스크톱 (1024px 이상)</p>
            <p className="text-[#8B95A1] text-sm">최대 너비 1200px, 2~3컬럼 레이아웃</p>
          </div>
          <div className="p-4 bg-[#F7F8FA] rounded-[12px]">
            <p className="text-[#191F28] font-semibold mb-2">태블릿 (768px ~ 1023px)</p>
            <p className="text-[#8B95A1] text-sm">최대 너비 900px, 2컬럼 중심</p>
          </div>
          <div className="p-4 bg-[#F7F8FA] rounded-[12px]">
            <p className="text-[#191F28] font-semibold mb-2">모바일 (~767px)</p>
            <p className="text-[#8B95A1] text-sm">좌우 패딩 20px, 1컬럼 레이아웃</p>
          </div>
        </div>
      </div>
    </div>
  );
}
