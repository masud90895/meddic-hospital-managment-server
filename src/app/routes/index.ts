import { AppointmentBookingRoutes } from './../modules/appointmentBooking/appointmentBooking.routes';
import express from 'express';
import { AuthRoutes } from '../modules/auth/auth.routes';
import { UserRoutes } from '../modules/users/user.routes';
import { CategoryRoutes } from '../modules/category/category.routes';
import { ProductsRoutes } from '../modules/products/products.routes';
import { SpecializationRoutes } from '../modules/specializations/specialization.routes';
import { BlogRoutes } from '../modules/blogs/blogs.routes';
import { SlotRoutes } from '../modules/slots/slots.routes';
import { ReviewAndRatingRoutes } from '../modules/reviewAndRatings/reviewAndRating.routes';
import { FeedBackRoutes } from '../modules/feedBackForms/feedBackForm.routes';

import { FaqRoutes } from '../modules/FAQ/faq.routes';
import { ServiceRoutes } from '../modules/services/service.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/specialization',
    route: SpecializationRoutes,
  },
  {
    path: '/categories',
    route: CategoryRoutes,
  },
  {
    path: '/services',
    route: ServiceRoutes,
  },
  {
    path: '/products',
    route: ProductsRoutes,
  },
  {
    path: '/blogs',
    route: BlogRoutes,
  },
  {
    path: '/slots',
    route: SlotRoutes,
  },
  {
    path: '/review-ratings',
    route: ReviewAndRatingRoutes,
  },
  {
    path: '/feedback-forms',
    route: FeedBackRoutes,
  },
  {
    path: '/appointment-booking',
    route: AppointmentBookingRoutes,
  },
  {
    path: '/faqs',
    route: FaqRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
