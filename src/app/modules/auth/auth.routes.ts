import express from 'express';

import { AuthController } from './auth.controller';

import validateRequest from '../../middlewares/validateRequest';
import { UserValidation } from '../users/user.validations';

const router = express.Router();

router.post('/create-user', AuthController.createNewUser);

router.post(
  '/login',
  validateRequest(UserValidation.loginUser),
  AuthController.userLogin
);

router.post('/refresh-token', AuthController.refreshToken);

export const AuthRoutes = router;
