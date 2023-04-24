export const USER = 'USER';
export const AGENT = 'AGENT';

export const USER_TYPE_ID_MAP = {
  USER: 0,
  AGENT: 1
};

export const USER_TYPES = [
  { name: 'User', value: 0 },
  { name: 'Agent', value: 1 }
];

export const PROPERTY_TYPES = [
  { name: 'Single-Family Home', value: 0 },
  { name: 'Townhome', value: 1 },
  { name: 'Bungalow', value: 2 },
  { name: 'Ranch', value: 3 },
  { name: 'Tudor', value: 4 },
  { name: 'Cape Cod', value: 5 }
];

export const ROUTES = {
  HOME: '/',
  MY_PROPERTIES: '/myProperties',
  PROPERTIES: '/properties',
  PROPERTY_DETAILS: '/propertyDetails'
};
