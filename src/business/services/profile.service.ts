//this is the layer that actually implements the business logic and talks to the repository layer
import { ProfileRepository } from '../../data/repositories/profile.repo';
export const ProfileService = {
  async getMyProfile() {
    const profile = await ProfileRepository.getFullProfile();
    if (!profile) {
      throw new Error('Profile not found. Did you run the seed script?');
    }
    return profile;
  },
};