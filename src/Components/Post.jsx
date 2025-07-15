import { ImCross } from "react-icons/im";
const Post = ({ postObject }) => {
    return <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
            <h5 className="card-title">{postObject.title}</h5>
            <p className="card-text">
                {postObject.body}
            </p>
            {postObject.tags.map((item) => (<span className="badge rounded-pill text-bg-primary" key={item}>{item}</span>))}

            <a href="#" className="btn btn-primary">Like</a>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                <ImCross />

            </span>
        </div>
    </div>
};

export default Post;
