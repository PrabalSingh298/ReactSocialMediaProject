import { useContext } from "react";
import { postListContext } from "../Store/HomeContext";
import Post from "./Post";

const SocialMediaPostCard = () => {

    const postList = useContext(postListContext);
    const postListArray = postList.postlist;

    return (<div className="PostContainer">
        {postListArray.map((item) => (<Post postObject={item} key={item.id}>
        </Post>))}
    </div>
    );
}

export default SocialMediaPostCard;