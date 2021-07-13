const project = ({ project }) => (
	<div className=" p-4 grid grid-cols-2 sticky top-0">
		<div className="p-1 bg-gray-300 w-full flex items-center justify-center h-96 rounded">
			<div className="w-3/4 h-3/4">
				<img
					src={project.img}
					alt={project.name}
					className="w-full h-full"
				/>
			</div>
		</div>
		<div className="p-1 flex  flex-col bg-black">
			<div className="uppercase font-semibold text-sm p-2">
				<div className="text-xs text-gray-500">Project Name</div>
				<div>{project.name}</div>
			</div>
			<div className="uppercase font-semibold text-sm p-2">
				<div className="text-xs text-gray-500">Description</div>
				<div>{project.description}</div>
			</div>
			<div className="uppercase font-semibold text-sm p-2">
				<div className="text-xs text-gray-500">technology used</div>
				<div>{project.technologies.toString()}</div>
			</div>
			<div className="uppercase font-semibold text-sm p-2">
				<div className="text-xs text-gray-500">client</div>
				<div>{project.client}</div>
			</div>
			<div className=" p-2 uppercase transform hover:translate-x-4 hover:text-gray-400 text-sm">
				<a href={project.url}> {">"} View project</a>
			</div>
		</div>
	</div>
);

export default project;
