interface ExperienceProps {
  experiences: {
    company: string
    role: string
    description: string
    startDate: string
    endDate: string
  }[]
}

export default function Experience({ experiences }: ExperienceProps) {
  return (
    <div className="mb-16">
      <h2 className="mb-8 text-xl font-heading sm:text-2xl">Experience</h2>

      {experiences.map((role, id) => (
        <div className="mb-8" key={id}>
          <h3 className="text-lg font-heading sm:text-xl">
            {role.role} @ {role.company}
          </h3>
          <p className="mb-4 mt-0.5 text-sm">
            {role.startDate} - {role.endDate}
          </p>
          <p>{role.description}</p>
        </div>
      ))}
    </div>
  )
}
