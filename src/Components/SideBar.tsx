const SideBar = () => {
	return (
		// The calc is to make sure the sidebar doesnt overflow the page
		<div
			style={{ height: 'calc(100vh - 40px)' }}
			className="bg-gray-200 flex flex-col items-center"
		>
			<p>Link 1</p>
			<p>Link 2</p>
			<p>Link 3</p>
			<p>Link 4</p>
			<p>Link 5</p>
		</div>
	)
}

export default SideBar
