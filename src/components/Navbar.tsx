import { ArrowRight, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = theme === "dark";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-8 md:px-12 h-20 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
          {mounted && (
            <img 
              src={isDark ? "/codeimage_dark.png" : "/codeimage.png"} 
              alt="NoteNest Logo" 
              className={`object-contain w-[180px] h-[80px] ${isDark ? 'scale-[2.2]' : ''}`}
            />
          )}
        </a>
        <div className="flex items-center gap-4">
          <a 
            href="https://console.mynotenest.app" 
            className="bg-notenest-green hover:bg-emerald-600 text-white font-bold py-2 px-4 md:py-3 md:px-6 rounded-full shadow-[0_4px_0_rgb(4,120,87)] hover:shadow-[0_2px_0_rgb(4,120,87)] hover:translate-y-[2px] transition-all flex items-center gap-2 text-sm md:text-base"
          >
            Get Started <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
