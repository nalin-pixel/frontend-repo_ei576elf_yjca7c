import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative bg-slate-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="inline-flex items-center px-2 py-1 rounded-full bg-teal-500/10 text-teal-300 text-xs border border-teal-500/20">
            Enterprise Ransomware Analytics
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight">
            FME-ABT Sentinel
          </h1>
          <p className="mt-4 text-slate-300 leading-relaxed">
            Real-time detection insights, alerting, and system health dashboards for your FME-ABT agents. Built for security teams that need clarity and speed.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#dashboard" className="px-5 py-2.5 rounded-md bg-teal-500 text-slate-900 font-semibold hover:bg-teal-400">Open Dashboard</a>
            <a href="#pricing" className="px-5 py-2.5 rounded-md border border-slate-700 hover:bg-slate-800">Pricing & Download</a>
          </div>
        </div>
        <div className="h-[380px] md:h-[460px] rounded-xl overflow-hidden bg-slate-900/40 border border-slate-800">
          <Spline scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  );
}
