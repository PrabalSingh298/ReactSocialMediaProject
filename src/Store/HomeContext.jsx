import { createContext, useReducer } from "react";


const postListReducer = (currVal, action) => {
    let newPostList = currVal;
    if (action.type === "DELETE_POST") {
        newPostList = currVal.filter(item => item.id !== action.post)
    }
    if (action.type === "ADD_POST") {
        newPostList = [action.payload, ...currVal]
    }
    return newPostList;
}


export const postListContext = createContext({
    postlist: [],
    addPost: () => { },
    deletePost: () => { },
})

const default_PostList = [
    {
        id: 1,
        title: "Naruto Uzumaki",
        body: "Naruto Uzumaki is a spirited ninja of the Hidden Leaf Village who overcomes loneliness and hardship to become the strongest ninja and earn the title of Hokage.",
        tags: ["7th Hokage", "KnuckleHead Ninja", "Kurama"],
        reaction: 100,
        userID: "user-8"
    },
    {
        id: 2,
        title: "Sasuke Uchiha",
        body: "Sasuke Uchiha is a brilliant but tormented ninja driven by a desire for revenge, whose complex journey leads him from vengeance to redemption.",
        tags: ["Shadow Hokage", "Last Uchiha", "Sharingan"],
        reactions: 30,
        userID: "user-9"
    },
    {
        id: 3,
        title: "Kakashi Hatake",
        body: "Kakashi Hatake is a calm and enigmatic elite ninja known for his Sharingan eye, exceptional skills, and his role as the wise mentor of Team 7.",
        tags: ["Copy Ninja", "6th Hokage", "Anbu Black Ops"],
        reactions: 50,
        userID: "user-10"
    }
]






const PostListContextProvider = (props) => {

    const [postListRed, dispatchPostList] = useReducer(postListReducer, default_PostList)

    const AddPost = (title, body, hashtags, likeReactions, userId) => {
        // console.log(`${title} ${body} ${hashtags} ${likeReactions} ${userId}`)
        const DeleteObject = {
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
        dispatchPostList(DeleteObject)
    }

    const DeletePost = (postId) => {
        const deleteAction = {
            type: "DELETE_POST",
            post: postId
        }
        dispatchPostList(deleteAction)
    }

    return <postListContext.Provider value={{
        postlist: postListRed,
        addPost: AddPost,
        deletePost: DeletePost,
    }}>
        {props.children}
    </postListContext.Provider>
};


export default PostListContextProvider;