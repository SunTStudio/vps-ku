import {Post} from "../types/post";

export  async function getLastPost():Promise<Post[]> {
  const res = await fetch("http://26.181.95.26:1337/api/artikels");
  const posts = await res.json();
  return posts;
}

export  async function getOnePost(id:string):Promise<Post> {

  const res = await fetch(`http://26.181.95.26:1337/api/artikels/${id}`);
  const posts = await res.json();
  return posts;

}