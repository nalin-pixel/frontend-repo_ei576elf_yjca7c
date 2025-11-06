import { Gauge, Activity, Cpu, AlertTriangle, Clock, FileText } from 'lucide-react';

const StatCard = ({ title, value, icon }) => (
  <div className="bg-slate-900 rounded-xl border border-slate-800 p-4 flex items-center gap-3">
    {icon}
    <div>
      <p className="text-slate-400 text-xs">{title}</p>
      <p className="text-slate-100 text-xl font-semibold">{value}</p>
    </div>
  </div>
);

const Sparkline = ({ points, color = '#14b8a6' }) => {
  const w = 500;
  const h = 120;
  const pad = 6;
  const max = Math.max(...points);
  const min = Math.min(...points);
  const range = Math.max(1, max - min);
  const step = (w - pad * 2) / (points.length - 1);
  const d = points
    .map((v, i) => {
      const x = pad + i * step;
      const y = h - pad - ((v - min) / range) * (h - pad * 2);
      return `${i === 0 ? 'M' : 'L'}${x},${y}`;
    })
    .join(' ');
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-36">
      <path d={d} fill="none" stroke={color} strokeWidth="2.5" />
      <linearGradient id="fill" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor={color} stopOpacity="0.25" />
        <stop offset="100%" stopColor={color} stopOpacity="0" />
      </linearGradient>
      <path d={`${d} L ${w - pad},${h - pad} L ${pad},${h - pad} Z`} fill="url(#fill)" opacity="0.6" />
    </svg>
  );
};

export default function Dashboard() {
  const labels = Array.from({ length: 24 }, (_, i) => `${i + 1}m`);
  const entropy = labels.map(() => 5 + Math.random() * 3);
  const burst = labels.map(() => 10 + Math.random() * 40);

  const alerts = [
    { level: 'High', reason: 'Suspicious encryption pattern', time: '2m ago', path: 'C:/Users/ops/docs/report.docx' },
    { level: 'Medium', reason: 'Unexpected file burst', time: '15m ago', path: 'C:/ProgramData/tmp/cache.tmp' },
    { level: 'Low', reason: 'Entropy spike', time: '45m ago', path: 'C:/Users/admin/Downloads/setup.exe' },
  ];

  return (
    <section id="dashboard" className="bg-slate-950 text-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-4">
          <StatCard title="Detection Accuracy" value="98.7%" icon={<Gauge className="text-teal-400 h-6 w-6" />} />
          <StatCard title="False Positive Rate" value="1.3%" icon={<Activity className="text-cyan-400 h-6 w-6" />} />
          <StatCard title="Memory Usage" value="432 MB" icon={<Cpu className="text-sky-400 h-6 w-6" />} />
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mt-6">
          <div className="lg:col-span-2 bg-slate-900 rounded-xl border border-slate-800 p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-slate-200">File Entropy</h3>
              <span className="text-xs text-slate-400">Last hour</span>
            </div>
            <Sparkline points={entropy} color="#14b8a6" />
          </div>

          <div className="bg-slate-900 rounded-xl border border-slate-800 p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-slate-200">Active Alerts</h3>
              <span className="text-xs text-slate-400">Stream</span>
            </div>
            <ul className="divide-y divide-slate-800">
              {alerts.map((a, i) => (
                <li key={i} className="py-3 flex items-start gap-3">
                  <AlertTriangle className={`h-5 w-5 mt-0.5 ${a.level === 'High' ? 'text-rose-400' : a.level === 'Medium' ? 'text-amber-400' : 'text-yellow-300'}`} />
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-slate-200">{a.level} • {a.reason}</p>
                    <p className="text-xs text-slate-400 truncate">{a.path}</p>
                  </div>
                  <span className="ml-auto text-xs text-slate-500">{a.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mt-6">
          <div className="lg:col-span-2 bg-slate-900 rounded-xl border border-slate-800 p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-slate-200">Burst Rate</h3>
              <span className="text-xs text-slate-400">Last hour</span>
            </div>
            <Sparkline points={burst} color="#22d3ee" />
          </div>
          <div className="bg-slate-900 rounded-xl border border-slate-800 p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-slate-200">Daily Detections & Uptime</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-teal-400" />
                <div className="flex-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-300">Uptime</span>
                    <span className="text-slate-200 font-medium">99.97%</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded">
                    <div className="h-full bg-teal-500 rounded" style={{ width: '99.97%' }} />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-cyan-400" />
                <div className="flex-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-300">Detections (24h)</span>
                    <span className="text-slate-200 font-medium">124</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded">
                    <div className="h-full bg-cyan-500 rounded" style={{ width: '62%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
