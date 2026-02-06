//this layer interacts with the actual database using prisma orm
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export const ProfileRepository = {
  async getFullProfile() {
    //find first cuz there is only one user/profile(i.e, my resume data) and including skills, projects, edu, exp, socials as well
    return await prisma.profile.findFirst({
      include: {
        skills: true,
        projects: true,
        education: true,
        experience: true,
        socials: true,
      },
    });
  },
};