import { useState } from 'react'
import postService from '../../services/posts'
import './PostForm.css'

const PostForm = () => {
  // Do I really need to use state var?
  const [postTitle, setPostTitle] = useState('')
  const [postContent, setPostContent] = useState('')

  const handlePostTitleChange = (event) => {
    setPostTitle(event.target.value)
  }

  const handleSubmit = (event) => {
    // Preventing page reloading
    event.preventDefault()
    console.log('submitted!')
    
    // Reading data from form by converting it to json
    // const formData = new FormData(event.target)
    // const formJson = Object.fromEntries(formData.entries());
    // console.log(formJson)

    // But I can actually just use state var???
    // It's string. Maybe I can convert it to json?
    // But then how do I use it within database?
    // It's seems better to use first variant
    // But again, I can just manually style it for json
    // This variant looks easier, I'll stick with it for now

    // Creating object
    const postObject = {
      title: postTitle,
      content: postContent,
      time: new Date().toJSON()
    }
    console.log(postObject)

    // Sending object to the server
    postService
    .create(postObject)
    
    // Clearing up
    setPostTitle('')
    setPostContent('')
  }

  return (
    <div className='post-form'>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
              Title:
              <div>
              <input className='post-form-title' type='text' value={postTitle} onChange={handlePostTitleChange} />
              </div>
          </label>
        </div>
        {/* Creating a post area.
        TODO: Make it non-resizable in css file */}
        <label> {/* Covering textarea with a lable, so it can be selected, when clicking on label */}
          Write your post:
          <div>
            <textarea
            name='postContent'
            placeholder={`What's on your mind?`}
            value={postContent}
            onChange={event => setPostContent(event.target.value)}
            maxLength={256}
            />
            </div>
        </label>
        <button type='submit'>Post</button>
      </form>
    </div>
  )
}

export default PostForm
