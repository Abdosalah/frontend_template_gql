import {
	Stack,
	TextField,
	FormGroup,
	FormControlLabel,
	Checkbox,
	InputLabel,
	Select,
	MenuItem,
	FormControl,
} from '@mui/material'
import { useDropzone } from 'react-dropzone'

import { CATEGORY_OPTIONS, EDUCATION_LEVEL_OPTIOINS } from './constants'

const AddACourse = () => {
	const { acceptedFiles, getRootProps, getInputProps } = useDropzone()

	const files = acceptedFiles.map((file) => (
		<li key={file.name}>
			{file.name} - {file.size} bytes
		</li>
	))

	return (
		<>
			<p className="mt-8 w-full text-center text-2xl">Create your course</p>
			<div className="mt-16 w-full flex">
				<Stack className="w-1/2 items-center" gap="1.5rem">
					{/* Course Name */}
					<TextField
						id="courseName"
						className="w-2/3"
						label="Course Name"
						variant="outlined"
					/>

					{/* Category Select */}
					<FormControl className="w-2/3">
						<InputLabel id="categoryLabel">Category</InputLabel>
						<Select
							labelId="categoryLabel"
							id="category"
							label="Category"
							// value
							// onChange={handleChange}
						>
							{CATEGORY_OPTIONS.map((option) => (
								<MenuItem key={option.value} value={option.value}>
									{option.label}
								</MenuItem>
							))}
						</Select>
					</FormControl>

					{/* Category Select */}
					<FormControl className="w-2/3">
						<InputLabel id="educationLevelLabel">Education Level</InputLabel>
						<Select
							labelId="educationLevelLabel"
							id="educationLevel"
							label="Education Level"
							// value
							// onChange={handleChange}
						>
							{EDUCATION_LEVEL_OPTIOINS.map((option) => (
								<MenuItem key={option.value} value={option.value}>
									{option.label}
								</MenuItem>
							))}
						</Select>
					</FormControl>

					{/* Delivery Type */}
					<FormGroup className="w-2/3 items-center justify-between" row>
						<p>Delivery Type</p>
						<FormControlLabel
							control={<Checkbox defaultChecked />}
							label="Online"
						/>
						<FormControlLabel control={<Checkbox />} label="In person" />
					</FormGroup>

					{/* Price and Capacity */}
					<div className="w-2/3 flex justify-between">
						<TextField
							id="price-per-hour"
							className="w-1/2"
							label="Price per hour (USD)"
							type="number"
						/>
						<TextField
							id="capacity"
							className="w-2/5"
							label="Capacity"
							type="number"
						/>
					</div>
				</Stack>
				<Stack className="w-1/2 items-center" gap="1.5rem">
					{/* Here should be some media upload */}

					<div className="cursor-pointer w-2/3 p-3 border border-solid border-gray-300 rounded-lg hover:border-black">
						<div {...getRootProps({ className: 'dropzone' })}>
							<input {...getInputProps()} />
							<p>Drag 'n' drop some files here, or click to select files</p>
						</div>
						<aside>
							<h4>Files</h4>
							<ul>{files}</ul>
						</aside>
					</div>

					{/* Description */}
					<TextField
						id="description"
						className="w-2/3"
						label="Description"
						multiline
						rows={8}
					/>
				</Stack>
			</div>
		</>
	)
}

export default AddACourse
