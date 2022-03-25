const express = require('express')
const userRouter = require('./user/userRouter.js');
const boardRouter = require('./board/boardRouter.js');
// const adminRouter = require('./admin/adminRouter.js');
// const replyRouter = require('./reply/replyRouter.js');

const router = express.Router();

router.use('/api/user',userRouter);
router.use('/api/board',boardRouter);


module.exports = router;