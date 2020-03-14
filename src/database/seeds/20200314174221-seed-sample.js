module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert('modelSamples', [
      {
        name: 'userSample',
        email: 'usersample@sample.com',
        password: 'qwerty.123',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('modelSamples', null, {});
  },
};
