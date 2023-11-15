import { useState } from 'react'
import { format } from 'fecha' // Formatting date to SQL format
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

    // Creating object
    // TODO: ADD preview_url
    const post = {
      title: postTitle,
      content: postContent,
      date: format(new Date(), 'YYYY-MM-DD')
    }
    console.log(post)

    // Sending object to the server
    postService
    .create(post)
    
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
        {/* Creating a post area.*/}
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
