import { useState } from "react";
import { useMainContext } from "../../mainContext/MainContext";


const Admin = () => {
	const {getSave, 
		image, setFile, file,
		name,	setName,
		category, setCategory,
		price, setPrice,
		discription, setDiscription,} = useMainContext()


		function handleFileInp(e){
			let file = e.target.files[0]
			if(file){
				let image = URL.createObjectURL(file)
				setFile(image)
			}
		}

	return (
		<section id="admin">
			<div className="container">
				<div className="admin">
					<div className="admin__block">
						<label style={{display: file ? 'none' : ''}}>
							<input onChange={handleFileInp} type="file" placeholder="Upload photo" value={image}/>
						</label>
						<img style={{display: file ? '' : 'none'}} src={file
						} alt="" />
						<div className="form">
							<input onChange={(e) => setName(e.target.value)} type="text" placeholder="Product Name" value={name}/>
							<div className="twoStrok">
								<input onChange={(e) => setCategory(e.target.value)} type="text" placeholder="Product Category" value={category}/>
								<input onChange={(e) => setPrice(e.target.value)} type="text" placeholder="Price" value={price}/>
							</div>
							<input onChange={(e) => setDiscription(e.target.value)} type="text" placeholder="Product description..." value={discription}/>
							<button onClick={() => getSave()}>SAVE</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Admin;
