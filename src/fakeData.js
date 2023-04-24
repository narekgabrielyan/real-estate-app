export const fakeUsers = {
  data: [
    {
      id: 0,
      userTypeId: 0,
      userName: 'userName0',
      passWord: 'password0',
      userInfo: {
        firstName: 'userFirstName0',
        lastName: 'userLastName0',
        phoneNumber: '12345678'
      }
    },
    {
      id: 1,
      userTypeId: 1,
      userName: 'userName1',
      passWord: 'password1',
      userInfo: {
        firstName: 'agentFirstName0',
        lastName: 'agentLastName0',
        phoneNumber: '12345678'
      },
      productsInfo: {
        ids: [0, 1]
      }
    }
  ]
};

export const fakeProducts = {
  data: [
    {
      id: 0,
      agentId: 1,
      price: 1000,
      name: 'name0',
      type: 'type0',
      address: 'address0',
      location: 'location0',
      briefDescription: 'briefDescription0',
      detailedDescription: 'detailedDescription0',
      images: ['a.png', 'b.png', 'c.png', 'd.png', 'e.png', 'f.png']
    },
    {
      id: 1,
      agentId: 0,
      price: 2000,
      name: 'name1',
      type: 'type1',
      address: 'address1',
      location: 'location1',
      briefDescription: 'briefDescription1',
      detailedDescription: 'detailedDescription1',
      images: ['a.png', 'b.png', 'c.png', 'd.png']
    }
  ]
};
