import express from 'express';
import { AuthRoutes } from '../modules/auth/auth.routes';
import { UserRoutes } from '../modules/users/user.routes';
import { CategoryRoutes } from '../modules/category/category.routes';
import { MedServiceRoutes } from '../modules/services/service.routes';
import { ProductsRoutes } from '../modules/products/products.routes';
import { SpecializationRoutes } from '../modules/specializations/specialization.routes';
import { BlogRoutes } from '../modules/blogs/blogs.routes';
import { SlotRoutes } from '../modules/slots/slots.routes';

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
    route: MedServiceRoutes,
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
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
