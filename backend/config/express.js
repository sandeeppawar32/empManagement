const express = require('express');
const cors = require('cors');
const controller = require('../controller/empComtroller');
const helper = require('../helper/pgdbHelper');

const app = express();

app.use(express.json({ limit: '0.5mb' }));
app.use(express.urlencoded({ limit: '0.5mb', extended: true }));
app.use(cors());

app.get('/getEmpDetail', async(req, res, next) => {
  controller.fetchAllUserDetails(req, res);
});
app.post('/addEmp', async(req, res, next) => {
  controller.addUserDetails(req, res);
});
app.put('/updateEmp/:id',async(req, res, next) => {
  controller.editUserDetails(req, res);
});
app.delete('/deleteEmp/:id',async(req, res, next) => {
  controller.deleteUserDetails(req, res);
});


module.exports = app;
