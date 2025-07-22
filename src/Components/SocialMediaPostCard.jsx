import { useContext, useEffect, useState } from "react";
import { postListContext } from "../Store/HomeContext";
import Post from "./Post";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const SocialMediaPostCard = () => {

    const postList = useContext(postListContext);
    const postListArray = postList.postlist;
    const [fetching, setFetching] = useState(false);



    useEffect(() => {
        setFetching(true);
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then(jsonObject => {
                postList.fetchPost(
                    jsonObject.posts)
                setFetching(false)
            }
            )
    },
        [])





    return <>
        <div>
            {fetching && <LoadingSpinner></LoadingSpinner>}
            <div className="PostContainer">
                {!fetching && (postListArray.length === 0) && <WelcomeMessage></WelcomeMessage>}
                {!fetching && postListArray.map((item) => (<Post postObject={item} key={item.id}>
                </Post>))}
            </div>
        </div>
    </>
}

export default SocialMediaPostCard;