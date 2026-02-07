import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { ProjectService } from '../../business/services/project.service';
//basic validation schema using zod
const QuerySchema = z.object({
  skill: z.string().optional(), //skill should be string and can be optional too
});
export const getProjects = async (req: Request, res: Response, next: NextFunction) => {
  try {
    //checking if request query is valid
    const query = QuerySchema.parse(req.query);
    //getting projects from service layer
    let projects = await ProjectService.filterProjects(); 
    //filtering logic (case insensitive)
    if (query.skill) {
      const searchSkill = query.skill.toLowerCase();
      projects = projects.filter(project => {
        //checking if any tech stack item matches the search skill
        return project.techStack.some(tech => 
          tech.toLowerCase().includes(searchSkill)
        );
      });
    }
    //sending back the response
    res.status(200).json({
      success: true,
      count: projects.length,
      data: projects,
    });
  } catch (error) {
    //passing error to global error handler
    next(error);
  }
};