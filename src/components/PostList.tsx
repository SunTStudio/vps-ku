
import Link from "next/link";
import {Post} from "../types/post";

interface PostListProps {
    posts:Post[];
}

async function PostList({posts}:PostListProps) {
  
  
  return (
    <>
    <div className="post-list">
            {posts.map((post) => (
              <div className="post-item" key={post.documentId}>
                <h2>
                  <Link href={`post/${post.documentId}`}>{post.title}</Link>
                </h2>
              </div>
            ))}
          </div>
          </>
  )
}

export default PostList
