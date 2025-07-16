import { useContext, useRef } from "react";
import { postListContext } from "../Store/HomeContext";

const CreatePostForm = () => {

    const contextObject = useContext(postListContext)

    const addPost = contextObject.addPost

    const postTitle = useRef();
    const postBody = useRef();
    const postID = useRef();
    const tags = useRef();
    const reactions = useRef();
    const userId = useRef();

    const handleFormInput = (event) => {
        event.preventDefault()
        const title = postTitle.current.value;
        const body = postBody.current.value;
        const hashtags = tags.current.value.split(" ")
        const likeReactions = reactions.current.value;
        const userID = userId.current.value;

        addPost(title, body, hashtags, likeReactions, userID);

    }



    return (<form className="myForm" onSubmit={handleFormInput}>
        <div className="mb-3">
            <label htmlFor="postTitle" className="form-label">Post Title</label>
            <input type="text" className="form-control" ref={postTitle} id="postTitle" />
        </div>
        <div className="mb-3">
            <label htmlFor="postBody" className="form-label">Post Content</label>
            <textarea type="text" className="form-control" rows={4} ref={postBody} id="postBody" />
        </div>
        <div className="mb-3">
            <label htmlFor="postID" className="form-label">Post ID</label>
            <input type="text" className="form-control" ref={postID} id="postID" />
        </div>
        <div className="mb-3">
            <label htmlFor="Tags" className="form-label">Tags</label>
            <input type="text" className="form-control" ref={tags} id="Tags" />
        </div>
        <div className="mb-3">
            <label htmlFor="Reactions" className="form-label">Reactions</label>
            <input type="text" className="form-control" ref={reactions} id="Reactions" />
        </div> <div className="mb-3">
            <label htmlFor="userID" className="form-label">User ID</label>
            <input type="text" className="form-control" ref={userId} id="userID" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    );
}

export default CreatePostForm;