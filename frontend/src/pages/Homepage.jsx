import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {

  const posts = [
    {
      id: 1,
      title: "dummy data 1",
      desc: "dummy data 1",
      img: "https://i.pinimg.com/564x/3b/b8/59/3bb859b08073d9cb1605c4b4cca4798a.jpg"
    },
    {
      id: 2,
      title: "dummy data 2",
      desc: "dummy data 2",
      img: "https://i.pinimg.com/564x/3b/b8/59/3bb859b08073d9cb1605c4b4cca4798a.jpg"
    },
    {
      id: 2,
      title: "dummy data 3",
      desc: "dummy data 3",
      img: "https://i.pinimg.com/564x/3b/b8/59/3bb859b08073d9cb1605c4b4cca4798a.jpg"
    }
  ]

  return (
    <div className="home">
      <div className="posts">
        {posts.map(post=>(
        <div className="post" key={post.id}>
          <div className="img">
            <img src={post.img} alt=""/>
          </div>
          <div className="content">
            <Link className="link" to={`/post/${post.id}`}>
              <h1>{post.title}</h1>
            </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Homepage