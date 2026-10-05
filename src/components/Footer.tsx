import { Globe, Instagram, Linkedin, Music } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Footer() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = theme === "dark";

  const SOCIAL_LINKS = [
    { name: 'Website', icon: <Globe className="w-5 h-5" />, color: 'hover:text-[#3B82F6]', url: 'https://www.mynotenest.app' },
    { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, color: 'hover:text-[#E1306C]', url: 'https://www.instagram.com/notenest.app/' },
    { name: 'TikTok', icon: <Music className="w-5 h-5" />, color: 'hover:text-[#ff0050]', url: 'https://www.tiktok.com/@notenest_app' },
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, color: 'hover:text-[#0A66C2]', url: 'https://www.linkedin.com/company/notenestapp/posts/' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-6 text-center">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          {mounted && (
            <img 
              src={isDark ? "/codeimage_dark.png" : "/codeimage.png"} 
              alt="NoteNest Logo" 
              className={`object-contain w-[180px] h-[80px] ${isDark ? 'scale-[2.2]' : ''}`}
            />
          )}
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-6 mb-6">
          <Link to="/privacy" className="hover:text-white transition-colors font-medium">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white transition-colors font-medium">Terms of Service</Link>
          <Link to="/delete-account" className="hover:text-white transition-colors font-medium text-red-400">Delete Account</Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-8">
          {SOCIAL_LINKS.map((social) => (
            <a 
              key={social.name} 
              href={social.url} 
              target="_blank" 
              rel="noreferrer"
              className={`flex items-center gap-2 text-gray-400 transition-colors ${social.color}`}
              aria-label={social.name}
            >
              {social.icon}
              <span className="font-semibold text-sm">{social.name}</span>
            </a>
          ))}
        </div>
        
        <p>© {new Date().getFullYear()} NoteNest. All rights reserved.</p>
      </div>
    </footer>
  );
}
