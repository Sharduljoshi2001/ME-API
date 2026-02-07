import { ProjectRepository } from '../../data/repositories/project.repo';

export const ProjectService = {
  async filterProjects(skill?: string) {
    //in near future if we want to write any complex logic  (e.g., skill lowercase karna), we'lll write it over here.
    return await ProjectRepository.findProjects(skill);
  },
};