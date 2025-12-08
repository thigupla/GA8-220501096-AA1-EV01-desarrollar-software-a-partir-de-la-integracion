import React from 'react';
import { NavState } from '../types';
import { Home, Wrench, Users, User, ArrowLeft } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface MainLayoutProps {
  children: React.ReactNode;
  nav: NavState;
  onBack: () => void;
  title: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, nav, onBack, title }) => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col relative">
      {/* Header / AppBar */}
      <header className="bg-indigo-600 text-white shadow-md z-30 shrink-0 sticky top-0 transition-all duration-300">
        <div className="w-full h-14 flex items-center px-4 justify-between">
          <div className="flex items-center">
            {nav.view === 'detail' && (
              <button 
                onClick={onBack} 
                className="mr-3 p-1 hover:bg-indigo-700 rounded-full transition-colors"
                aria-label="Regresar"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
            )}
            <h1 className="text-xl font-bold tracking-tight truncate">
              {title}
            </h1>
          </div>
          {/* Avatar simple del usuario */}
          <div className="w-8 h-8 rounded-full bg-indigo-800 flex items-center justify-center text-xs font-bold border border-indigo-400">
            {user?.avatar || 'U'}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative w-full overflow-hidden">
        {children}
      </main>

      {/* Bottom Navigation - Visible solo en vista de lista */}
      {nav.view === 'list' && (
        <nav className="bg-white border-t border-gray-200 h-[56px] shrink-0 z-40 w-full shadow-[0_-2px_4px_rgba(0,0,0,0.05)]">
          <div className="flex justify-around items-center h-full">
            <NavItem icon={<Home className="w-6 h-6" />} label="Inicio" />
            <NavItem icon={<Wrench className="w-6 h-6" />} label="Taller" active />
            <NavItem icon={<Users className="w-6 h-6" />} label="Clientes" />
            <NavItem icon={<User className="w-6 h-6" />} label="Perfil" />
          </div>
        </nav>
      )}
    </div>
  );
};

const NavItem: React.FC<{ icon: React.ReactNode; label: string; active?: boolean }> = ({ icon, label, active }) => (
  <button 
    className={`flex flex-col items-center justify-center w-full h-full transition-colors ${
      active ? 'text-indigo-600' : 'text-gray-600 hover:text-indigo-600 active:text-indigo-700'
    }`}
  >
    {icon}
    <span className="text-[10px] mt-0.5 font-medium">{label}</span>
  </button>
);

export default MainLayout;