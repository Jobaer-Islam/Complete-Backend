import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Feed = () => {
    const [posts, setPosts] = useState([
        {
            _id: "1",
            image: "https://unsplash.com/photos/couple-embracing-behind-sheer-white-curtains-gfYnmhDmi7A",
            caption: "My first post",

        }
    ]);

    useEffect(()=>{
        axios.get("http://localhost:3000/posts")
        .then((res)=>{
            setPosts(res.data.posts)
        })
    },[])

    return (
        <section className='feed-section'>
            {
                posts.length > 0 ? (
                    posts.map((post) => ( // Changed { to ( for an implicit return
                        <div key={post._id} className='post-card'>
                            <img src={post.image} alt={post.caption} />
                            <p>{post.caption}</p>
                        </div>
                    )) // Changed } to )
                ) : (
                    <h1>No Posts Available</h1>
                )
            }
        </section>
    );
};