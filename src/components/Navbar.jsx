import { Shield, Activity, Bell, Server, CreditCard, Info } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 bg-slate-950/80 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 text-teal-400">
          <Shield className="h-6 w-6" />
          <span className="font-semibold tracking-tight">FME-ABT Sentinel</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          <a href="#dashboard" className="hover:text-white transition-colors flex items-center gap-2"><Activity className="h-4 w-4" /> Dashboard</a>
          <a href="#alerts" className="hover:text-white transition-colors flex items-center gap-2"><Bell className="h-4 w-4" /> Live Alerts</a>
          <a href="#devices" className="hover:text-white transition-colors flex items-center gap-2"><Server className="h-4 w-4" /> Devices</a>
          <a href="#pricing" className="hover:text-white transition-colors flex items-center gap-2"><CreditCard className="h-4 w-4" /> Pricing</a>
          <a href="#about" className="hover:text-white transition-colors flex items-center gap-2"><Info className="h-4 w-4" /> About</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#pricing" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-teal-500/90 text-slate-900 font-medium hover:bg-teal-400 text-sm">
            Upgrade Pro
          </a>
        </div>
      </div>
    </header>
  );
}
