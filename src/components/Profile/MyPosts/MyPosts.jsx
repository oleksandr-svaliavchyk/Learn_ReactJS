import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'

let MessagesData = [

    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'It`s my first post', likesCount: 10},

];


const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3> My posts </h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add posts</button>
                </div>
            </div>
            <div className={s.posts}>

                <Post message={MessagesData[0].message} likesCount={MessagesData[0].likesCount}/>
                <Post message={MessagesData[1].message} likesCount={MessagesData[1].likesCount}/>

            </div>
        </div>
    );
}

export default MyPosts;