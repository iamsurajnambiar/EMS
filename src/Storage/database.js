import Realm from 'realm';

export const EMPLOYEE_SCHEMA = 'Employee';

export const EmployeeScheme = {
  name: EMPLOYEE_SCHEMA,
  properties: {
    id: 'int',
    name: 'string?',
    username: 'string',
    email: 'string',
    profile_image: 'string',
    phone: 'string',
    website: 'string',
    company: 'string',
    address: 'string',
  },
  primaryKey: 'id',
};

class Employee extends Realm.Object {}
Employee.schema = EmployeeScheme;

export const realm = new Realm({schema: [Employee], schemaVersion: 4});
