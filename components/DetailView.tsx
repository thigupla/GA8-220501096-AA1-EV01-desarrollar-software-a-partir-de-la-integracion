import React, { useState } from 'react';
import { ServiceOrder, OrderStatus } from '../types';
import { ArrowLeft, Car, User, Calendar, AlertTriangle, Sparkles, Wrench, CheckSquare } from 'lucide-react';
import { getMechanicalDiagnosis } from '../services/geminiService';
import ReactMarkdown from 'react-markdown';

interface DetailViewProps {
  order: ServiceOrder;
  onBack: () => void;
}

const DetailView: React.FC<DetailViewProps> = ({ order, onBack }) => {
  const [diagnosis, setDiagnosis] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAIDiagnosis = async () => {
    setLoading(true);
    const result = await getMechanicalDiagnosis(order);
    setDiagnosis(result);
    setLoading(false);
  };

  return (
    <div className="animate-fade-in-up max-w-3xl mx-auto pb-12">
      {/* Nav Back */}
      <button 
        onClick={onBack}
        className="flex items-center text-gray-600 hover:text-indigo-600 mb-6 transition-colors focus:outline-none focus:underline"
        aria-label="Volver a la lista"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Volver a Órdenes
      </button>

      {/* Main Card */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="bg-gray-50 border-b border-gray-200 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{order.osNumber}</h1>
            <p className="text-gray-500 text-sm flex items-center mt-1">
              <Calendar className="w-4 h-4 mr-1" /> Ingreso: {order.entryDate}
            </p>
          </div>
          <span className={`px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider self-start sm:self-center
            ${order.status === OrderStatus.IN_PROGRESS ? 'bg-orange-100 text-orange-700' : 
              order.status === OrderStatus.COMPLETED ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
            {order.status}
          </span>
        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Details Column */}
          <div className="space-y-6">
            <section>
              <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Información del Cliente</h2>
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <div className="bg-white p-2 rounded-full shadow-sm mr-3">
                  <User className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{order.clientName}</p>
                  <p className="text-xs text-gray-500">Cliente Recurrente</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Vehículo</h2>
              <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                <div className="bg-white p-2 rounded-full shadow-sm mr-3">
                  <Car className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{order.vehicleModel}</p>
                  <p className="text-sm text-gray-600 font-mono mt-0.5">{order.vehiclePlate}</p>
                </div>
              </div>
            </section>
          </div>

          {/* Issue Column */}
          <div className="space-y-6">
             <section>
              <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Reporte del Problema</h2>
              <div className="bg-red-50 border border-red-100 rounded-lg p-4">
                <div className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                  <p className="text-gray-800 text-sm leading-relaxed">
                    "{order.description}"
                  </p>
                </div>
              </div>
            </section>

            {/* AI Assistant Section */}
            <section>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-xs font-bold text-indigo-500 uppercase tracking-wider flex items-center">
                  <Sparkles className="w-3 h-3 mr-1" /> Asistente IA
                </h2>
              </div>
              
              {!diagnosis ? (
                <button 
                  onClick={handleAIDiagnosis}
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white py-3 px-4 rounded-lg transition-all shadow-md hover:shadow-lg font-medium"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <Wrench className="w-4 h-4" />
                      Generar Plan de Diagnóstico
                    </>
                  )}
                </button>
              ) : (
                <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4 animate-fade-in">
                  <h3 className="text-indigo-900 font-semibold text-sm mb-2 flex items-center">
                    <CheckSquare className="w-4 h-4 mr-2" />
                    Sugerencias de Revisión:
                  </h3>
                  <div className="prose prose-sm prose-indigo text-gray-700">
                    <ReactMarkdown>{diagnosis}</ReactMarkdown>
                  </div>
                  <button 
                    onClick={() => setDiagnosis(null)}
                    className="text-xs text-indigo-600 hover:text-indigo-800 mt-3 underline"
                  >
                    Ocultar sugerencias
                  </button>
                </div>
              )}
            </section>
          </div>
        </div>
        
        {/* Footer Actions */}
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex justify-end gap-3">
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors">
            Editar Orden
          </button>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 shadow-sm transition-colors">
            Actualizar Estado
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailView;