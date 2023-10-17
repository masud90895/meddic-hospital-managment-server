import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IRequestUser } from '../users/user.interface';
import { BlogService } from './blogs.service';
import pick from '../../../shared/pick';
import { blogFilterableFields } from './blogs.constants';

const createBlog = catchAsync(async (req: Request, res: Response) => {
  const profileId = (req.user as IRequestUser).profileId;
  const result = await BlogService.createNewBlog(profileId, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog created Successfully',
    data: result,
  });
});
const getAllBlogs = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, blogFilterableFields);
  const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);

  const result = await BlogService.getAllBlogs(filters, options);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blogs fetched successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getSingleBlog = catchAsync(async (req: Request, res: Response) => {
  const { blogId } = req.params;
  const result = await BlogService.getSingleBlog(blogId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'style retrieved successfully',
    data: result,
  });
});

// update
const updateBlogDetails = catchAsync(async (req: Request, res: Response) => {
  const { blogId } = req.params;
  const updatedData = req.body;
  const result = await BlogService.updateBlogDetails(blogId, updatedData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog Updated successfully!',
    data: result,
  });
});

// delete
const deleteBlog = catchAsync(async (req: Request, res: Response) => {
  const { blogId } = req.params;
  const result = await BlogService.deleteBlog(blogId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog Deleted successfully!',
    data: result,
  });
});

export const BlogsController = {
  createBlog,
  getAllBlogs,
  getSingleBlog,
  updateBlogDetails,
  deleteBlog,
};
