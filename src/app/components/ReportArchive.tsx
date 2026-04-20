import { Calendar, Download, Share2, ChevronRight, X, TrendingUp, TrendingDown } from 'lucide-react';
import { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const monthlyReports = [
  {
    id: 1,
    title: '2026년 4월 월간 리포트',
    period: '2026.04.01 - 2026.04.30',
    totalSpending: 1286000,
    keyInsight: '식비 중심으로 증가, 카페·쇼핑 항목도 상승',
    trend: '+9.6%',
    isIncrease: true,
  },
  {
    id: 2,
    title: '2026년 3월 월간 리포트',
    period: '2026.03.01 - 2026.03.31',
    totalSpending: 1174000,
    keyInsight: '전반적으로 안정적인 소비 패턴 유지',
    trend: '-2.3%',
    isIncrease: false,
  },
  {
    id: 3,
    title: '2026년 2월 월간 리포트',
    period: '2026.02.01 - 2026.02.28',
    totalSpending: 1201000,
    keyInsight: '설 연휴로 인한 일시적 지출 증가',
    trend: '+15.2%',
    isIncrease: true,
  },
];

const weeklyReports = [
  {
    id: 1,
    title: '4월 3주차 주간 리포트',
    period: '2026.04.14 - 2026.04.20',
    totalSpending: 324000,
    keyInsight: '주말 외식 비용 증가, 평일 카페 이용 감소',
  },
  {
    id: 2,
    title: '4월 2주차 주간 리포트',
    period: '2026.04.07 - 2026.04.13',
    totalSpending: 298000,
    keyInsight: '쇼핑 지출 집중, 식비는 평균 이하',
  },
  {
    id: 3,
    title: '4월 1주차 주간 리포트',
    period: '2026.04.01 - 2026.04.06',
    totalSpending: 356000,
    keyInsight: '월초 고정 지출 발생, 전반적으로 높은 소비',
  },
];

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

export function ReportArchive() {
  const [activeTab, setActiveTab] = useState<'monthly' | 'weekly'>('monthly');
  const [selectedReportId, setSelectedReportId] = useState<number | null>(null);

  const currentReports = activeTab === 'monthly' ? monthlyReports : weeklyReports;
  const selectedReport = currentReports.find(r => r.id === selectedReportId);

  const handleViewDetail = (reportId: number) => {
    setSelectedReportId(reportId);
  };

  const handleCloseDetail = () => {
    setSelectedReportId(null);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <h1 className="text-[#191F28] font-bold text-2xl lg:text-3xl">분석리포트</h1>
        <div className="flex items-center gap-3">
          <Calendar className="w-5 h-5 text-[#8B95A1]" />
          <span className="text-[#8B95A1]">자동 생성된 리포트</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-[20px] p-2 shadow-[0_2px_10px_rgba(15,23,42,0.06)] inline-flex gap-2">
        <button
          onClick={() => setActiveTab('monthly')}
          className={`px-6 py-3 rounded-[12px] font-semibold transition-colors ${
            activeTab === 'monthly'
              ? 'bg-[#3182F6] text-white'
              : 'text-[#191F28] hover:bg-[#F7F8FA]'
          }`}
        >
          월간 리포트
        </button>
        <button
          onClick={() => setActiveTab('weekly')}
          className={`px-6 py-3 rounded-[12px] font-semibold transition-colors ${
            activeTab === 'weekly'
              ? 'bg-[#3182F6] text-white'
              : 'text-[#191F28] hover:bg-[#F7F8FA]'
          }`}
        >
          주간 리포트
        </button>
      </div>

      {/* Report List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentReports.map((report) => (
          <div
            key={report.id}
            className="bg-white rounded-[20px] p-6 shadow-[0_2px_10px_rgba(15,23,42,0.06)] hover:shadow-[0_4px_20px_rgba(15,23,42,0.1)] transition-all cursor-pointer group"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-[#191F28] font-semibold text-lg mb-1 group-hover:text-[#3182F6] transition-colors">
                  {report.title}
                </h3>
                <p className="text-[#8B95A1] text-sm">{report.period}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-[#8B95A1] group-hover:text-[#3182F6] transition-colors" />
            </div>

            {/* Total Spending */}
            <div className="mb-4 p-4 bg-[#F7F8FA] rounded-[12px]">
              <p className="text-[#8B95A1] text-sm mb-1">총 소비</p>
              <div className="flex items-end justify-between">
                <p className="text-[#191F28] font-bold text-2xl">
                  {report.totalSpending.toLocaleString()}원
                </p>
                {report.trend && (
                  <span
                    className={`text-sm font-semibold ${
                      report.isIncrease ? 'text-[#F04452]' : 'text-[#16B364]'
                    }`}
                  >
                    {report.trend}
                  </span>
                )}
              </div>
            </div>

            {/* Key Insight */}
            <div className="mb-6">
              <p className="text-[#8B95A1] text-sm mb-2">핵심 분석</p>
              <p className="text-[#191F28] leading-relaxed">{report.keyInsight}</p>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleViewDetail(report.id);
                }}
                className="flex-1 h-[44px] bg-[#3182F6] text-white rounded-[12px] font-semibold hover:bg-[#1B64DA] transition-colors"
              >
                상세 보기
              </button>
              <button className="w-[44px] h-[44px] bg-[#F2F4F6] rounded-[12px] flex items-center justify-center hover:bg-[#E5E8EB] transition-colors">
                <Download className="w-5 h-5 text-[#191F28]" />
              </button>
              <button className="w-[44px] h-[44px] bg-[#F2F4F6] rounded-[12px] flex items-center justify-center hover:bg-[#E5E8EB] transition-colors">
                <Share2 className="w-5 h-5 text-[#191F28]" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State for More Reports */}
      {currentReports.length < 6 && !selectedReport && (
        <div className="bg-white rounded-[20px] p-8 shadow-[0_2px_10px_rgba(15,23,42,0.06)] text-center">
          <p className="text-[#8B95A1]">
            {activeTab === 'monthly'
              ? '매월 1일에 자동으로 리포트가 생성됩니다'
              : '매주 월요일에 자동으로 리포트가 생성됩니다'}
          </p>
        </div>
      )}

      {/* Report Detail */}
      {selectedReport && (
        <div className="space-y-6">
          {/* Detail Header */}
          <div className="bg-white rounded-[20px] p-6 shadow-[0_2px_10px_rgba(15,23,42,0.06)]">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-[#191F28] font-bold text-2xl mb-2">{selectedReport.title}</h2>
                <p className="text-[#8B95A1]">{selectedReport.period}</p>
              </div>
              <button
                onClick={handleCloseDetail}
                className="w-10 h-10 rounded-full hover:bg-[#F7F8FA] flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-[#191F28]" />
              </button>
            </div>
          </div>

          {/* Summary Card */}
          <div className="bg-gradient-to-br from-[#EAF2FF] to-[#FFFFFF] rounded-[20px] p-6 lg:p-8 shadow-[0_2px_10px_rgba(15,23,42,0.06)]">
            <div className="grid lg:grid-cols-3 gap-6">
              <div>
                <p className="text-[#8B95A1] mb-2">총 소비 금액</p>
                <p className="text-[#191F28] font-bold text-3xl">{selectedReport.totalSpending.toLocaleString()}원</p>
              </div>
              <div>
                <p className="text-[#8B95A1] mb-2">지난 기간 대비</p>
                <div className="flex items-center gap-2">
                  {selectedReport.isIncrease ? (
                    <TrendingUp className="w-5 h-5 text-[#F04452]" />
                  ) : (
                    <TrendingDown className="w-5 h-5 text-[#16B364]" />
                  )}
                  <p className={`font-bold text-2xl ${selectedReport.isIncrease ? 'text-[#F04452]' : 'text-[#16B364]'}`}>
                    {selectedReport.trend}
                  </p>
                </div>
              </div>
              <div className="lg:col-span-1">
                <div className="bg-white rounded-[18px] p-4">
                  <p className="text-[#191F28]">{selectedReport.keyInsight}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Category Analysis */}
          <div className="bg-white rounded-[20px] p-6 lg:p-8 shadow-[0_2px_10px_rgba(15,23,42,0.06)]">
            <h3 className="text-[#191F28] font-bold text-xl lg:text-2xl mb-6">카테고리별 소비</h3>
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
            <h3 className="text-[#191F28] font-bold text-xl lg:text-2xl mb-6">소비 집중 시간대</h3>
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
              <p className="text-[#191F28]">저녁 시간대에 소비가 집중되어 있어요.</p>
            </div>
          </div>

          {/* Merchant Ranking */}
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-[20px] p-6 lg:p-8 shadow-[0_2px_10px_rgba(15,23,42,0.06)]">
              <h3 className="text-[#191F28] font-bold text-xl lg:text-2xl mb-6">자주 사용한 가맹점</h3>
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

            {/* AI Summary */}
            <div className="bg-gradient-to-br from-[#3182F6] to-[#1B64DA] rounded-[20px] p-6 lg:p-8 text-white shadow-[0_2px_10px_rgba(49,130,246,0.2)]">
              <h3 className="font-bold text-xl lg:text-2xl mb-4">AI 종합 분석</h3>
              <div className="bg-white/10 backdrop-blur-sm rounded-[18px] p-5 leading-relaxed">
                <p>
                  이번 기간 소비는 식비와 카페에 집중되어 있어요.
                  특히 저녁 시간대에 반복 소비가 나타납니다.
                  줄이기 쉬운 시작점은 카페와 배달 소비예요.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
