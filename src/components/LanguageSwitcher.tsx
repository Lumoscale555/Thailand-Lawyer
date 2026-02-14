import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const languageData = {
    en: { label: 'English', flagUrl: 'https://flagcdn.com/w40/gb.png' },
    th: { label: 'ไทย', flagUrl: 'https://flagcdn.com/w40/th.png' },
    zh: { label: '中文', flagUrl: 'https://flagcdn.com/w40/cn.png' },
    ru: { label: 'Русский', flagUrl: 'https://flagcdn.com/w40/ru.png' },
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger className="inline-flex items-center text-base font-bold px-5 py-3 bg-[#1a1a2e] text-white shadow-lg border-2 border-gold uppercase hover:bg-[#222248] transition duration-300">
          <span className="flex items-center gap-2">
            <img
              src={languageData[language].flagUrl}
              alt={languageData[language].label}
              className="w-5 h-5 rounded-sm"
            />
            <span>{languageData[language].label}</span>
          </span>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="end"
          className="bg-[#1a1a2e] border-2 border-gold text-white mt-2 shadow-xl"
        >
          {Object.entries(languageData).map(([code, { label, flagUrl }]) => (
            <DropdownMenuItem
              key={code}
              onClick={() => setLanguage(code as any)}
              className={`px-5 py-3 text-base font-medium tracking-wide uppercase flex items-center gap-3 ${
                language === code
                  ? 'bg-gold text-black font-bold'
                  : 'hover:bg-[#2d2d44] hover:text-gold'
              }`}
            >
              <img
                src={flagUrl}
                alt={label}
                className="w-5 h-5 rounded-sm"
              />
              <span>{label}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LanguageSwitcher;
