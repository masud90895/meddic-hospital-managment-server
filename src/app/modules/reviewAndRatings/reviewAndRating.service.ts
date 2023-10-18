/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */

import prisma from '../../../shared/prisma';
import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';
import {
  ICreateReviewAndRatingReq,
  ICreateReviewAndRatingResponse,
  IUpdateReviewRequest,
} from './reviewAndRating.interface';
import { ReviewAndRatings } from '@prisma/client';

// ! Review and Rating create
const createNewRatingAndReview = async (
  profileId: string,
  payload: ICreateReviewAndRatingReq
): Promise<ICreateReviewAndRatingResponse> => {
  //
  const isExisting = await prisma.service.findUnique({
    where: {
      serviceId: payload.serviceId,
    },
  });

  if (!isExisting) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Service not found');
  }

  const createdNewRatingAndReview = await prisma.reviewAndRatings.create({
    data: {
      reviewComment: payload.reviewComment,
      reviewRating: payload.reviewRating,
      serviceId: payload.serviceId,
      profileId,
    },
    select: {
      reviewComment: true,
      reviewRating: true,
      createdAt: true,
    },
  });
  if (!createdNewRatingAndReview) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Review and rating failed to add'
    );
  }

  return createdNewRatingAndReview;
};

// ! update Service ----------------------
const updateRatingAndReview = async (
  reviewId: string,
  payload: Partial<IUpdateReviewRequest>
): Promise<ReviewAndRatings | null> => {
  const isExistReview = await prisma.reviewAndRatings.findUnique({
    where: {
      reviewId,
    },
  });

  if (!isExistReview) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Review Not Found !!!');
  }

  const updateReview = {
    reviewComment: payload?.reviewComment,
    reviewRating: payload?.reviewRating,
  };

  const result = await prisma.reviewAndRatings.update({
    where: {
      reviewId,
    },
    data: updateReview,
  });
  if (!result) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Review sUpdating Failed !!!');
  }
  return result;
};

// ! delete Review s----------------------

const SingleRatingAndReviewDelete = async (
  reviewId: string
): Promise<ReviewAndRatings | null> => {
  const result = await prisma.$transaction(async transactionClient => {
    const isExistFeedBack = await transactionClient.reviewAndRatings.findUnique(
      {
        where: {
          reviewId,
        },
      }
    );

    if (!isExistFeedBack) {
      throw new ApiError(httpStatus.NOT_FOUND, 'Review Not Found');
    }

    const feedBackDeleted = await transactionClient.reviewAndRatings.delete({
      where: {
        reviewId,
      },
    });

    return feedBackDeleted;
  });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Review Not Deleted');
  }
  return result;
};

// get all reviews
const getAllReviews = async () => {
  const result = await prisma.reviewAndRatings.findMany({
    select: {
      reviewComment: true,
      reviewRating: true,
      createdAt: true,
      service: {
        select: {
          serviceName: true,
          serviceId: true,
        },
      },
      profile: {
        select: {
          firstName: true,
          lastName: true,
          profileId: true,
        },
      },
    },
  });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Review Not Found');
  }
  return result;
};

// get only user reviews
const getOnlyUserReviews = async (profileId: string) => {
  const result = await prisma.reviewAndRatings.findMany({
    where: {
      profileId,
    },
    select: {
      reviewComment: true,
      reviewRating: true,
      createdAt: true,
      reviewId: true,
      service: {
        select: {
          serviceName: true,
          serviceId: true,
        },
      },
      profile: {
        select: {
          firstName: true,
          lastName: true,
          profileId: true,
          profileImage: true,
        },
      },
    },
  });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Review Not Found');
  }
  return result;
};

export const RatingAndReviewService = {
  createNewRatingAndReview,
  updateRatingAndReview,
  SingleRatingAndReviewDelete,
  getAllReviews,
  getOnlyUserReviews,
};
