import { getProjects } from "@/lib/actions"

export default async function PortfolioPage() {
  const { projects } = await getProjects()

  return (
    <main className="flex h-screen flex-col gap-12 items-center justify-center bg-slate-800 px-4">
      {projects.map((project: any) => (
        <div key={project.id} className="bg-white p-6 rounded-lg shadow-md">
          <h2>{project?.nomeDoProjeto}</h2>
        </div>
      ))}
    </main>
  )
}
