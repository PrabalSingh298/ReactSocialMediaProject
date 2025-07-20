import { useContext, useState } from "react";
import { postListContext } from "../Store/HomeContext";
import Post from "./Post";
import WelcomeMessage from "./WelcomeMessage";

const SocialMediaPostCard = () => {

    const postList = useContext(postListContext);
    const postListArray = postList.postlist;

    const [initialPost, setInitialPost] = useState(false);

    if (!initialPost) {
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then(jsonObject => postList.fetchPost(
                jsonObject.posts));
        setInitialPost(true);
    }





    return (<div className="PostContainer">

        {(postListArray.length === 0) && <WelcomeMessage></WelcomeMessage>}
        {postListArray.map((item) => (<Post postObject={item} key={item.id}>
        </Post>))}
    </div>
    );
}

export default SocialMediaPostCard;