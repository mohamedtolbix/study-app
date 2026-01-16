const API_BASE_URL = 'https://podo.b1.ma/api/public';

const handleResponse = async (response) => {
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
  }
  return await response.json();
};

export const api = {
  // Get all years
  getYears: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/years`);
      const data = await handleResponse(response);
      console.log('Years data:', data);
      return data;
    } catch (error) {
      console.error('Error fetching years:', error);
      throw error;
    }
  },

  // Get filieres by year
  getFilieresByYear: async (yearId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/years/${yearId}/filieres`);
      const data = await handleResponse(response);
      console.log('Filieres data:', data);
      return data;
    } catch (error) {
      console.error('Error fetching filieres:', error);
      throw error;
    }
  },

  // Get modules by filiere
  getModulesByFiliere: async (filiereId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/filieres/${filiereId}/modules`);
      const data = await handleResponse(response);
      console.log('Modules data:', data);
      return data;
    } catch (error) {
      console.error('Error fetching modules:', error);
      throw error;
    }
  },

  // Get CCs by module
  getCCsByModule: async (moduleId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/modules/${moduleId}/ccs`);
      const data = await handleResponse(response);
      return data;
    } catch (error) {
      console.error('Error fetching CCs:', error);
      throw error;
    }
  },

  // Get EFMs by module
  getEFMsByModule: async (moduleId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/modules/${moduleId}/efms`);
      const data = await handleResponse(response);
      return data;
    } catch (error) {
      console.error('Error fetching EFMs:', error);
      throw error;
    }
  },

  // Get courses by module
  getCoursesByModule: async (moduleId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/modules/${moduleId}/courses`);
      const data = await handleResponse(response);
      return data;
    } catch (error) {
      console.error('Error fetching courses:', error);
      throw error;
    }
  },

  // Get EFFs by filiere
  getEFFsByFiliere: async (filiereId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/filieres/${filiereId}/effs`);
      const data = await handleResponse(response);
      return data;
    } catch (error) {
      console.error('Error fetching EFFs:', error);
      throw error;
    }
  }
};