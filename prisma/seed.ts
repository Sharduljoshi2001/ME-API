import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient();
async function main() {
  console.log('starting seeding procss...');
  //cleaning up existing data
  //cascade delete has already been setup in the schema(also mentioned in screen cast)
  await prisma.profile.deleteMany();
  console.log('old data cleared.');
  //inserting new data (my resume)
  const user = await prisma.profile.create({
    data: {
      fullName: 'Shardul Joshi',
      email: 'sharduljoshi2001@gmail.com',
      bio: 'Execution-focused Full Stack Developer specialized in building scalable web applications using Next.js, React.js, and TypeScript.',
      title: 'Full Stack Developer',
      location: 'Noida/Remote',
      resumeUrl: 'https://joshishardulportfolio.netlify.app/', //portfolio link as placeholder
      socials: {
        create: [
          { platform: 'GitHub', url: 'https://github.com/Sharduljoshi2001' },
          { platform: 'Portfolio', url: 'https://joshishardulportfolio.netlify.app/' },
          { platform: 'LinkedIn', url: 'https://linkedin.com/in/sharduljoshi' }
        ]
      },
      education: {
        create: [
          {
            institution: 'Graphic Era Deemed University',
            degree: 'Master’s in Computer Application (MCA)',
            startDate: new Date('2023-09-01'),
            endDate: new Date('2025-10-01'),
            score: 'CGPA: 8.1/10'
          }
        ]
      },
      experience: {
        create: [
          {
            company: 'WestShemrock Bank',
            role: 'Freelance QA Engineer',
            startDate: new Date('2025-09-01'),
            endDate: new Date('2025-11-01'),
            description: 'Validated REST API endpoints and Database integrity. Reduced bugs by 30%. Executed manual and automated test cases.'
          },
          {
            company: 'Coding Ninjas',
            role: 'Data & Insights Developer Intern',
            startDate: new Date('2025-02-01'),
            endDate: new Date('2025-08-01'),
            description: 'Developed automated Python scripts for large-scale data processing. Optimized SQL queries ensuring high availability.'
          }
        ]
      },
      skills: {
        create: [
          { name: 'JavaScript (ES6+)', category: 'Language' },
          { name: 'TypeScript', category: 'Language' },
          { name: 'C++', category: 'Language' },
          { name: 'Python', category: 'Language' },
          { name: 'Next.js', category: 'Frontend' },
          { name: 'React.js', category: 'Frontend' },
          { name: 'Redux', category: 'Frontend' },
          { name: 'Tailwind CSS', category: 'Frontend' },
          { name: 'Node.js', category: 'Backend' },
          { name: 'Express', category: 'Backend' },
          { name: 'MongoDB', category: 'Database' },
          { name: 'PostgreSQL', category: 'Database' },
          { name: 'Docker', category: 'DevOps' },
          { name: 'Git/GitHub', category: 'DevOps' }
        ]
      },
      projects: {
        create: [
          {
            title: 'Collaborative Task Manager',
            description: 'Real-time workspace using Socket.io and Prisma ORM. Implemented Controller-Service-Repository architecture.',
            techStack: ['React', 'Node.js', 'Socket.io', 'Prisma', 'PostgreSQL'],
            repoUrl: 'https://github.com/Sharduljoshi2001/collaborative-task-manager',
            liveUrl: null
          },
          {
            title: 'Next.js REST Client (Postman Clone)',
            description: 'High-performance API client supporting dynamic headers and concurrent API requests.',
            techStack: ['Next.js', 'TypeScript', 'Tailwind'],
            repoUrl: 'https://github.com/Sharduljoshi2001/postman-clone-nextjs',
            liveUrl: null
          },
          {
            title: 'Clueso Clone (AI Tool)',
            description: 'Integrated Google Gemini API to automate documentation generation. Optimized React rendering performance.',
            techStack: ['React.js', 'Gemini API', 'Node.js'],
            repoUrl: 'https://github.com/Sharduljoshi2001/clueso-clone',
            liveUrl: null
          },
          {
            title: 'RTSP Livestream Overlay App',
            description: 'Real-time streaming app using Flask and OpenCV with MongoDB persistence.',
            techStack: ['React', 'Flask', 'OpenCV', 'MongoDB'],
            repoUrl: 'https://github.com/Sharduljoshi2001/RTSP_Project',
            liveUrl: null
          }
        ]
      }
    }
  });
  console.log(`Seeding Complete, Created profile for: ${user.fullName}`);
}
main()
  .catch((e) => {
    console.error('seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });