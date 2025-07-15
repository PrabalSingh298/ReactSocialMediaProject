
import './App.css'
import SocialMediaHeader from './Components/Header'
import SocialSideBar from './Components/SideBar'
import CreatePostForm from './Components/CreatePostForm'
import SocialMediaPostCard from './Components/SocialMediaPostCard'
import SocialMediaFooter from './Components/SocialMediaFooter'
import { useState } from 'react'
import PostListContextProvider from './Store/HomeContext'

function App() {

  const [selectedTab, setSelectedTab] = useState("Create Posts")

  return (
    <>
      <PostListContextProvider>
        <SocialMediaHeader></SocialMediaHeader>
        <div className="mainPageContainer">
          <SocialSideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></SocialSideBar>
          <div className="mainBody">
            {selectedTab === "Home" ? <SocialMediaPostCard></SocialMediaPostCard> : <CreatePostForm></CreatePostForm>}
          </div>
        </div>
        <SocialMediaFooter></SocialMediaFooter>
      </PostListContextProvider>
    </>
  )
}

export default App
