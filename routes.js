module.exports = (app, upload, db) => {

  const owners = require('./controllers/owner')(db);
  const pets = require('./controllers/pet')(db);
  const vets = require('./controllers/vet')(db);
  const files = require('./controllers/file')(upload, db);

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
  app.delete('/owner/pet/delete/:id', pets.removePet);
  app.get('/owner/pet/files/:id', pets.petFiles);
  app.get('/owner/pet/:id/delete', pets.deletePet);
  app.get('/owner/pet/:id/edit', pets.petEdit);
  app.put('/owner/pet/:id', pets.petUpdated);

  // CRUD vet
  app.get('/vet/home/:id', vets.vetHome);
  app.get('/vet/signup', vets.vetSignup);
  app.get('/vet/login', vets.vetLogin);
  app.post('/vetlogin', vets.vetLoggedIn);
  app.post('/vet', vets.vetCreated);
  app.put('/vet/password/reset/:id', vets.vetPasswordReset);
  app.get('/vet/password/:id', vets.vetPassword);
  app.get('/vet/:id/edit', vets.vetEdit);
  app.put('/vet/:id', vets.vetUpdated);

  // CRUD file
  app.get('/vet/file', files.fileNew);
  app.post('/file', upload.single('myFile'), files.fileAdded);
  app.delete('/vet/file/delete/:id', files.removeFile);
  app.get('/vet/file/:id/delete', files.deleteFile);
  app.get('/vet/file/:id/edit', files.fileEdit);
  app.put('/vet/file/:id', upload.single('myFile'), files.fileUpdated);

};
