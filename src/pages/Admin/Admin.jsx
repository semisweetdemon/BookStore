import { useMainContext } from "../../mainContext/MainContext";


const Admin = () => {
	const {getSave, 
		image, setImage,
		name,	setName,
		category, setCategory,
		price, setPrice,
		discriotion, setDiscriotion,} = useMainContext()
	return (
		<section id="admin">
			<div className="container">
				<div className="admin">
					<div className="admin__block">
						<div className="file">
							<input onChange={(e) => setImage(e.target.value)} type="file" placeholder="Upload photo" value={image}/>
						</div>
						<div className="form">
							<input onChange={(e) => setName(e.target.value)} type="text" placeholder="Product Name" value={name}/>
							<div className="twoStrok">
								<input onChange={(e) => setCategory(e.target.value)} type="text" placeholder="Product Category" value={category}/>
								<input onChange={(e) => setPrice(e.target.value)} type="text" placeholder="Price" value={price}/>
							</div>
							<input onChange={(e) => setDiscriotion(e.target.value)} type="text" placeholder="Product description..." value={discriotion}/>
							<button onClick={() => getSave()}>SAVE</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Admin;
