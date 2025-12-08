import React, { useState } from 'react';
import { ServiceOrder, OrderStatus } from '../types';
import { Save, AlertCircle } from 'lucide-react';

interface OrderFormProps {
  order?: ServiceOrder; // If provided, we're editing
  onSubmit: (order: Omit<ServiceOrder, 'id'>) => void;
  onCancel: () => void;
}

const OrderForm: React.FC<OrderFormProps> = ({ order, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    osNumber: order?.osNumber || '',
    clientName: order?.clientName || '',
    vehicleModel: order?.vehicleModel || '',
    vehiclePlate: order?.vehiclePlate || '',
    status: order?.status || OrderStatus.PENDING,
    description: order?.description || '',
    entryDate: order?.entryDate || new Date().toISOString().split('T')[0]
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.osNumber.trim()) {
      newErrors.osNumber = 'El número de orden es requerido';
    }
    if (!formData.clientName.trim()) {
      newErrors.clientName = 'El nombre del cliente es requerido';
    }
    if (!formData.vehicleModel.trim()) {
      newErrors.vehicleModel = 'El modelo del vehículo es requerido';
    }
    if (!formData.vehiclePlate.trim()) {
      newErrors.vehiclePlate = 'La placa del vehículo es requerida';
    }
    if (!formData.description.trim()) {
      newErrors.description = 'La descripción del problema es requerida';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* OS Number */}
      <div>
        <label htmlFor="osNumber" className="block text-sm font-semibold text-gray-700 mb-2">
          Número de Orden *
        </label>
        <input
          type="text"
          id="osNumber"
          name="osNumber"
          value={formData.osNumber}
          onChange={handleChange}
          placeholder="#OS-1047"
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
            errors.osNumber ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.osNumber && (
          <p className="mt-1 text-sm text-red-600 flex items-center">
            <AlertCircle className="w-4 h-4 mr-1" />
            {errors.osNumber}
          </p>
        )}
      </div>

      {/* Client Name */}
      <div>
        <label htmlFor="clientName" className="block text-sm font-semibold text-gray-700 mb-2">
          Nombre del Cliente *
        </label>
        <input
          type="text"
          id="clientName"
          name="clientName"
          value={formData.clientName}
          onChange={handleChange}
          placeholder="Juan Pérez"
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
            errors.clientName ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.clientName && (
          <p className="mt-1 text-sm text-red-600 flex items-center">
            <AlertCircle className="w-4 h-4 mr-1" />
            {errors.clientName}
          </p>
        )}
      </div>

      {/* Vehicle Model */}
      <div>
        <label htmlFor="vehicleModel" className="block text-sm font-semibold text-gray-700 mb-2">
          Modelo del Vehículo *
        </label>
        <input
          type="text"
          id="vehicleModel"
          name="vehicleModel"
          value={formData.vehicleModel}
          onChange={handleChange}
          placeholder="Toyota Corolla"
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
            errors.vehicleModel ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.vehicleModel && (
          <p className="mt-1 text-sm text-red-600 flex items-center">
            <AlertCircle className="w-4 h-4 mr-1" />
            {errors.vehicleModel}
          </p>
        )}
      </div>

      {/* Vehicle Plate */}
      <div>
        <label htmlFor="vehiclePlate" className="block text-sm font-semibold text-gray-700 mb-2">
          Placa del Vehículo *
        </label>
        <input
          type="text"
          id="vehiclePlate"
          name="vehiclePlate"
          value={formData.vehiclePlate}
          onChange={handleChange}
          placeholder="ABC-123"
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
            errors.vehiclePlate ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.vehiclePlate && (
          <p className="mt-1 text-sm text-red-600 flex items-center">
            <AlertCircle className="w-4 h-4 mr-1" />
            {errors.vehiclePlate}
          </p>
        )}
      </div>

      {/* Status */}
      <div>
        <label htmlFor="status" className="block text-sm font-semibold text-gray-700 mb-2">
          Estado
        </label>
        <select
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value={OrderStatus.PENDING}>{OrderStatus.PENDING}</option>
          <option value={OrderStatus.IN_PROGRESS}>{OrderStatus.IN_PROGRESS}</option>
          <option value={OrderStatus.COMPLETED}>{OrderStatus.COMPLETED}</option>
          <option value={OrderStatus.CANCELLED}>{OrderStatus.CANCELLED}</option>
        </select>
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
          Descripción del Problema *
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Describa el problema reportado por el cliente..."
          rows={4}
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none ${
            errors.description ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.description && (
          <p className="mt-1 text-sm text-red-600 flex items-center">
            <AlertCircle className="w-4 h-4 mr-1" />
            {errors.description}
          </p>
        )}
      </div>

      {/* Entry Date */}
      <div>
        <label htmlFor="entryDate" className="block text-sm font-semibold text-gray-700 mb-2">
          Fecha de Ingreso
        </label>
        <input
          type="date"
          id="entryDate"
          name="entryDate"
          value={formData.entryDate}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
        <button
          type="button"
          onClick={onCancel}
          className="px-6 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 shadow-sm transition-colors flex items-center gap-2"
        >
          <Save className="w-4 h-4" />
          {order ? 'Guardar Cambios' : 'Crear Orden'}
        </button>
      </div>
    </form>
  );
};

export default OrderForm;
