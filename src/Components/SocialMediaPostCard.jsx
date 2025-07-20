import { useContext } from "react";
import { postListContext } from "../Store/HomeContext";
import Post from "./Post";
import WelcomeMessage from "./WelcomeMessage";

const SocialMediaPostCard = () => {

    const postList = useContext(postListContext);
    const postListArray = postList.postlist;
    const handleFetchPost = () => {
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then(jsonObject => postList.fetchPost(
                jsonObject.posts));

    }




    return (<div className="PostContainer">

        {(postListArray.length === 0) && <WelcomeMessage handleFetchPost={handleFetchPost}></WelcomeMessage>}
        {postListArray.map((item) => (<Post postObject={item} key={item.id}>
        </Post>))}
    </div>
    );
}

export default SocialMediaPostCard;