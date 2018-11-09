const filename = '../data/posts.json';
let posts = require(filename);
const helper = require('../helpers/helper');

const getPosts = () => {
    return new Promise((resolve, reject) => {
        if (posts.length === 0) {
            reject({
                message: 'no posts',
                status: 202
            });
        }

        resolve(posts);
    });
};
const getPost = (id) => {
    return new Promise((resolve, reject) => {
        helper.mustBeInArray(posts, id)
        .then(post => resolve(post))
        .catch(err => reject(err))
    });
};

const insertPosts = (newPost) => {
    return new Promise((resolve, reject) => {
        const id = { id: getNewId(posts) }

        const date = { 
            createdAt: newDate(),
            updatedAt: newDate()
        }

        newPost = { ...id, ...date, ...newPost }
        posts.push(newPost)
        helper.writeJSONFile(filename, posts)
        resolve(newPost)
    })
};

const updatePost = (id, newPost) => {
    return new Promise((resolve, reject) => {
        mustBeInArray(posts, id)
        .then(post => {
            const index = posts.findIndex(p => p.id == post.id);
            id = { id: post.id }
            const date = {
                createdAt: post.createdAt,
                updatedAt: helper.newDate()
            }
            posts[index] = { ...id, ...date, ...newPost}
            helper.writeJSONFile(filename, posts)
            resolve(posts[index])
        })
        .catch(err => reject(err))
    })
};
const deletePost = (id) => {
    return new Promise((resolve, reject) => {
        mustBeInArray(posts, id)
        .then(() => {
            posts = posts.filter(p => p.id !== id)

            helper.writeJSONFile(filename, posts)
            resolve()
        })
        .catch(err => reject(err)) 
    })
};

module.exports = {
    insertPosts,
    getPosts,
    getPost,
    updatePost,
    deletePost
};