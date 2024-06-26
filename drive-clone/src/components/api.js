import axios from 'axios';

const API_URL = 'http://localhost:8000/api/v1/users';

export const createFolder = async (name, parentId) => {
  const response = await axios.post(`${API_URL}/folders`, {
    name,
    parentId: parentId === 'root' ? null : parentId
  });
  return response.data;
};

export const getFolders = async () => {
  const response = await axios.get(`${API_URL}/folders/root`);
  return response.data;
};

export const uploadFile = async (formData, folderId) => {
  const response = await axios.post(`${API_URL}/files`, formData, {
    params: {
      folderId: folderId === 'root' ? null : folderId
    },
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
  return response.data;
};

export const getFolderById = async (folderId) => {
  const response = await axios.get(`${API_URL}/folders/${folderId}`);
  return response.data;
};
