import React from 'react';
import { 
  Mail, 
  ExternalLink,
  MapPin,
  Calendar
} from 'lucide-react';

const LinkButton = ({ href, icon: Icon, title, subtitle, color = "blue", customIcon }: {
  href: string;
  icon?: React.ElementType;
  title: string;
  subtitle?: string;
  color?: string;
  customIcon?: React.ReactNode;
}) => {
  const colorClasses = {
    blue: "from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
    purple: "from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700",
    pink: "from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700",
    green: "from-green-500 to-green-600 hover:from-green-600 hover:to-green-700",
    orange: "from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700",
    red: "from-red-500 to-red-600 hover:from-red-600 hover:to-red-700",
    gray: "from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700",
    black: "from-gray-900 to-black hover:from-black hover:to-gray-800",
    yellow: "from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700"
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative block w-full p-4 rounded-2xl bg-gradient-to-r ${colorClasses[color as keyof typeof colorClasses]} 
                 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 
                 backdrop-blur-sm border border-white/20 hover:border-white/30`}
    >
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          {customIcon ? (
            <div className="w-6 h-6 group-hover:scale-110 transition-transform duration-300">
              {customIcon}
            </div>
          ) : (
            Icon && <Icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-lg font-semibold group-hover:text-white/90 transition-colors">
            {title}
          </p>
          {subtitle && (
            <p className="text-sm text-white/70 group-hover:text-white/60 transition-colors">
              {subtitle}
            </p>
          )}
        </div>
        <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
      </div>
      
      {/* Shine effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent 
                      translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
    </a>
  );
};

const RainDrop = ({ delay, duration, left }: { delay: number; duration: number; left: string }) => (
  <div
    className="absolute w-0.5 bg-gradient-to-b from-cyan-300/80 via-blue-400/60 to-transparent animate-pulse"
    style={{
      left,
      height: '150px',
      animation: `rain ${duration}s linear ${delay}s infinite`,
      top: '-150px'
    }}
  />
);

const Cloud = ({ delay, duration, size, top }: { delay: number; duration: number; size: string; top: string }) => (
  <div
    className={`absolute ${size} opacity-70`}
    style={{
      animation: `cloudMove ${duration}s linear ${delay}s infinite`,
      top,
      left: '-300px'
    }}
  >
    <svg viewBox="0 0 120 50" className="w-full h-full fill-gray-700/90 drop-shadow-lg">
      <path d="M25,40 Q10,25 25,20 Q30,10 45,20 Q55,5 70,20 Q80,10 90,20 Q105,25 90,40 Z" />
      <circle cx="30" cy="30" r="12" className="fill-gray-600/80" />
      <circle cx="55" cy="25" r="18" className="fill-gray-600/80" />
      <circle cx="80" cy="30" r="15" className="fill-gray-600/80" />
      <circle cx="40" cy="35" r="8" className="fill-gray-500/60" />
      <circle cx="70" cy="35" r="10" className="fill-gray-500/60" />
    </svg>
  </div>
);

const Star = ({ delay, left, top, size }: { delay: number; left: string; top: string; size: string }) => (
  <div
    className={`absolute ${size} text-cyan-200/80`}
    style={{
      left,
      top,
      animation: `twinkle 3s ease-in-out ${delay}s infinite`
    }}
  >
    ✦
  </div>
);

// GitHub Logo
const GitHubLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

// LinkedIn Logo
const LinkedInLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

// YouTube Logo
const YouTubeLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

// X (Twitter) Logo
const XLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

// Snapchat Logo
const SnapchatLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M12 0C6.477 0 2 4.477 2 10c0 5.165 3.927 9.424 9 9.95V24l1-1 1 1v-4.05c5.073-.526 9-4.785 9-9.95 0-5.523-4.477-10-10-10zm0 18c-1.657 0-3-1.343-3-3 0-.844.345-1.61.899-2.164A2.982 2.982 0 0 1 12 12c.794 0 1.51.31 2.101.836A2.986 2.986 0 0 1 15 15c0 1.657-1.343 3-3 3z"/>
  </svg>
);

// Spotify Logo
const SpotifyLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
);

// Reddit Logo
const RedditLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
  </svg>
);

// Pinterest Logo
const PinterestLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378 0 0-.599 2.282-.744 2.840-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24.001 12.017 24.001c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
  </svg>
);

function App() {
  // Generate rain drops with more intensity and longer fall
  const rainDrops = Array.from({ length: 100 }, (_, i) => (
    <RainDrop
      key={i}
      delay={Math.random() * 3}
      duration={1.2 + Math.random() * 1.5}
      left={`${Math.random() * 100}%`}
    />
  ));

  // Generate bigger moving clouds
  const clouds = Array.from({ length: 8 }, (_, i) => (
    <Cloud
      key={i}
      delay={Math.random() * 15}
      duration={20 + Math.random() * 15}
      size={i % 3 === 0 ? "w-48 h-24" : i % 3 === 1 ? "w-40 h-20" : "w-36 h-18"}
      top={`${Math.random() * 20}%`}
    />
  ));

  // Generate twinkling stars
  const stars = Array.from({ length: 40 }, (_, i) => (
    <Star
      key={i}
      delay={Math.random() * 3}
      left={`${Math.random() * 100}%`}
      top={`${Math.random() * 50}%`}
      size={Math.random() > 0.5 ? "text-sm" : "text-xs"}
    />
  ));

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black relative overflow-hidden">
      {/* Animated rain background */}
      <div className="absolute inset-0 overflow-hidden">
        {rainDrops}
        {clouds}
        {stars}
        
        {/* Darker atmospheric effects */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-slate-800/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gray-800/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-slate-700/15 rounded-full blur-3xl animate-pulse delay-500" />
        
        {/* Lightning effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-transparent to-slate-900/30 pointer-events-none" />
      </div>

      <style jsx>{`
        @keyframes rain {
          0% {
            transform: translateY(-150px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(calc(100vh + 200px));
            opacity: 0;
          }
        }
        
        @keyframes cloudMove {
          0% {
            transform: translateX(-300px);
            opacity: 0.5;
          }
          10% {
            opacity: 0.8;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            transform: translateX(calc(100vw + 300px));
            opacity: 0.5;
          }
        }
        
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.3;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
      `}</style>

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-md">
        {/* Profile Section */}
        <div className="text-center mb-8">
          <div className="relative inline-block mb-6">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-slate-600 to-gray-700 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/10">
                <img 
                  src="/WhatsApp Image 2025-06-18 at 10.53.36 AM.jpeg" 
                  alt="takeru profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-gray-200 to-slate-300 bg-clip-text text-transparent">
           Dev
          </h1>
          
          <div className="flex items-center justify-center space-x-4 text-white/50 text-sm mb-6">
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>Delhi, India</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>Available</span>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="space-y-4">
          <LinkButton 
            href="https://github.com/takeruyadav" 
            customIcon={<GitHubLogo />}
            title="GitHub Profile" 
            subtitle="Open source projects and contributions"
            color="gray"
          />
          
          <LinkButton 
            href="https://www.linkedin.com/in/devender-kumar-90b9b2320/" 
            customIcon={<LinkedInLogo />}
            title="LinkedIn" 
            subtitle="Professional network and experience"
            color="blue"
          />
          
          <LinkButton 
            href="mailto:debbyadab@gmail.com" 
            icon={Mail} 
            title="Email Me" 
            subtitle="Let's discuss opportunities"
            color="green"
          />
          
          <LinkButton 
            href="https://www.youtube.com/@debbyadab" 
            customIcon={<YouTubeLogo />}
            title="YouTube" 
            subtitle="Coding tutorials and tech talks"
            color="red"
          />
          
          <LinkButton 
            href="https://x.com/takerudee?t=hJdKhMZG2ytfFlwLHATUxg&s=09" 
            customIcon={<XLogo />}
            title="X (Twitter)" 
            subtitle="Daily thoughts and tech updates"
            color="black"
          />

          <LinkButton 
            href="https://www.snapchat.com/add/deb_yadab?share_id=oQBm7gWZ2Vk&locale=en-GB" 
            customIcon={<SnapchatLogo />}
            title="Snapchat" 
            subtitle="Daily moments and stories"
            color="yellow"
          />

          <LinkButton 
            href="https://open.spotify.com/user/314jj6le6naued4rbzwrdsqeoxnu" 
            customIcon={<SpotifyLogo />}
            title="Spotify" 
            subtitle="My music playlists and favorites"
            color="green"
          />

          <LinkButton 
            href="https://www.reddit.com/user/deb_yadab/" 
            customIcon={<RedditLogo />}
            title="Reddit" 
            subtitle="Community discussions and posts"
            color="orange"
          />

          <LinkButton 
            href="https://in.pinterest.com/debbyadab/?invite_code=7dcab94142494ba9a05b077e764dc15d&sender=931400904094137405" 
            customIcon={<PinterestLogo />}
            title="Pinterest" 
            subtitle="Design inspiration and ideas"
            color="red"
          />
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-4 border border-white/5">
            <p className="text-white/50 text-sm">
              © 2025 Dev. All rights reserved.
            </p>
            <p className="text-white/30 text-xs mt-1">
              This page is always up to date with my latest links and information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;