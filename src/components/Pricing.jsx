import { Check, Download, Shield } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="bg-slate-950 text-slate-100 py-14 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Pricing & Download</h2>
          <p className="text-slate-400 mt-2">Choose the plan that fits your security posture.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-900 rounded-xl border border-slate-800 p-6">
            <div className="flex items-center gap-2 text-slate-300">
              <Shield className="h-5 w-5 text-slate-400" />
              <span className="text-sm uppercase tracking-wide">Free Tier</span>
            </div>
            <p className="mt-4 text-slate-200">$0 / month</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li className="flex gap-2 items-start"><Check className="h-4 w-4 text-teal-400 mt-0.5" /> Local FME-ABT Agent</li>
              <li className="flex gap-2 items-start"><Check className="h-4 w-4 text-teal-400 mt-0.5" /> Manual updates</li>
              <li className="flex gap-2 items-start"><Check className="h-4 w-4 text-teal-400 mt-0.5" /> Community support</li>
            </ul>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-slate-800 hover:bg-slate-700 border border-slate-700">
              <Download className="h-4 w-4" /> Download Agent
            </a>
          </div>

          <div className="bg-slate-900 rounded-xl border border-teal-700 p-6 ring-1 ring-teal-600/20">
            <div className="flex items-center gap-2 text-teal-300">
              <Shield className="h-5 w-5" />
              <span className="text-sm uppercase tracking-wide">Pro Tier</span>
            </div>
            <p className="mt-4 text-teal-300 font-semibold">$9 / month</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li className="flex gap-2 items-start"><Check className="h-4 w-4 text-teal-400 mt-0.5" /> Cloud dashboard sync</li>
              <li className="flex gap-2 items-start"><Check className="h-4 w-4 text-teal-400 mt-0.5" /> Real-time analytics</li>
              <li className="flex gap-2 items-start"><Check className="h-4 w-4 text-teal-400 mt-0.5" /> 24/7 alerts</li>
            </ul>
            <a href="#checkout" className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-teal-500 text-slate-900 font-semibold hover:bg-teal-400">
              Subscribe Pro
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
