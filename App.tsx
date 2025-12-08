import React, { useState } from 'react';
import { ServiceOrder, NavState } from './types';
import { AuthProvider } from './contexts/AuthContext';
import MainLayout from './layouts/MainLayout';
import OrderListModule from './modules/orders/OrderListModule';
import DetailView from './components/DetailView'; // Podría moverse a modules/orders/OrderDetailModule
import { MOCK_ORDERS } from './constants';

const App: React.FC = () => {
  // Estado de navegación global de la aplicación
  const [nav, setNav] = useState<NavState>({
    view: 'list',
    selectedOrderId: null,
  });

  // Mock de la base de datos para recuperar la orden seleccionada
  const selectedOrder = MOCK_ORDERS.find((o: ServiceOrder) => o.id === nav.selectedOrderId);

  // Manejadores de eventos (Controller Logic)
  const handleCardClick = (order: ServiceOrder) => {
    setNav({ view: 'detail', selectedOrderId: order.id });
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setNav({ view: 'list', selectedOrderId: null });
  };

  const getPageTitle = () => {
    return nav.view === 'list' ? 'Órdenes de Servicio Activas' : 'Detalle de Orden';
  };

  return (
    <AuthProvider>
      <MainLayout 
        nav={nav} 
        onBack={handleBack} 
        title={getPageTitle()}
      >
        {/* Renderizado condicional de Módulos */}
        {nav.view === 'list' ? (
          <OrderListModule onOrderSelect={handleCardClick} />
        ) : (
          selectedOrder && (
            <div className="flex-1 overflow-y-auto bg-gray-50 p-4 pb-20">
              <DetailView 
                order={selectedOrder} 
                onBack={handleBack} 
              />
            </div>
          )
        )}
      </MainLayout>
    </AuthProvider>
  );
};

export default App;