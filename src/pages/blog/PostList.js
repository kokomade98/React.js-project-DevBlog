import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

import post_thumb_1 from '../../styles/img/post_thumb_1.png'

export default function PostList({ posts }) {
    return posts && typeof posts === "object" && posts.map(v =>
        <div className="post-container" key={v.id}>
            <div className="post-left-container">
                <img src={post_thumb_1} alt='' />
            </div>
            <div className="post-right-container">
                <Link to={`/blog/${v.id}`}>{v.title}</Link>
                <div className="post-right-content">{v.content}</div>
                <div className="post-right-created">{v.created_at}</div>
            </div>
        </div>
    )
}
