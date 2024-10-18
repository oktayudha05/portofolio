import PageTitle from '@/components/pageTitle'
import Experience from '@/components/sections/experience'
import Skills from '@/components/sections/skills'

export default function About() {
  return (
    <div className="px-5 pb-10 pt-0">
      <PageTitle title="About" />

      <div className="pt-2 font-base">
        <div className="mb-10 text-base sm:text-lg">
          <p>
            {`I'm an Information Technology student specializing in Backend
              Development. Based in Magelang, I am passionate about building
              scalable and efficient systems that solve real-world problems.
              Currently, I'm working with technologies like Node.js, Express,
              MongoDB, and NextJS to sharpen my skills.`}
          </p>
        </div>

        <Skills />

        <Experience />
      </div>
    </div>
  )
}
