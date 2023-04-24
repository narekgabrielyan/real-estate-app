export const fakeUsers = {
  data: [
    {
      id: 0,
      userTypeId: 0,
      userName: 'testuser',
      passWord: '12345678',
      userInfo: {
        firstName: 'userFirstName',
        lastName: 'userLastName',
        phoneNumber: '12345678'
      }
    },
    {
      id: 1,
      userTypeId: 1,
      userName: 'testagent',
      passWord: '12345678',
      userInfo: {
        firstName: 'agentFirstName',
        lastName: 'agentLastName',
        phoneNumber: '12345678'
      }
    }
  ]
};

export const fakeProducts = {
  data: [
    {
      id: 0,
      agentId: 1,
      price: 2000,
      name: 'Fulbrix',
      type: 0,
      address: '234 W Polk St',
      location: 'Chicago, IL',
      briefDescription: 'It’s new. It’s bold. It’s living to the Fulton-est in Chicago’s West Loop.',
      detailedDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi atque aut blanditiis dolorem ducimus esse fugiat itaque laboriosam maxime, mollitia nesciunt nihil numquam omnis quisquam repellat, repellendus ullam velit.',
      images: ['0-a.png', '0-b.png', '0-c.png', '0-d.png', '0-e.png', '0-f.png']
    },
    {
      id: 1,
      agentId: 0,
      price: 1525,
      name: 'Post Apartment',
      type: 1,
      address: '160 N Elizabeth St',
      location: 'Chicago, IL',
      briefDescription: 'Post - Chicago\'s most forward-focused peer living community!',
      detailedDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi atque aut blanditiis dolorem ducimus esse fugiat itaque laboriosam maxime, mollitia nesciunt nihil numquam omnis quisquam repellat, repellendus ullam velit.',
      images: ['1-a.png', '1-b.png', '1-c.png', '1-d.png']
    }
  ]
};
