import { UtensilsCrossed, Coffee, ShoppingBag, AlertTriangle } from 'lucide-react';

interface CategoryCardsProps {
  onNavigate?: () => void;
}

const categoryData = [
  {
    id: 1,
    title: '가장 많이 쓴 카테고리',
    value: '식비',
    subtitle: '전체 소비의 34%',
    icon: UtensilsCrossed,
    color: '#3182F6',
    bgColor: '#EAF2FF',
  },
  {
    id: 2,
    title: '자주 쓴 사용처',
    value: '쿠팡 / 스타벅스',
    subtitle: '배달의민족',
    icon: Coffee,
    color: '#1B64DA',
    bgColor: '#EAF2FF',
  },
  {
    id: 3,
    title: '위험 신호',
    value: '카페 소비 초과',
    subtitle: '예산의 85%를 넘었어요',
    icon: AlertTriangle,
    color: '#F04452',
    bgColor: '#FEF3F2',
  },
  {
    id: 4,
    title: 'AI 인사이트',
    value: '주말 저녁 집중',
    subtitle: '소비가 몰려있어요',
    icon: ShoppingBag,
    color: '#16B364',
    bgColor: '#ECFDF3',
  },
];

export function CategoryCards({ onNavigate }: CategoryCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
      {categoryData.map((category) => {
        const Icon = category.icon;
        return (
          <div
            key={category.id}
            onClick={onNavigate}
            className="bg-white rounded-[20px] p-5 shadow-[0_2px_10px_rgba(15,23,42,0.06)] hover:shadow-[0_4px_20px_rgba(15,23,42,0.1)] transition-shadow cursor-pointer"
          >
            <div className="flex items-start justify-between mb-3">
              <p className="text-[#8B95A1] text-sm">{category.title}</p>
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: category.bgColor }}
              >
                <Icon className="w-5 h-5" style={{ color: category.color }} />
              </div>
            </div>
            <h3 className="text-[#191F28] font-semibold text-lg mb-1">
              {category.value}
            </h3>
            <p className="text-[#8B95A1] text-sm">{category.subtitle}</p>
          </div>
        );
      })}
    </div>
  );
}
