import {EMPLOYEE_SCHEMA, EmployeeScheme} from './database';
import Realm from 'realm';

export const syncEmployeeList = async employeeList => {
  const realm = await Realm.open({
    path: 'database',
    schema: [EmployeeScheme],
  });
  employeeList?.forEach(element => {
    if (
      realm.objects(EMPLOYEE_SCHEMA).filtered(`id=${element.id}`).length === 0
    ) {
      realm.write(() => {
        realm.create(EMPLOYEE_SCHEMA, {
          id: element.id,
          name: element.name,
          username: element.username || '',
          email: element?.email || '',
          profile_image: element?.profile_image || '',
          phone: element?.phone || '',
          website: element?.website || '',
          company: element?.company?.name || '',
          address: element?.address?.street + ', ' + element?.address?.suite + ', ' + element?.address?.city + ', ' + element?.address?.zipcode,
        });
      });
    }
  });
};

// Return all Employee data
export const getAllEmployee = async () => {
  const realm = await Realm.open({
    path: 'database',
    schema: [EmployeeScheme],
  });
  return realm.objects(EMPLOYEE_SCHEMA);
};

// Search Employee Query
export const searchEmployeeQuery = async (searchText: string) => {
  const realm = await Realm.open({
    path: 'database',
    schema: [EmployeeScheme],
  });
  console.log('searchText', searchText);
  return realm
    .objects(EMPLOYEE_SCHEMA)
    .filtered(`name CONTAINS[c] "${searchText}" OR email CONTAINS[c] "${searchText}"`);
};
