import React from 'react';
import { BookOpen, Trophy, Users, BarChart2, TrendingUp, MessageSquare, Target } from 'lucide-react';

export const createIcon = (Icon: typeof BookOpen, color: string) => {
  return <Icon className={`h-6 w-6 text-${color}-600`} />;
};

export const icons = {
  bookOpen: (color: string) => createIcon(BookOpen, color),
  trophy: (color: string) => createIcon(Trophy, color),
  users: (color: string) => createIcon(Users, color),
  barChart: (color: string) => createIcon(BarChart2, color),
  trendingUp: (color: string) => createIcon(TrendingUp, color),
  messageSquare: (color: string) => createIcon(MessageSquare, color),
  target: (color: string) => createIcon(Target, color),
};