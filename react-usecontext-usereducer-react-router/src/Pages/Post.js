import React, { useEffect, useContext } from 'react';
import BlogContext from '../context/blogContext';
import { useParams } from 'react-router-dom';

const Post = () => {
    const blogContext = useContext(BlogContext);
    const { getPostById, currentBlogPost } = blogContext;

    let { postId } = useParams();

    useEffect(() => {
        getPostById(postId)
    }, [])

    return (
        <div className='post'>
            {
                currentBlogPost ? (
                    <div>
                        <div className='post-image' style={{
                            width: '100%',
                            height: '300px',
                            backgroundImage: `url('${currentBlogPost.image}')`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            position: 'relative',
                            borderTopLeftRadius: '2px',
                            borderTopRightRadius: '2px'
                        }}>
                        </div>
                        <div className='post-content'>
                            <h2>{currentBlogPost.title}</h2>
                            <p>{currentBlogPost.content}</p>
                        </div>
                    </div>
                ) : (
                    <div>Loading....</div>
                )
            }
        </div>
    )
}

export default Post;
