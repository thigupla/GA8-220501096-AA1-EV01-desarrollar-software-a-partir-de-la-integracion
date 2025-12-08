import React, { useState } from 'react';
import { ServiceOrder, NavState } from './types';
import { AuthProvider } from './contexts/AuthContext';
import MainLayout from './layouts/MainLayout';
import OrderListModule from './modules/orders/OrderListModule';
import DetailView from './components/DetailView'; // Podría moverse a modules/orders/OrderDetailModule
import Modal from './components/Modal';
import OrderForm from './components/OrderForm';
import ConfirmDialog from './components/ConfirmDialog';
import { MOCK_ORDERS } from './constants';

const App: React.FC = () => {
  // Estado de navegación global de la aplicación
  const [nav, setNav] = useState<NavState>({
    view: 'list',
    selectedOrderId: null,
  });

  // Estado de órdenes (CRUD local)
  const [orders, setOrders] = useState<ServiceOrder[]>(MOCK_ORDERS);

  // Estado del modal
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    mode: 'create' | 'edit';
    order?: ServiceOrder;
  }>({
    isOpen: false,
    mode: 'create',
  });

  // Estado del diálogo de confirmación
  const [confirmDelete, setConfirmDelete] = useState<{
    isOpen: boolean;
    orderId: string | null;
  }>({
    isOpen: false,
    orderId: null,
  });

  // Recuperar la orden seleccionada del estado
  const selectedOrder = orders.find((o: ServiceOrder) => o.id === nav.selectedOrderId);

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

  // CRUD Operations
  const handleCreateOrder = () => {
    setModalState({ isOpen: true, mode: 'create' });
  };

  const handleEditOrder = (order: ServiceOrder) => {
    setModalState({ isOpen: true, mode: 'edit', order });
  };

  const handleDeleteOrder = (orderId: string) => {
    setConfirmDelete({ isOpen: true, orderId });
  };

  const handleConfirmDelete = () => {
    if (confirmDelete.orderId) {
      setOrders(prev => prev.filter(o => o.id !== confirmDelete.orderId));
      handleBack(); // Return to list after deleting
    }
    setConfirmDelete({ isOpen: false, orderId: null });
  };

  const handleCancelDelete = () => {
    setConfirmDelete({ isOpen: false, orderId: null });
  };

  const handleSubmitOrder = (orderData: Omit<ServiceOrder, 'id'>) => {
    if (modalState.mode === 'create') {
      // Create new order with unique ID using crypto.randomUUID()
      const newOrder: ServiceOrder = {
        ...orderData,
        id: crypto.randomUUID(),
      };
      setOrders(prev => [newOrder, ...prev]);
    } else if (modalState.mode === 'edit' && modalState.order) {
      // Update existing order
      setOrders(prev =>
        prev.map(o => (o.id === modalState.order!.id ? { ...orderData, id: o.id } : o))
      );
    }
    setModalState({ isOpen: false, mode: 'create' });
  };

  const handleCloseModal = () => {
    setModalState({ isOpen: false, mode: 'create' });
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
          <OrderListModule 
            orders={orders}
            onOrderSelect={handleCardClick}
            onCreateOrder={handleCreateOrder}
          />
        ) : (
          selectedOrder && (
            <div className="flex-1 overflow-y-auto bg-gray-50 p-4 pb-20">
              <DetailView 
                order={selectedOrder} 
                onBack={handleBack}
                onEdit={handleEditOrder}
                onDelete={handleDeleteOrder}
              />
            </div>
          )
        )}

        {/* Modal for Create/Edit */}
        <Modal
          isOpen={modalState.isOpen}
          onClose={handleCloseModal}
          title={modalState.mode === 'create' ? 'Nueva Orden de Servicio' : 'Editar Orden de Servicio'}
        >
          <OrderForm
            order={modalState.order}
            onSubmit={handleSubmitOrder}
            onCancel={handleCloseModal}
          />
        </Modal>

        {/* Confirmation Dialog for Delete */}
        <ConfirmDialog
          isOpen={confirmDelete.isOpen}
          title="Eliminar Orden"
          message="¿Está seguro de que desea eliminar esta orden de servicio? Esta acción no se puede deshacer."
          confirmLabel="Eliminar"
          cancelLabel="Cancelar"
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
          danger={true}
        />
      </MainLayout>
    </AuthProvider>
  );
};

export default App;