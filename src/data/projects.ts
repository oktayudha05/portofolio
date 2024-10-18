interface Projects {
  name: string
  description: string
  liveLink: string | null
  previewImage: string
  repoUrl: string
}

const PROJECTS: Projects[] = [
  {
    name: 'Eggonomic.io',
    description:
      'I lead the development of an automated poultry feed solution designed',
    liveLink: 'https://eggonomic.com',
    previewImage: '/eggonomic.png',
    repoUrl: 'https://github.com/oktayudha05/eggonomic',
  },
  {
    name: 'Document Automation',
    description: 'Madusari Village Document Automation',
    // liveLink: 'https://kelurahan-madusari.vercel.app/',
    liveLink: null,
    previewImage: '/kelurahan.png',
    repoUrl: 'https://github.com/oktayudha05/kelurahan',
  },
  // {
  //   name: 'Terra-Project',
  //   description: 'Lorem ipsum dolor sit amet',
  //   liveLink: 'https://google.com',
  //   previewImage: '/project3.png',
  //   repoUrl: 'https://github.com',
  // },
  // {
  //   name: 'Realtime Chat',
  //   description: 'Lorem ipsum dolor sit amet',
  //   liveLink: 'https://google.com',
  //   previewImage: '/project4.png',
  //   repoUrl: 'https://github.com',
  // },
]

export default PROJECTS
