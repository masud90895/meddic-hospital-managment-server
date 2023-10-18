import { serviceStatus } from '@prisma/client';

/* eslint-disable no-unused-vars */
export type IServiceCreateRequest = {
  serviceName: string;
  description: string;
  serviceImage: string;
  location: string;
  categoryId: string;
  servicePrice: number;
  serviceStatus: serviceStatus;
};

// export enum chooseServiceStatus {
//   Available = "Available",
//   Upcoming = "Upcoming",
//   Rejected = "Rejected",
// }

export type ICreateNewBlogResponse = {
  serviceId: string;
  categoryId: string;
  createdAt: Date;
};

export type IServiceFilterRequest = {
  searchTerm?: string | undefined;
  categoryId?: string | undefined;
  servicePrice?: string | undefined;
};

export type IUpdateServiceRequest = {
  serviceName?: string;
  description?: string;
  serviceImage?: string;
  location?: string;
  categoryId?: string;
  servicePrice?: number;
  serviceStatus?: serviceStatus;
};

export type ICreateNewServiceResponse = {
  serviceName: string;
  description: string;
  serviceImage: string;
  location: string;
  categoryId: string;
  servicePrice: number;
  serviceStatus: string;
};
