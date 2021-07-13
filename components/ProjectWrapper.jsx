import Project from "../components/project";
import projects from "../data/projects";

export default function ProjectWrapper() {
	return (
		<div className="justify-center flex ">
			<div className="w-3/4 relative">
				{projects.map((project) => (
					<Project project={project} key={project.name} />
				))}
			</div>
		</div>
	);
}
