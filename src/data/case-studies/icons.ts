import { BookOpen, Trophy, Users, BarChart2, TrendingUp, MessageSquare, Target } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type IconColor = 'red' | 'orange' | 'blue' | 'purple' | 'yellow';

const colorMap: Record<IconColor, string> = {
  red: 'text-red-600',
  orange: 'text-orange-600',
  blue: 'text-blue-600',
  purple: 'text-purple-600',
  yellow: 'text-yellow-600'
};

interface IconConfig {
  Icon: LucideIcon;
  className: string;
}

export const icons = {
  bookOpen: (color: IconColor): IconConfig => ({ Icon: BookOpen, className: colorMap[color] }),
  trophy: (color: IconColor): IconConfig => ({ Icon: Trophy, className: colorMap[color] }),
  users: (color: IconColor): IconConfig => ({ Icon: Users, className: colorMap[color] }),
  barChart: (color: IconColor): IconConfig => ({ Icon: BarChart2, className: colorMap[color] }),
  trendingUp: (color: IconColor): IconConfig => ({ Icon: TrendingUp, className: colorMap[color] }),
  messageSquare: (color: IconColor): IconConfig => ({ Icon: MessageSquare, className: colorMap[color] }),
  target: (color: IconColor): IconConfig => ({ Icon: Target, className: colorMap[color] })
};