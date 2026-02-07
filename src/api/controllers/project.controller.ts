import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { ProjectService } from '../../business/services/project.service';
//defining validation schema
const QuerySchema = z.object({
  skill: z.string().optional(), //'skill' should be in string format, but it can be optional as well
});
export const getProjects = async (req: Request, res: Response, next: NextFunction) => {
  try {
    //validating request(for runtime safety)
    const query = QuerySchema.parse(req.query);
    //call;ing service layer
    const projects = await ProjectService.filterProjects(query.skill)
    res.status(200).json({
      success: true,
      count: projects.length,
      data: projects,
    });
  } catch (error) {
    next(error); //middleware will handle the err
  }
};