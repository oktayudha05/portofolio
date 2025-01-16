import {
  type IconType,
  SiAstro,
  SiBootstrap,
  SiCss3,
  SiDocker,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedis,
  SiRubyonrails,
  SiSass,
  SiTailwindcss,
  SiExpress,
  SiApachehadoop,
  SiGin,
  SiGo,
  SiTypescript,
  SiRust,
  SiAjv,
  SiPython,
  SiLinux,
  SiCoffeescript,
  SiPhp,
  SiGithub,
} from '@icons-pack/react-simple-icons'

const SKILLS: { field: string; skills: { skill: string; icon: IconType }[] }[] =
  [
    {
      field: 'Programming Language',
      skills: [
        {
          skill: 'typescript',
          icon: SiTypescript,
        },
        {
          skill: 'go',
          icon: SiGo,
        },
        {
          skill: 'rust',
          icon: SiRust,
        },
        {
          skill: 'python',
          icon: SiPython,
        },
        {
          skill: 'java',
          icon: SiCoffeescript,
        },
        {
          skill: 'php',
          icon: SiPhp,
        },
      ],
    },
    {
      field: 'Frontend',
      skills: [
        { skill: 'react', icon: SiReact },
        { skill: 'nextjs', icon: SiNextdotjs },
        { skill: 'tailwind', icon: SiTailwindcss },
        {
          skill: 'bootstrap',
          icon: SiBootstrap,
        },
      ],
    },
    {
      field: 'Backend',
      skills: [
        {
          skill: 'gin',
          icon: SiGin,
        },
        {
          skill: 'expressjs',
          icon: SiExpress,
        },
        {
          skill: 'mongodb',
          icon: SiMongodb,
        },
        {
          skill: 'postgresql',
          icon: SiPostgresql,
        },
      ],
    },

    {
      field: 'dev',
      skills: [
        {
          skill: 'linux',
          icon: SiLinux,
        },
        {
          skill: 'docker',
          icon: SiDocker,
        },
        {
          skill: 'nginx',
          icon: SiNginx,
        },
        {
          skill: 'github',
          icon: SiGithub,
        },
        {
          skill: 'hadoop',
          icon: SiApachehadoop,
        },
      ],
    },
  ]

export default SKILLS