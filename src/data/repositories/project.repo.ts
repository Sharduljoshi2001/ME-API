import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export const ProjectRepository = {
  //skills are optional,filter them if present, if not fetch all
  async findProjects(skill?: string) {
    return await prisma.project.findMany({
      where: skill
        ? {
            techStack: {
              has: skill, //postgres array filter->itchecks if array contains the value
            },
          }
        : {}, //empty object means 'no filter'(geting all)
    });
  },
};