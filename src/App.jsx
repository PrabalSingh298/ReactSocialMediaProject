
import './App.css'
import SocialMediaHeader from './Components/Header'
import SocialSideBar from './Components/SideBar'
import CreatePostForm from './Components/CreatePostForm'
import SocialMediaPostCard from './Components/SocialMediaPostCard'
import SocialMediaFooter from './Components/SocialMediaFooter'

function App() {

  return (
    <>
      <SocialMediaHeader></SocialMediaHeader>
      <div className="mainPageContainer">
        <SocialSideBar></SocialSideBar>
        <div className="mainBody">
          <CreatePostForm></CreatePostForm>
          <SocialMediaPostCard></SocialMediaPostCard>
        </div>
      </div>
      <SocialMediaFooter></SocialMediaFooter>
    </>
  )
}

export default App
