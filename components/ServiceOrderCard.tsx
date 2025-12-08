import React from 'react';
import { ServiceOrder, OrderStatus } from '../types';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

interface ServiceOrderCardProps {
  order: ServiceOrder;
  onClick: (order: ServiceOrder) => void;
}

const ServiceOrderCard: React.FC<ServiceOrderCardProps> = ({ order, onClick }) => {
  
  // Mapping logic based on XML specs
  // XML: app:tint="#FF9800" for Progress
  const getStatusColor = (status: OrderStatus) => {
    switch (status) {
      case OrderStatus.IN_PROGRESS: return '#FF9800'; // Orange
      case OrderStatus.COMPLETED: return '#4CAF50';   // Green
      case OrderStatus.PENDING: return '#2196F3';     // Blue
      default: return '#9E9E9E';                      // Grey
    }
  };

  const statusColor = getStatusColor(order.status);

  return (
    // XML: CardView
    // android:layout_marginHorizontal="8dp" (mx-2)
    // android:layout_marginVertical="4dp" (my-1)
    // app:cardCornerRadius="8dp" (rounded-lg)
    // app:cardElevation="4dp" (shadow-md)
    <div 
      role="button"
      tabIndex={0}
      onClick={() => onClick(order)}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick(order)}
      className="bg-white rounded-lg shadow-md mx-2 my-1 relative overflow-hidden transition-transform active:scale-[0.98] cursor-pointer group border border-transparent hover:border-gray-200"
      aria-label={`Tarjeta de orden de servicio ${order.osNumber}, toque para ver detalles`}
    >
      {/* 
         XML: ConstraintLayout 
         android:padding="12dp"
      */}
      <div className="p-3 relative">
        <div className="flex items-start justify-between">
          
          <div className="flex items-center gap-3">
             {/* 
                XML: ImageView (Icono de Estado)
                android:id="@+id/icon_status"
                width/height="24dp"
                app:tint="#FF9800"
             */}
            <div style={{ color: statusColor }}>
              {order.status === OrderStatus.IN_PROGRESS ? (
                <Loader2 className="w-6 h-6 animate-spin" />
              ) : order.status === OrderStatus.COMPLETED ? (
                <CheckCircle2 className="w-6 h-6" />
              ) : (
                <AlertCircle className="w-6 h-6" />
              )}
            </div>

            {/* 
                XML: TextView (Número de Orden)
                android:textStyle="bold"
                android:textSize="18sp"
            */}
            <span className="text-lg font-bold text-gray-900">
              {order.osNumber}
            </span>
          </div>

          {/* 
              XML: TextView (Estado)
              android:textStyle="italic"
              android:textSize="14sp"
              android:textColor="#FF9800"
          */}
          <span 
            className="text-sm italic font-medium"
            style={{ color: statusColor }}
          >
            {order.status}
          </span>
        </div>

        {/* 
            XML: TextView (Cliente)
            android:textSize="14sp"
            android:layout_marginTop="4dp"
        */}
        <div className="mt-1 ml-9">
          <p className="text-sm text-gray-800">
            <span className="font-semibold text-gray-600">Cliente: </span>
            {order.clientName}
          </p>
        </div>

        {/* 
            XML: TextView (Vehículo)
            android:textSize="14sp"
            android:layout_marginTop="2dp"
        */}
        <div className="mt-0.5 ml-9">
           <p className="text-sm text-gray-800">
            <span className="font-semibold text-gray-600">Vehículo: </span>
            {order.vehicleModel} (Placa: {order.vehiclePlate})
          </p>
        </div>
      </div>
      
      {/* Ripple effect simulation on hover */}
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none" />
    </div>
  );
};

export default ServiceOrderCard;