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
} from '@icons-pack/react-simple-icons'

const SKILLS: { field: string; skills: { skill: string; icon: IconType }[] }[] =
  [
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
          skill: 'nodejs',
          icon: SiNodedotjs,
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
        {
          skill: 'mysql',
          icon: SiMysql,
        },
        {
          skill: 'nginx',
          icon: SiNginx,
        },
        {
          skill: 'docker',
          icon: SiDocker,
        },
      ],
    },
  ]

export default SKILLS