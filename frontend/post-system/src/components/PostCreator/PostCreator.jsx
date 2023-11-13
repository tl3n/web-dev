import React from 'react'
import './PostCreator.css'
import PostForm from '../PostForm/PostForm.jsx'


const PostCreator = props => {
    if (!props.show) {
        return null
    }

    console.log('hto prochitav toy lapochka')

    return (
        <div className='post-creator' onClick={props.onClose}>
            <div className='post-creator-content' onClick={e => e.stopPropagation()}>
                <div className='post-creator-header'>
                    <button onClick={props.onClose} className='post-creator-close-button'>X</button>
                </div>
                <div className='post-creator-body'>
                    <PostForm />
                </div>
                <div className='post-creator-footer'>
                    Add some buttons here
                </div>
            </div>
        </div>
    )
}

export default PostCreator