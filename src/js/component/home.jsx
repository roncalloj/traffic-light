import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
		
	const [color, setColor] = useState();

	return (
		<div className="fondo">
			<div className="d-flex flex-column " style={{height: "100%"}}>
				<div className= {`circulo rojo ${"rojo"==color?"activo":""}`} onClick={()=>{setColor("rojo"==color?"":"rojo")}}></div>
				<div className= {`circulo amarillo ${"amarillo"==color?"activo":""}`} onClick={()=>{setColor("amarillo"==color?"":"amarillo")}}></div>
				<div className= {`circulo verde ${"verde"==color?"activo":""}`} onClick={()=>{setColor("verde"==color?"":"verde")}}></div>
			</div>
		</div>
	);
};

export default Home;
