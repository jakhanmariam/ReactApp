import React from "react";
import '../index.css';


function Reg () {
    return(
        <div className="form">
            <div className="container">
                <h1>Register</h1>
                <input id="email" className="inp" type="text" placeholder="enter your email"></input><br></br>
                <input id="password" className="inp" type="password" placeholder="create your password"></input><br></br>
                <button className="btn">Register</button>
                <button className="btn">Logout</button>
                <button className="btn">Delete Account</button>
            </div>
        </div>
    )
}
export default Reg;



// const BlogPost = ({title, content, Delete}) => {
//     const handleLike = () => {
//         setLikes(likes + 1)
//     };

//     return (
//         <div className='blog-post'>
//             <h2>{title}</h2>
//             <p>{content}</p>
//             <button onClick={handleLike}>Like {likes}</button>
//             <button onClick={Delete}>Delete</button>

//         </div>
//     )
// }