import React, { useState } from 'react';
import { ServiceOrder } from '../../types';
import ServiceOrderCard from '../../components/ServiceOrderCard';
import { Search, Plus } from 'lucide-react';

interface OrderListModuleProps {
  orders: ServiceOrder[];
  onOrderSelect: (order: ServiceOrder) => void;
  onCreateOrder: () => void;
}

const OrderListModule: React.FC<OrderListModuleProps> = ({ orders, onOrderSelect, onCreateOrder }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Lógica de filtrado
  const filteredOrders = orders.filter(order => 
    order.osNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
    order.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    order.vehicleModel.toLowerCase().includes(searchQuery.toLowerCase()) ||
    order.vehiclePlate.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* Barra de Búsqueda */}
      <div className="p-2 z-20 bg-white sticky top-0 shadow-sm">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full leading-5 bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
            placeholder="Buscar por O/S, Cliente o Vehículo..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Campo de búsqueda"
          />
        </div>
      </div>

      {/* Lista de Resultados */}
      <div className="flex-1 overflow-y-auto pb-24 space-y-1 bg-gray-50 px-2 pt-2">
        {filteredOrders.length > 0 ? (
          filteredOrders.map((order) => (
            <ServiceOrderCard 
              key={order.id} 
              order={order} 
              onClick={onOrderSelect} 
            />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-gray-400">
            <p>No se encontraron resultados.</p>
          </div>
        )}
      </div>

      {/* FAB - Botón Flotante */}
      <button
        onClick={onCreateOrder}
        className="absolute bottom-6 right-4 w-14 h-14 bg-indigo-500 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-transform active:scale-90 z-30"
        aria-label="Crear nueva orden"
      >
        <Plus className="w-8 h-8" />
      </button>
    </>
  );
};

export default OrderListModule;