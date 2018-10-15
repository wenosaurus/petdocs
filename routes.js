module.exports = (app, db) => {

  const owners = require('./controllers/owner')(db);
  const pets = require('./controllers/pet')(db);
  const vets = require('./controllers/vet')(db);

  /*
   *  =========================================
   *  Users
   *  =========================================
   */
  // CRUD owners
  app.get('/owner/signup', owners.ownerSignup);
  app.post('/owner', owners.ownerCreated);
  app.get('/owner/login', owners.ownerLogin);
  app.post('/ownerlogin', owners.ownerLoggedIn);
  app.get('/owner/home/:id', owners.ownerHome);
  app.put('/owner/password/reset/:id', owners.ownerPasswordReset);
  app.get('/owner/password/:id', owners.ownerPassword);
  app.get('/owner/:id/edit', owners.ownerEdit);
  app.put('/owner/:id', owners.ownerUpdated);

  // CRUD pets
  app.get('/owner/pet', pets.petNew);
  app.post('/pet', pets.petAdded);
};
