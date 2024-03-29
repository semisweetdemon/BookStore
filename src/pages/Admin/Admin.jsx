import { useMainContext } from '../../mainContext/MainContext';

const Admin = () => {
	const { getSave, setFile, file, name, setName, category, setCategory, price, setPrice, discription, setDiscription } = useMainContext();

	function handleFileInp(e) {
		let files = e.target.files[0];

		if (files) {
			setFile(URL.createObjectURL(files));
		}
	}
	console.log(file);

	return (
		<section id="admin">
			<div className="container">
				<div className="admin">
					<div className="admin__block">
						<label style={{ display: file ? 'none' : '' }}>
							<input onChange={handleFileInp} type="file" placeholder="Upload photo" />
							<ion-icon name="image-outline"></ion-icon>
							<h3>Upload photo</h3>
						</label>
						<img style={{ display: file ? '' : 'none' }} src={file} alt="" />
						<div className="form">
							<input onChange={(e) => setName(e.target.value)} type="text" placeholder="Product Name" value={name} />
							<div className="twoStrok">
								<input onChange={(e) => setCategory(e.target.value)} type="text" placeholder="Product Category" value={category} />
								<input onChange={(e) => setPrice(e.target.value)} type="text" placeholder="Price" value={price} />
							</div>
							<textarea onChange={(e) => setDiscription(e.target.value)} type="text" placeholder="Product description..." value={discription} />
							<button onClick={() => getSave()}>SAVE</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Admin;
