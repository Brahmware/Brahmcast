type OurService = 'Jobs' | 'Studios' | 'Production';
interface ServiceInfo {
  description: string;
  link: string;
};

type OurServices = Record<OurService, ServiceInfo>;

const ourServices: OurServices = {
  Jobs: {
    description: 'Find your dream job',
    link: '/jobs',
  },
  Studios: {
    description: 'Find the best studios',
    link: '/studios',
  },
  Production: {
    description: 'Find the best production',
    link: '/production',
  },
};

export default ourServices;