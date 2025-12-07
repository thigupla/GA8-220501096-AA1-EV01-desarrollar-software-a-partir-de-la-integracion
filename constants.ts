import { OrderStatus, ServiceOrder } from './types';

export const MOCK_ORDERS: ServiceOrder[] = [
  {
    id: '1',
    osNumber: '#OS-1045',
    clientName: 'Juan Pérez',
    vehicleModel: 'Renault Duster',
    vehiclePlate: 'KJJ987',
    status: OrderStatus.IN_PROGRESS,
    description: 'Ruido extraño en la suspensión delantera al pasar baches. Revisar amortiguadores.',
    entryDate: '2023-10-25'
  },
  {
    id: '2',
    osNumber: '#OS-1046',
    clientName: 'Maria Rodriguez',
    vehicleModel: 'Chevrolet Onix',
    vehiclePlate: 'ABC-123',
    status: OrderStatus.PENDING,
    description: 'Cambio de aceite y filtro. Revisión de frenos traseros.',
    entryDate: '2023-10-26'
  },
  {
    id: '3',
    osNumber: '#OS-1042',
    clientName: 'Carlos Gomez',
    vehicleModel: 'Toyota Corolla',
    vehiclePlate: 'XYZ-999',
    status: OrderStatus.COMPLETED,
    description: 'Alineación y balanceo. Cambio de pastillas de freno.',
    entryDate: '2023-10-20'
  }
];