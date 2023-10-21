import {Link} from 'react-router-dom'

const Landing = ()=>{
    return(
        <div>
            <h2>Hola mundo</h2>
            <Link to='/home'>
            <button>Home</button>
            </Link>
        </div>
    )
};

export default Landing