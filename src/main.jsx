import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Heart, Sun, Church, Cross } from 'lucide-react';

const App = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, [currentPage]);

  const cards = [
    {
      title: "恩典年岁",
      verse: "《诗篇》65:11",
      content: "你以恩典为年岁的冠冕，你的路径都滴下脂油。",
      description: "愿主引领你走过丰盛的路径，每一天都满溢着祂的慈爱与脂油。",
      icon: <Church className="w-12 h-12 text-yellow-400" />,
      pattern: "bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-700 via-red-900 to-black"
    },
    {
      title: "终岁看顾",
      verse: "《申命记》11:12",
      content: "是耶和华你神所眷顾的。从岁首到年终，耶和华你神的眼目时常看顾那地。",
      description: "在这一年的每一个瞬间，神信实的眼目必不离开你，赐你最深的平安。",
      icon: <Heart className="w-12 h-12 text-yellow-300" />,
      pattern: "bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-red-800 via-red-950 to-red-900"
    }
  ];

  const nextPage = () => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentPage((prev) => (prev + 1) % cards.length);
    }, 300);
  };

  const prevPage = () => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentPage((prev) => (prev - 1 + cards.length) % cards.length);
    }, 300);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 transition-colors duration-700 ${cards[currentPage].pattern} overflow-hidden font-serif`}>
      
      {/* 背景装饰灯笼 - 保持传统氛围 */}
      <div className="absolute top-0 w-full flex justify-around opacity-20 pointer-events-none">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className={`animate-bounce mt-${i * 4} transition-all duration-[4000ms]`} style={{ animationDelay: `${i * 0.7}s` }}>
             <svg width="40" height="60" viewBox="0 0 40 60">
                <rect x="5" y="10" width="30" height="35" rx="10" fill="#facc15" />
                <rect x="18" y="0" width="4" height="10" fill="#facc15" />
                <rect x="18" y="45" width="4" height="15" fill="#facc15" />
             </svg>
          </div>
        ))}
      </div>

      {/* 贺卡主体 */}
      <div className="relative w-full max-w-lg">
        <div className={`bg-white/5 backdrop-blur-md border border-yellow-500/30 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(250,204,21,0.15)] transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          {/* 装饰边框 */}
          <div className="absolute top-4 left-4 right-4 bottom-4 border border-yellow-500/20 rounded-2xl pointer-events-none"></div>
          
          <div className="flex flex-col items-center text-center space-y-8">
            {/* 图标 - 替换了星星 */}
            <div className="p-4 bg-red-950/50 rounded-full border border-yellow-500/50 shadow-inner ring-4 ring-yellow-500/10">
              {cards[currentPage].icon}
            </div>

            {/* 标题 */}
            <div className="space-y-2">
              <h2 className="text-yellow-500 text-sm tracking-[0.3em] uppercase font-light">新春祝福 • {cards[currentPage].title}</h2>
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto"></div>
            </div>

            {/* 经文内容 */}
            <div className="relative px-4">
              <span className="absolute -top-6 -left-2 text-6xl text-yellow-500/20 font-serif">“</span>
              <p className="text-2xl md:text-3xl text-yellow-100 leading-relaxed font-bold tracking-wide drop-shadow-lg">
                {cards[currentPage].content}
              </p>
              <span className="absolute -bottom-10 -right-2 text-6xl text-yellow-500/20 font-serif">”</span>
            </div>

            {/* 出处 */}
            <div className="text-yellow-500 font-medium italic text-lg pt-4">
              — {cards[currentPage].verse}
            </div>

            {/* 寄语 */}
            <p className="text-red-100/70 text-sm max-w-xs leading-relaxed">
              {cards[currentPage].description}
            </p>

            {/* 底部印章感装饰 */}
            <div className="pt-4">
              <div className="border-2 border-yellow-600 px-4 py-2 rounded text-yellow-600 font-bold text-xs transform -rotate-3 bg-red-950/20">
                主恩常在
              </div>
            </div>
          </div>
        </div>

        {/* 翻页控制 */}
        <div className="flex justify-between mt-12 px-4">
          <button 
            onClick={prevPage}
            className="flex items-center space-x-2 text-yellow-500/60 hover:text-yellow-500 transition-colors group"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs tracking-widest">上一份恩典</span>
          </button>
          
          <div className="flex space-x-2 items-center">
            {cards.map((_, i) => (
              <div 
                key={i} 
                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentPage ? 'bg-yellow-500 w-4' : 'bg-yellow-500/30'}`}
              />
            ))}
          </div>

          <button 
            onClick={nextPage}
            className="flex items-center space-x-2 text-yellow-500/60 hover:text-yellow-500 transition-colors group"
          >
            <span className="text-xs tracking-widest">下一份应许</span>
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* 底部版权/祝福语 */}
      <div className="absolute bottom-8 text-yellow-600/40 text-[10px] tracking-widest text-center w-full uppercase">
        Happy Lunar New Year &bull; Immanuel
      </div>
    </div>
  );
};

export default App;
import { createRoot } from 'react-dom/client'
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
