export default function Footer() {
  return (
    <footer id="about" className="bg-slate-950 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-6">
        <div>
          <p className="text-slate-200 font-semibold">FME-ABT Sentinel</p>
          <p className="mt-2 text-sm">Analytics, alerts, and system health dashboards for ransomware detection agents.</p>
        </div>
        <div>
          <p className="text-slate-300 font-medium">Company</p>
          <ul className="mt-2 space-y-1 text-sm">
            <li><a href="#about" className="hover:text-slate-200">About</a></li>
            <li><a href="#pricing" className="hover:text-slate-200">Pricing</a></li>
            <li><a href="#contact" className="hover:text-slate-200">Contact</a></li>
          </ul>
        </div>
        <div id="contact">
          <p className="text-slate-300 font-medium">Contact</p>
          <p className="mt-2 text-sm">security@fme-abt.com</p>
          <p className="mt-1 text-sm">© {new Date().getFullYear()} FME-ABT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
