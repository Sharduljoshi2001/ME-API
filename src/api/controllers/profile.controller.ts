//this controllor layer is responsible for taking and validating request from the client(the frontend) and serving them up
import { Request, Response, NextFunction } from 'express';
import { ProfileService } from '../../business/services/profile.service';
export const getProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    //calling service layer
    const data = await ProfileService.getMyProfile();

    //sending success response
    res.status(200).json({
      success: true,
      message: 'Profile fetched successfully',
      data: data,
    });
  } catch (error) {
    //passing the erro to the middleware
    next(error);
  }
};