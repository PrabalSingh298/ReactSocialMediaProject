import { act, createContext, useReducer } from "react";


const postListReducer = (currVal, action) => {
    let newPostList = currVal;
    if (action.type === "DELETE_POST") {
        newPostList = currVal.filter(item => item.id !== action.post)
    }
    else if (action.type === "ADD_POST") {
        newPostList = [action.payload, ...currVal]
    }
    else if (action.type === "FETCH_SERVER_POST") {
        newPostList = action.post
    }
    return newPostList;
}


export const postListContext = createContext({
    postlist: [],
    addPost: () => { },
    deletePost: () => { },
    fetchPost: () => { },
})

const PostListContextProvider = (props) => {

    const [postListRed, dispatchPostList] = useReducer(postListReducer, [])

    const AddPost = (title, body, hashtags, likeReactions, userId) => {
        // console.log(`${title} ${body} ${hashtags} ${likeReactions} ${userId}`)
        const addAction = {
            type: "ADD_POST",
            payload: {
                id: Date.now(),
                title: title,
                body: body,
                tags: hashtags,
                reactions: likeReactions,
                userID: userId
            }
        }
        dispatchPostList(addAction)
    }

    const DeletePost = (postId) => {
        const deleteAction = {
            type: "DELETE_POST",
            post: postId
        }
        dispatchPostList(deleteAction)
    }

    const fetchInitialPost = () => {
        const serverPost = fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then(jsonObject => {
                const fetchAction = {
                    type: "FETCH_SERVER_POST",
                    post: jsonObject.posts
                }
                dispatchPostList(fetchAction)
            }
            )


    }

    return <postListContext.Provider value={{
        postlist: postListRed,
        addPost: AddPost,
        deletePost: DeletePost,
        fetchPost: fetchInitialPost,
    }}>
        {props.children}
    </postListContext.Provider>
};


export default PostListContextProvider;