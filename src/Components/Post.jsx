import { useContext } from "react";
import { ImCross } from "react-icons/im";
import { postListContext } from "../Store/HomeContext";
const Post = ({ postObject }) => {
    const postListObject = useContext(postListContext)
    const deletePost = postListObject.deletePost

    return <div className="card myCard" >
        <div className="card-body">
            <h5 className="card-title">{postObject.title}</h5>
            <p className="card-text postContent" >
                {postObject.body}
            </p>
            {postObject.tags.map((item) => (<span className="badge rounded-pill text-bg-primary myTag" key={item}>{item}</span>))}

            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={() => { deletePost(postObject.id) }}>
                <ImCross />

            </span>
        </div>
    </div>
};

export default Post;
