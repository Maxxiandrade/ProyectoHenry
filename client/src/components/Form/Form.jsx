import { Link } from "react-router-dom";
const Form = ()=>{

    const handleSubmit=(event)=>{

    }

    return(
        <form>
            <Link to='/home'>
            <button>Back</button>
            </Link>
            <hr />
             <label htmlFor="">Dog breed:</label>
             <br />
             <input type="text" name="nombre" id="nombre" />
             <hr />
             <label htmlFor=""></label>
             <br />
             <label htmlFor="">Min height</label>
             <input type="text" name="height1" id="minHeight" />
             <label htmlFor="">Max height</label>
             <input type="text" name="height1" id="maxHeight" />
             <hr />
             <br />
             <label htmlFor="">Min weight</label>
             <input type="text" name="weight1" id="minWeight" />
             <label htmlFor="">Max weight</label>
             <input type="text" name="weight2" id="maxWeight" />
             <hr />
             <label htmlFor="">Lifespan (years)</label>
             <input type="text" name="" id="" />
             <hr />
             <button >Post dog</button>
        </form>

    )
};

export default Form