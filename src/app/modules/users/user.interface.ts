import { AppointmentBooking, Blog, Doctor, Faq, FeedBackForm, Product, ReviewAndRatings, User, userRole } from '@prisma/client';

export type IRequestUser = {
  role: userRole;
  userId: string;
  profileId: string;
  iat: number;
  exp: number;
};

export type IUpdateUserRequest = {
  firstName: string;
  lastName: string;
  profileImage: string;
  password: string;
  role: userRole;
};

export type UserProfile = {
  profileId: string;
  firstName: string;
  lastName: string;
  contactNumber: string | null
  address: string | null;
  coverPhoto: string | null;
  bloodGroup: string | null;
  role: userRole;
  profileImage: string | null;
  createdAt: Date;
  updatedAt: Date;
  reviewAndRatings: ReviewAndRatings[] ;
  appointmentBooking: AppointmentBooking[];
  products: Product[];
  blogs: Blog[];
  feedBackForms: FeedBackForm[];
  Faq: Faq[];
  doctor: Doctor | null;
  user: User | null;
};




export type IUsersResponse = {
  userId: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  profile: UserProfile | null;
};

export type IUpdateProfileReqAndResponse = {
  firstName?: string;
  lastName?: string;
  profileImage?: string;
  role?: userRole;
};
export type IUserUpdateReqAndResponse = {
  email?: string;
  password?: string;
};
