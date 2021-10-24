import {api} from './api';
import {apiEndpoints} from './config';

export const fetchEmployeeList = async () => {
  try {
    const response = await api.get(apiEndpoints.getEmployeeList);
    return response?.data;
  } catch (error) {
    console.warn('errorr ==>', error);
  }
};
