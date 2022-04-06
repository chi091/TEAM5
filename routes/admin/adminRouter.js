const express = require('express');
const router = express.Router();
const adminController = require('./adminController.js');
// const {Auth} =require()
// const {adminAuth} = require()


// router.post('/login',adminController.login);
// router.post('/adminCheck',adminController.adminCheck);
// router.post('/logout',adminController.logout);

// router.post('/adminInfo',adminController.adminInfo);//회원정보보기
// router.post('/postAdminInfo',adminController.adminCheck);//회원정보수정

// //


router.post('/adminMainPlus',adminController.adminMainPlus);
// router.post('/adminMainEdit',adminController.adminMainEdit);
// router.post('/adminMainDelete',adminController.adminMainDelete);

// router.post('/adminSubPlus',adminController.adminSubPlus);
// router.post('/adminSubEdit',adminController.adminSubEdit);
// router.post('/adminSubDelete',adminController.adminSubDelete);


//router 추가
//adminMainPlus , adminMainEdit , adminMainDelete
//adminSubPlus, adminSubEdit, adminSubDelete

module.exports =router

// admin,
//     login,
//     adminCheck,
//     logout,
//     adminList,
//     adminInfo,
//     postAdminInfo,
//     adminMainPlus,
//     adminMainEdit,
//     adminMainDelete,
//     adminSubPlus,
//     adminSubEdit,
//     adminSubDelete