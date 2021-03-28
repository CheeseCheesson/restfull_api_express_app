import Post from "./Post.js";
import fileService from "./fileService.js";

class PostService {
    async create(post, picture){
        const fileName = fileService.saveFile(picture)
      const createdPost = await Post.create({...post, picture: fileName})
        return createdPost
    }
    async getAll(){
        const postsAll = await Post.find()
        return postsAll
    }
    async getOne(id){
        if(!id){
            throw new Error("Нет такого id")
        }
        const postOne = await Post.findOne(id)
        return postOne
    }
    async update(post){
        if(!post._id){
            throw new Error("Нет такого id")
        }
        const postUpdate = new Post.findOneAndUpdate(post)
        return postUpdate
    }
    async delete(id){
        if(!id){
            throw new Error("Нет такого id")
        }
        const postDelete = await Post.findOneAndDelete(id)
        return postDelete
    }
}

export default new PostService()