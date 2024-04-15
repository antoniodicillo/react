import {Outlet, Link} from 'react-router-dom'

export default function Posts(props) {

    return (
        <div>   
        <ul>
         {props.posts.map((post) => {
                return <li key={post.id}>
                    <Link to={post.title}>{post.title}</Link></li>
            })
         }
        </ul><br/>
        
        <Outlet/>
        
        </div>
    );
    }