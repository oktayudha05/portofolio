export default function PageTitle({ title }: { title: string }) {
  return (
    <div className="mt-24 flex w-full justify-center rounded-base border-2 border-border bg-white font-base text-text dark:border-darkBorder dark:bg-secondaryBlack dark:text-darkText">
      <h1 className="py-4 text-2xl font-heading sm:text-4xl">{title}</h1>
    </div>
  )
}
