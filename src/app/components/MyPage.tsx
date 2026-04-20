import { User, CreditCard, Bell, Lock, FileText, LogOut, ChevronRight, Settings, Link as LinkIcon } from 'lucide-react';

interface MyPageProps {
  onNavigateToReports?: () => void;
}

const connectedAccounts = [
  {
    id: 1,
    name: 'KB국민은행',
    accountNumber: '***-****-1234',
    status: '연결됨',
    lastSync: '2026.04.20 14:23',
    color: '#F04452',
  },
  {
    id: 2,
    name: '신한카드',
    accountNumber: '****-****-**56',
    status: '연결됨',
    lastSync: '2026.04.20 14:23',
    color: '#1B64DA',
  },
  {
    id: 3,
    name: '카카오페이',
    accountNumber: '연동 완료',
    status: '연결됨',
    lastSync: '2026.04.20 14:20',
    color: '#F7E600',
  },
];

const myDataItems = [
  { icon: FileText, label: '챗봇 대화 기록', count: 42 },
  { icon: FileText, label: '저장한 답변', count: 8 },
  { icon: FileText, label: '리포트 보관함', count: 15 },
  { icon: FileText, label: '다운로드 기록', count: 3 },
];

const settingItems = [
  { icon: Bell, label: '알림 설정', description: '소비 알림, 리포트 알림 관리' },
  { icon: Lock, label: '개인정보 관리', description: '회원 정보 수정' },
  { icon: CreditCard, label: '비밀번호 변경', description: '보안 강화' },
  { icon: Settings, label: '앱 설정', description: '언어, 테마 등' },
];

export function MyPage({ onNavigateToReports }: MyPageProps) {
  const handleDataItemClick = (label: string) => {
    if (label === '리포트 보관함' && onNavigateToReports) {
      onNavigateToReports();
    }
  };

  return (
    <div className="space-y-8">
      {/* Profile Card */}
      <div className="bg-gradient-to-br from-[#EAF2FF] to-[#FFFFFF] rounded-[20px] p-6 lg:p-8 shadow-[0_2px_10px_rgba(15,23,42,0.06)]">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#3182F6] to-[#1B64DA] flex items-center justify-center flex-shrink-0">
            <User className="w-10 h-10 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-[#191F28] font-bold text-2xl lg:text-3xl mb-2">현강님</h2>
            <p className="text-[#8B95A1] mb-1">finchat@example.com</p>
            <p className="text-[#8B95A1] text-sm">가입일: 2026년 1월 15일</p>
          </div>
          <button className="px-6 h-[52px] bg-white text-[#3182F6] border border-[#3182F6] rounded-[12px] font-semibold hover:bg-[#EAF2FF] transition-colors">
            프로필 수정
          </button>
        </div>
      </div>

      {/* Connected Accounts */}
      <div className="bg-white rounded-[20px] p-6 lg:p-8 shadow-[0_2px_10px_rgba(15,23,42,0.06)]">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-[#191F28] font-bold text-xl lg:text-2xl">연결된 계정</h3>
          <button className="flex items-center gap-2 text-[#3182F6] hover:text-[#1B64DA] transition-colors">
            <LinkIcon className="w-5 h-5" />
            <span>새 계정 연결</span>
          </button>
        </div>
        <div className="space-y-4">
          {connectedAccounts.map((account) => (
            <div
              key={account.id}
              className="flex flex-col lg:flex-row lg:items-center justify-between p-5 bg-[#F7F8FA] rounded-[18px] gap-4"
            >
              <div className="flex items-center gap-4 flex-1">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${account.color}15` }}
                >
                  <CreditCard className="w-6 h-6" style={{ color: account.color }} />
                </div>
                <div className="flex-1">
                  <p className="text-[#191F28] font-semibold text-lg">{account.name}</p>
                  <p className="text-[#8B95A1] text-sm">{account.accountNumber}</p>
                  <p className="text-[#8B95A1] text-xs mt-1">마지막 동기화: {account.lastSync}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-[#ECFDF3] text-[#16B364] text-sm rounded-full">
                  {account.status}
                </span>
                <button className="px-4 h-[40px] bg-white text-[#191F28] border border-[#E5E8EB] rounded-[12px] hover:bg-[#F7F8FA] transition-colors">
                  재연결
                </button>
                <button className="px-4 h-[40px] bg-white text-[#F04452] border border-[#F04452] rounded-[12px] hover:bg-[#FEF3F2] transition-colors">
                  해제
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* My Data */}
      <div className="bg-white rounded-[20px] p-6 lg:p-8 shadow-[0_2px_10px_rgba(15,23,42,0.06)]">
        <h3 className="text-[#191F28] font-bold text-xl lg:text-2xl mb-6">내 데이터</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {myDataItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                onClick={() => handleDataItemClick(item.label)}
                className="p-5 bg-[#F7F8FA] rounded-[18px] hover:bg-[#EAF2FF] transition-colors text-left group"
              >
                <div className="flex items-center justify-between mb-3">
                  <Icon className="w-6 h-6 text-[#8B95A1] group-hover:text-[#3182F6] transition-colors" />
                  <ChevronRight className="w-5 h-5 text-[#8B95A1] group-hover:text-[#3182F6] transition-colors" />
                </div>
                <p className="text-[#191F28] font-semibold mb-1">{item.label}</p>
                <p className="text-[#3182F6] text-2xl font-bold">{item.count}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Settings */}
      <div className="bg-white rounded-[20px] p-6 lg:p-8 shadow-[0_2px_10px_rgba(15,23,42,0.06)]">
        <h3 className="text-[#191F28] font-bold text-xl lg:text-2xl mb-6">설정</h3>
        <div className="space-y-3">
          {settingItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                className="w-full flex items-center justify-between p-5 hover:bg-[#F7F8FA] rounded-[18px] transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#F7F8FA] group-hover:bg-[#EAF2FF] flex items-center justify-center transition-colors">
                    <Icon className="w-6 h-6 text-[#8B95A1] group-hover:text-[#3182F6] transition-colors" />
                  </div>
                  <div className="text-left">
                    <p className="text-[#191F28] font-semibold">{item.label}</p>
                    <p className="text-[#8B95A1] text-sm">{item.description}</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-[#8B95A1] group-hover:text-[#3182F6] transition-colors" />
              </button>
            );
          })}
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-white rounded-[20px] p-6 lg:p-8 shadow-[0_2px_10px_rgba(15,23,42,0.06)]">
        <div className="space-y-3">
          <button className="w-full flex items-center justify-between p-5 hover:bg-[#FFF4E5] rounded-[18px] transition-colors group">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#FFF4E5] flex items-center justify-center">
                <LogOut className="w-6 h-6 text-[#F04452]" />
              </div>
              <div className="text-left">
                <p className="text-[#191F28] font-semibold">로그아웃</p>
                <p className="text-[#8B95A1] text-sm">현재 계정에서 로그아웃합니다</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-[#8B95A1]" />
          </button>
          <button className="w-full flex items-center justify-between p-5 hover:bg-[#FEF3F2] rounded-[18px] transition-colors group">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#FEF3F2] flex items-center justify-center">
                <User className="w-6 h-6 text-[#F04452]" />
              </div>
              <div className="text-left">
                <p className="text-[#F04452] font-semibold">회원 탈퇴</p>
                <p className="text-[#8B95A1] text-sm">모든 데이터가 영구 삭제됩니다</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-[#F04452]" />
          </button>
        </div>
      </div>
    </div>
  );
}
