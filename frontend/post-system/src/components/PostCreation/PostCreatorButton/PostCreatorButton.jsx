import React from 'react'
import { useState } from 'react'
import PostCreator from '../PostCreator/PostCreator.jsx'

const PostCreatorButton = () => {
    const [showPostCreator, setShowPostCreator] = useState(false)    

    return (
        <>
        <button onClick={() => setShowPostCreator(true)}>Show post creator</button>
        <PostCreator onClose={() => setShowPostCreator(false)} show={showPostCreator} />
        </>
    )
}

export default PostCreatorButton