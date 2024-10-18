import {
  IconType,
  SiGithub,
  SiGmail,
  SiLinkedin,
  SiMedium,
} from '@icons-pack/react-simple-icons'

export default function Links() {
  const links: { icon: IconType; href: string }[] = [
    {
      icon: SiGithub,
      href: 'https://github.com/oktayudha05',
    },
    {
      icon: SiMedium,
      href: 'https://medium.com/@oktayudha05',
    },
    {
      icon: SiLinkedin,
      href: 'https://www.linkedin.com/in/oktario-mufti-yudha-20188323b/',
    },
    {
      icon: SiGmail,
      href: 'mailto:oktayudha05@gmail.com',
    },
  ]

  return (
    <div className="mr-auto mt-20 flex w-full flex-wrap items-center gap-10">
      {links.map((link, id) => {
        return (
          <a target="_blank" key={id} href={link.href}>
            <link.icon title="" />
          </a>
        )
      })}
    </div>
  )
}
