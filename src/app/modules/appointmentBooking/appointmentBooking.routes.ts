import express from 'express';

import validateRequest from '../../middlewares/validateRequest';
import { AppointmentBookingController } from './appointmentBooking.controller';
import { AppointmentBookingValidation } from './appointmentBooking.validations';
import auth from '../../middlewares/auth';
import { userRole } from '@prisma/client';

const router = express.Router();

router.post(
  '/add-booking',
  auth(userRole.USER),
  validateRequest(AppointmentBookingValidation.createAppointmentBooking),
  AppointmentBookingController.createNewAppointmentBooking
);
router.get(
  '/',
  auth(userRole.USER, userRole.ADMIN, userRole.SUPER_ADMIN),
  // validateRequest(AppointmentBookingValidation.createAppointmentBooking),
  AppointmentBookingController.getAllAppointment
);

router.get(
  '/my-booking',
  auth(userRole.USER, userRole.ADMIN, userRole.SUPER_ADMIN),
  // validateRequest(AppointmentBookingValidation.createAppointmentBooking),
  AppointmentBookingController.getMyAppointment
);
// get all appoinment length
router.get(
  '/all-booking-length',
  auth(userRole.USER, userRole.ADMIN, userRole.SUPER_ADMIN),
  AppointmentBookingController.getAllAppointmentLength
);

// get my pending and rejected appointmentStatus length like : pending :1 , rejected : 2
router.get(
  '/my-booking-length',
  auth(userRole.USER, userRole.ADMIN, userRole.SUPER_ADMIN),
  AppointmentBookingController.getMyPendingAndRejectedAppointmentLength
);

router.patch(
  '/:appointmentId',
  auth(userRole.USER, userRole.ADMIN, userRole.SUPER_ADMIN),
  // validateRequest(AppointmentBookingValidation.createAppointmentBooking),
  AppointmentBookingController.updateAppointment
);

router.delete(
  '/:appointmentId',
  auth(userRole.USER, userRole.ADMIN, userRole.SUPER_ADMIN),
  AppointmentBookingController.deleteAppointment
);

export const AppointmentBookingRoutes = router;
