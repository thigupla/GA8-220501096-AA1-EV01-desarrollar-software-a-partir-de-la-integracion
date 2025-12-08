export enum OrderStatus {
  PENDING = 'PENDIENTE',
  IN_PROGRESS = 'EN PROGRESO',
  COMPLETED = 'COMPLETADO',
  CANCELLED = 'CANCELADO'
}

export interface ServiceOrder {
  id: string;
  osNumber: string; // e.g., "#OS-1045"
  clientName: string;
  vehicleModel: string;
  vehiclePlate: string;
  status: OrderStatus;
  description: string; // Issue description
  entryDate: string;
}

export interface User {
  id: string;
  name: string;
  role: 'ADMIN' | 'MECHANIC';
  avatar?: string;
}

export interface NavState {
  view: 'list' | 'detail';
  selectedOrderId: string | null;
}