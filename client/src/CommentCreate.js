import React, { useState } from 'react'
import axios from 'axios'




export default ({postId}) => {
    const [content, setContent ] = useState('')

    const onSubmit = async (event) => {
        event.preventDefault()
        axios.post(`http://posts.com/posts/${postId}/comments`, {
            content: content
        })
        setContent('')
    }

    return <div>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label>
                    <input value={content} onChange={e => setContent(e.target.value) } className="form-control" />
                </label>
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
    </div>
}