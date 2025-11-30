const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

export const apiClient = {
  async get(endpoint: string) {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return response.json();
  },

  async post(endpoint: string, data: any) {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return response.json();
  },

  async put(endpoint: string, data: any) {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return response.json();
  },

  async delete(endpoint: string) {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return response.json();
  },
};

// Doctor API endpoints
export const doctorApi = {
  getAllDoctors: () => apiClient.get('/doctors/doctors/'),
  getDoctorById: (id: string) => apiClient.get(`/doctors/doctors/${id}/`),
  createDoctor: (data: any) => apiClient.post('/doctors/doctors/', data),
  updateDoctor: (id: string, data: any) => apiClient.put(`/doctors/doctors/${id}/`, data),
  deleteDoctor: (id: string) => apiClient.delete(`/doctors/doctors/${id}/`),
  searchDoctor: (identityNumber: string) => apiClient.get(`/doctors/doctors/search/?identityNumber=${identityNumber}`),
  filterDoctors: (filters: any) => {
    const params = new URLSearchParams(filters).toString();
    return apiClient.get(`/doctors/doctors/filter/?${params}`);
  },
};

// Department API endpoints
export const departmentApi = {
  getAllDepartments: () => apiClient.get('/doctors/departments/'),
  getDepartmentById: (id: string) => apiClient.get(`/doctors/departments/${id}/`),
  createDepartment: (data: any) => apiClient.post('/doctors/departments/', data),
  updateDepartment: (id: string, data: any) => apiClient.put(`/doctors/departments/${id}/`, data),
  deleteDepartment: (id: string) => apiClient.delete(`/doctors/departments/${id}/`),
  getDoctorsByDepartment: (id: string) => apiClient.get(`/doctors/departments/${id}/doctors/`),
};

// Appointment API endpoints
export const appointmentApi = {
  getAllAppointments: () => apiClient.get('/appointments/appointments/'),
  getAppointmentById: (id: string) => apiClient.get(`/appointments/appointments/${id}/`),
  createAppointment: (data: any) => apiClient.post('/appointments/appointments/', data),
  updateAppointment: (id: string, data: any) => apiClient.put(`/appointments/appointments/${id}/`, data),
  deleteAppointment: (id: string) => apiClient.delete(`/appointments/appointments/${id}/`),
  getAppointmentsByDoctor: (doctorId: string, params?: any) => {
    const queryParams = params ? `?${new URLSearchParams(params).toString()}` : '';
    return apiClient.get(`/appointments/appointments/doctor/${doctorId}/${queryParams}`);
  },
  getAppointmentsByPatient: (patientId: string, params?: any) => {
    const queryParams = params ? `?${new URLSearchParams(params).toString()}` : '';
    return apiClient.get(`/appointments/appointments/patient/${patientId}/${queryParams}`);
  },
  getAvailableSlots: (data: any) => apiClient.post('/appointments/appointments/schedule/available-slots/', data),
};
