import React, { useState, useEffect } from 'react';
import { 
  Terminal, Shield, Server, Code, Database, 
  Cpu, Globe, Lock, ChevronRight, Mail, 
  Linkedin, Github, FileText, Download, ExternalLink,
  Menu, X, Hash, Award, Cloud, Skull, Crosshair, Target
} from 'lucide-react';

// --- DATA (Move to src/data/ in local project) ---

const experienceData = [
  {
    company: "Agencia IDEA",
    role: "Administrador de Sistemas",
    period: "Sept 2025 - Actual",
    location: "Sevilla, España",
    desc: "Migración de servidores, administración de entornos Windows/Linux. Base sólida de arquitectura de sistemas para futuros vectores de ataque.",
    color: "blue"
  },
  {
    company: "Consejería de Cultura",
    role: "Técnico Microinformático",
    period: "Feb 2025 - Sept 2025",
    location: "Sevilla, España",
    desc: "Soporte usuarios y seguridad endpoint. Configuración de VPNs y endurecimiento de puestos de trabajo.",
    color: "purple"
  },
  {
    company: "Italtel S.A.",
    role: "DevOps Junior (Prácticas)",
    period: "Abr 2024 - Jun 2024",
    location: "Sevilla, España",
    desc: "Automatización de tareas. Conocimiento de pipelines CI/CD, vital para DevSecOps.",
    color: "red"
  },
  {
    company: "Babylon Radio",
    role: "Desarrollador Web (Prácticas)",
    period: "Mar 2022 - Jun 2022",
    location: "Dublín, Irlanda",
    desc: "Desarrollo web y optimización. Entendimiento de la estructura web para auditorías de seguridad.",
    color: "blue"
  }
];

const educationData = [
  {
    school: "MONLAU CENTRE D'ESTUDIS",
    degree: "Máster FP Ciberseguridad (CETI)",
    period: "2024 - 2025",
    grade: "9.46/10",
    details: "Foco total en Hacking Ético, Análisis Forense y Normativas de Seguridad."
  },
  {
    school: "IES DELGADO HERNÁNDEZ",
    degree: "G.S. Administración de Sistemas Informáticos en Red (ASIR)",
    period: "2022 - 2024",
    grade: "8.38/10"
  },
  {
    school: "IES DELGADO HERNÁNDEZ",
    degree: "G.M. Sistemas Microinformáticos y Redes (SMR)",
    period: "2020 - 2022",
    grade: "8.30/10"
  }
];

const certifications = [
  "eJPTv2 (Objetivo Actual)",
  "SC-900 Microsoft",
  "AZ-900 Microsoft",
  "DP-900 Microsoft",
  "AI-900 Microsoft",
  "CCNA1 & CCNA2 - Cisco",
  "IT Specialist Cybersecurity",
  "IT Specialist Cloud Computing",
  "IT Specialist AI"
];

const skills = [
  { name: "Pentesting & Red Teaming", level: 80, color: "bg-red-600" },
  { name: "Linux/Windows Admin", level: 90, color: "bg-blue-600" },
  { name: "Automatización & DevOps", level: 75, color: "bg-green-600" },
  { name: "Virtualización", level: 85, color: "bg-orange-600" },
  { name: "Docker & Cloud Security", level: 70, color: "bg-cyan-600" }
];

const projects = [
  {
    title: "VulnScan Lab",
    category: "Red Team",
    tech: ["Kali", "Nmap", "Metasploit"],
    desc: "Entorno virtualizado donde simulo ataques a máquinas Windows Legacy y exploto vulnerabilidades conocidas (BlueKeep, EternalBlue).",
    color: "border-red-600"
  },
  {
    title: "AD Attack Paths",
    category: "Active Directory",
    tech: ["BloodHound", "Mimikatz", "PowerShell"],
    desc: "Investigación sobre escalada de privilegios en Directorio Activo mal configurado. Uso de BloodHound para mapear rutas de ataque.",
    color: "border-orange-500"
  },
  {
    title: "Auto-Backup System",
    category: "DevSecOps",
    tech: ["Python", "Docker", "Jenkins"],
    desc: "Sistema automatizado de backups con verificación de integridad, asegurando la disponibilidad (Triada CIA).",
    color: "border-purple-500"
  }
];

// --- COMPONENTS ---

const SectionTitle = ({ icon: Icon, title, color = "text-cyan-400" }) => (
  <div className="flex items-center gap-3 mb-8 border-b border-gray-800 pb-4 animate-slideIn">
    <Icon className={`w-8 h-8 ${color}`} />
    <h2 className="text-3xl font-bold text-white font-mono uppercase tracking-tight">
      <span className={color}>./</span>{title}
    </h2>
  </div>
);

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState('');
  
  // State for the icon swapping animation
  const [heroIcon, setHeroIcon] = useState('shield'); // 'shield' or 'skull'

  const fullText = "root@daniel:~$ target: professional_pentester";

  // Typing effect
  useEffect(() => {
    if (activeSection === 'home') {
      let i = 0;
      setTypedText('');
      const interval = setInterval(() => {
        setTypedText(fullText.slice(0, i + 1));
        i++;
        if (i > fullText.length) clearInterval(interval);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [activeSection]);

  // Icon swapping effect (Every 3 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIcon(prev => prev === 'shield' ? 'skull' : 'shield');
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { id: 'home', label: 'TERMINAL', icon: Terminal },
    { id: 'cv', label: 'TRAYECTORIA', icon: FileText },
    { id: 'projects', label: 'WRITE-UPS', icon: Crosshair }, // Changed icon to Crosshair for Red Team feel
    { id: 'skills', label: 'ARSENAL', icon: Shield },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div className="flex flex-col items-center justify-center min-h-[70vh] text-center animate-fadeIn">
            
            {/* DYNAMIC ICON CONTAINER */}
            <div className="mb-8 relative h-40 w-40 flex items-center justify-center">
              <div className={`absolute inset-0 blur-3xl rounded-full transition-colors duration-1000 ${heroIcon === 'shield' ? 'bg-blue-600/30' : 'bg-red-600/30'}`}></div>
              
              <div className={`transition-all duration-700 transform absolute ${heroIcon === 'shield' ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 -rotate-90'}`}>
                 <Shield className="w-32 h-32 text-cyan-400" />
              </div>
              
              <div className={`transition-all duration-700 transform absolute ${heroIcon === 'skull' ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 rotate-90'}`}>
                 <Skull className="w-32 h-32 text-red-500" />
              </div>
            </div>
            
            {/* STATUS BAR */}
            <div className="bg-black/50 border border-gray-800 p-4 rounded mb-8 font-mono text-sm md:text-base w-full max-w-2xl mx-auto shadow-lg shadow-gray-900/50 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
              <p className="text-green-400">
                <span className="text-gray-500 mr-2">$</span>
                {typedText}
                <span className="animate-blink">_</span>
              </p>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white mb-2 tracking-tighter">
              DANIEL <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">ALBARRÁN</span>
            </h1>
            
            <div className="flex items-center gap-3 mb-8">
              <span className="px-3 py-1 bg-red-900/30 border border-red-800 text-red-400 text-xs font-bold tracking-widest uppercase rounded">
                Red Team Oriented
              </span>
              <span className="px-3 py-1 bg-blue-900/30 border border-blue-800 text-blue-400 text-xs font-bold tracking-widest uppercase rounded">
                SysAdmin Solid Base
              </span>
            </div>
            
            <p className="text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
              Administrador de Sistemas evolucionando hacia <span className="text-white font-bold">Ciberseguridad Ofensiva</span>.
              Uso mi conocimiento de infraestructuras para entender cómo romperlas y asegurarlas.
            </p>

            {/* ACTION BUTTONS */}
            <div className="flex gap-5 flex-wrap justify-center">
               {/* PROYECTOS - PURPLE BUTTON as requested */}
              <button 
                onClick={() => setActiveSection('projects')}
                className="group relative px-8 py-3 border border-purple-500 text-purple-400 font-bold rounded overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
              >
                <div className="absolute inset-0 w-0 bg-purple-900/20 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative flex items-center gap-2">
                  VER WRITE-UPS <ChevronRight className="w-4 h-4" />
                </span>
              </button>

              {/* EXPERIENCIA - CYAN BUTTON */}
              <button 
                onClick={() => setActiveSection('cv')}
                className="group relative px-8 py-3 border border-cyan-500 text-cyan-400 font-bold rounded overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]"
              >
                <div className="absolute inset-0 w-0 bg-cyan-900/20 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative flex items-center gap-2">
                  VER TRAYECTORIA <FileText className="w-4 h-4" />
                </span>
              </button>
            </div>
          </div>
        );

      case 'cv':
        return (
          <div className="animate-fadeIn">
            <SectionTitle icon={FileText} title="Experiencia & Background" />
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl text-white font-bold mb-6 flex items-center gap-2 border-l-4 border-blue-500 pl-3">
                   Trayectoria
                </h3>
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-700 before:to-transparent">
                  {experienceData.map((item, idx) => (
                    <div key={idx} className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                       {/* Timeline Dot */}
                      <div className={`flex items-center justify-center w-4 h-4 rounded-full border-2 border-gray-800 bg-slate-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute left-4 md:left-1/2 mt-1.5 ${item.color === 'red' ? 'bg-red-500 border-red-500' : 'bg-gray-800'}`}></div>
                      
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-900/40 p-5 rounded border border-gray-800 hover:border-gray-600 transition-all ml-10 md:ml-0">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-bold text-white">{item.role}</h4>
                          <span className="text-xs font-mono text-gray-500">{item.period}</span>
                        </div>
                        <div className="text-sm text-cyan-500 mb-2 font-mono">{item.company}</div>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl text-white font-bold mb-6 flex items-center gap-2 border-l-4 border-purple-500 pl-3">
                   Formación
                </h3>
                <div className="space-y-4">
                  {educationData.map((edu, idx) => (
                    <div key={idx} className="group relative p-6 bg-gray-900/20 border border-gray-800 hover:border-purple-500/50 rounded transition-colors">
                      <div className="absolute top-0 left-0 w-1 h-full bg-gray-800 group-hover:bg-purple-600 transition-colors rounded-l"></div>
                      <h4 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">{edu.degree}</h4>
                      <p className="text-sm text-gray-500 mb-2">{edu.school}</p>
                      <p className="text-xs text-gray-600 font-mono flex justify-between">
                        <span>{edu.period}</span>
                        <span className="text-purple-400">{edu.grade}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'projects':
        return (
          <div className="animate-fadeIn">
            <SectionTitle icon={Target} title="Laboratorio & Write-ups" color="text-red-500" />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((proj, idx) => (
                <div key={idx} className={`relative bg-gray-900 group p-6 rounded overflow-hidden border border-gray-800 hover:border-red-500/50 transition-all hover:-translate-y-1`}>
                  {/* Corner Accent */}
                  <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                  
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-bold px-2 py-1 bg-gray-950 border border-gray-800 text-gray-300 uppercase tracking-wider rounded">
                      {proj.category}
                    </span>
                    <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-red-400 transition-colors cursor-pointer" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                    {proj.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {proj.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto border-t border-gray-800 pt-4">
                    {proj.tech.map((t, i) => (
                      <span key={i} className="text-[10px] font-mono text-gray-400 bg-gray-950 px-2 py-1 rounded border border-gray-800">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
              
              {/* "Incoming" Card */}
              <div className="border border-dashed border-gray-800 rounded p-6 flex flex-col items-center justify-center text-center opacity-50 hover:opacity-100 transition-opacity cursor-default">
                 <Lock className="w-8 h-8 text-gray-600 mb-2" />
                 <span className="text-sm text-gray-500 font-mono">Próximo Write-up: <br/> Active Directory Forest Trust</span>
              </div>
            </div>
          </div>
        );

      case 'skills':
        return (
          <div className="animate-fadeIn">
            <SectionTitle icon={Shield} title="Arsenal & Skills" color="text-green-400" />

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gray-900/30 p-8 rounded border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-6 font-mono flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-green-500" /> ./HARD_SKILLS
                </h3>
                <div className="space-y-6">
                  {skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-2 text-sm">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-gray-500 font-mono">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${skill.color} relative`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-900/30 p-8 rounded border border-gray-800">
                  <h3 className="text-xl font-bold text-white mb-4 font-mono flex items-center gap-2">
                    <Award className="text-yellow-500 w-5 h-5" /> ./CERTIFICACIONES
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {certifications.map((cert, idx) => (
                      <span key={idx} className="px-3 py-2 bg-black/40 border border-gray-700 rounded text-xs text-gray-300 flex items-center gap-2 hover:border-yellow-500/50 transition-colors">
                        {cert.includes("Objetivo") ? <Target className="w-3 h-3 text-red-500"/> : <Hash className="w-3 h-3 text-gray-600" />}
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6 rounded border border-blue-900/30 bg-blue-900/10">
                  <h4 className="text-blue-400 font-bold mb-2 flex items-center gap-2">
                    <Cloud className="w-4 h-4" /> Cloud & Labs
                  </h4>
                  <p className="text-sm text-gray-400">
                    Despliego mis propios laboratorios de pentesting usando <strong>Docker</strong> y <strong>Proxmox</strong>. 
                    Familiarizado con entornos Azure para auditorías cloud.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-300 font-sans selection:bg-red-500/30 selection:text-red-200 overflow-x-hidden">
      
      {/* HEXAGON GRID BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20" 
           style={{ 
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231e293b' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
           }}>
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2 cursor-pointer group" onClick={() => setActiveSection('home')}>
              <div className="w-8 h-8 bg-red-600 flex items-center justify-center rounded text-white font-bold font-mono group-hover:bg-red-700 transition-colors">D</div>
              <span className="font-mono font-bold text-xl text-white tracking-tighter">D4Ni<span className="text-red-500">XPl0iT</span></span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center gap-2 text-sm font-bold tracking-wider transition-all ${activeSection === item.id ? 'text-red-500 scale-105' : 'text-gray-400 hover:text-white'}`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </button>
              ))}
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-300 hover:text-white">
                {isMobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-black border-b border-gray-800">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full flex items-center gap-4 px-6 py-4 text-left font-bold border-l-4 ${activeSection === item.id ? 'border-red-500 bg-gray-900 text-white' : 'border-transparent text-gray-400'}`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      <main className="relative z-10 pt-24 pb-12 px-4 max-w-6xl mx-auto min-h-screen flex flex-col">
        {renderContent()}
      </main>

      <footer className="relative z-10 border-t border-gray-900 bg-[#0a0a0a] pt-12 pb-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-white mb-2">¿Colaboramos?</h2>
              <p className="text-gray-500 text-sm max-w-md">
                Buscando oportunidades en Red Teaming y Pentesting.
              </p>
            </div>
            <div className="flex gap-4">
              <a href="https://linkedin.com/in/dalbaco/" target="_blank" rel="noreferrer" className="p-3 bg-gray-900 rounded-full hover:bg-blue-600 hover:text-white transition-all border border-gray-800">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:danielalbarranacosta610@gmail.com" className="p-3 bg-gray-900 rounded-full hover:bg-red-600 hover:text-white transition-all border border-gray-800">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-gray-900">
            <p className="text-xs text-gray-600 font-mono">
              © 2025 Daniel Albarrán Acosta.
            </p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
        @keyframes slideIn {
            from { transform: translateX(-20px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        .animate-slideIn {
            animation: slideIn 0.4s ease-out forwards;
        }
      `}</style>
    </div>
  );
}