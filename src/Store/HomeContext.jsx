import { createContext, useReducer } from "react";


const postListReducer = () => { }


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
    },
    {
        id: 2,
        title: "Sasuke Uchiha",
        body: "Sasuke Uchiha is a brilliant but tormented ninja driven by a desire for revenge, whose complex journey leads him from vengeance to redemption.",
        tags: ["Shadow Hokage", "Last Uchiha", "Sharingan"],
    },
    {
        id: 3,
        title: "Kakashi Hatake",
        body: "Kakashi Hatake is a calm and enigmatic elite ninja known for his Sharingan eye, exceptional skills, and his role as the wise mentor of Team 7.",
        tags: ["Copy Ninja", "6th Hokage", "Anbu Black Ops"]
    }
]





const PostListContextProvider = (props) => {

    const [postListRed, dispatchPostList] = useReducer(postListReducer, default_PostList)

    return <postListContext.Provider value={{
        postlist: postListRed,
        addPost: () => { },
        deletePost: () => { },
    }}>
        {props.children}
    </postListContext.Provider>
};


export default PostListContextProvider;