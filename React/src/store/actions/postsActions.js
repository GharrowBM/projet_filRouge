import {
    getAllPosts,
    getAllTags,
    getAllUsers,
    getPost, postAnswer,
    postComment,
    postPost,
    searchPostWithString, updateAnswer,
    updatePost,
    updateComment, getAllAvatars
} from "../../services/dataService";

export const IS_LOADING = "IS_LOADING"
export const END_GETTING_ALL_POSTS_WITH_TAGS = "END_GETTING_ALL_POSTS_WITH_TAGS"
export const ERROR_GETTING_ALL_POSTS_WITH_TAGS = "ERROR_GETTING_ALL_POSTS_WITH_TAGS"
export const END_GETTING_POST_WITH_ID = "END_GETTING_POST_WITH_ID"
export const ERROR_GETTING_POST_WITH_ID = "ERROR_GETTING_POST_WITH_ID"
export const END_ADDING_NEW_POST = "END_ADDING_NEW_POST"
export const ERROR_ADDING_NEW_POST = "ERROR_ADDING_NEW_POST"
export const END_ADDING_NEW_ANSWER = "END_ADDING_NEW_ANSWER"
export const ERROR_ADDING_NEW_ANSWER = "ERROR_ADDING_NEW_ANSWER"
export const END_ADDING_NEW_COMMENT = "END_ADDING_NEW_COMMENT"
export const ERROR_ADDING_NEW_COMMENT = "ERROR_ADDING_NEW_COMMENT"
export const END_UPDATING_POST = "END_UPDATING_POST"
export const ERROR_UPDATING_POST = "ERROR_UPDATING_POST"
export const END_UPDATING_COMMENT = "END_UPDATING_COMMENT"
export const ERROR_UPDATING_COMMENT  = "ERROR_UPDATING_COMMENT"
export const END_UPDATING_ANSWER = "END_UPDATING_ANSWER"
export const ERROR_UPDATING_ANSWER = "ERROR_UPDATING_ANSWER"
export const END_SEARCHING_POST_WITH_QUERY = "END_SEARCHING_POST_WITH_QUERY"
export const ERROR_SEARCHING_POST_WITH_QUERY = "ERROR_SEARCHING_POST_WITH_QUERY"

export const fetchAllPostsWithTags = () => {
    return (dispatch) => {
        dispatch({
            type: IS_LOADING,
            value: true
        })
        getAllPosts().then(res => {
            const posts = res.data
            getAllTags().then(res => {
                const tags = res.data

                getAllUsers().then(res => {
                    const nbOfUsers = res.data.length

                    getAllAvatars().then(res => {
                        dispatch({
                            type: END_GETTING_ALL_POSTS_WITH_TAGS,
                            posts: posts,
                            tags: tags,
                            nbOfUsers: nbOfUsers,
                            allAvatarsPath: res.data
                        })
                    })

                })
            })
        }).catch(error => {
            dispatch({
                type: ERROR_GETTING_ALL_POSTS_WITH_TAGS,
                error: error
            })
        })
    }
}

export const fetchPostWithId = (id) => {
    return (dispatch) => {
        dispatch({
            type: IS_LOADING,
            value: true
        })
        getPost(id).then(res => {
            dispatch({
                type: END_GETTING_POST_WITH_ID,
                post: res.data
            })
        }).catch(error => {
            dispatch({
                type: ERROR_GETTING_POST_WITH_ID,
                error: error
            })
        })
    }
}

export const searchPosts = (searchString) => {
    return (dispatch) => {
        dispatch({
            type : IS_LOADING,
            value: true
        })
        searchPostWithString(searchString).then(res => {
            dispatch({
                type: END_SEARCHING_POST_WITH_QUERY,
                isLoading: false,
                posts: res.data
            })
        }).catch(error => {
            dispatch({
                type: ERROR_SEARCHING_POST_WITH_QUERY,
                error: error
            })
        })
    }
}

export const submitNewPost = (post) => {
    return (dispatch) => {
        dispatch({
            type: IS_LOADING,
            value: true
        })
        postPost(post).then(res => {
            dispatch({
                type: END_ADDING_NEW_POST
            })
        }).catch(error => {
            dispatch({
                type: ERROR_ADDING_NEW_POST,
                error: error
            })
        })
    }
}

export const submitNewAnswer = (answer, postId) => {
    return (dispatch) => {
        dispatch({
            type: IS_LOADING,
            value: true
        })
        postAnswer(answer).then(res => {
            getPost(postId).then(res => {
                dispatch({
                    type: END_GETTING_POST_WITH_ID,
                    post: res.data
                })
            })
            dispatch({
                type: END_ADDING_NEW_ANSWER
            })
        }).catch(error => {
            dispatch({
                type: ERROR_ADDING_NEW_ANSWER,
                error: error
            })
        })
    }
}

export const submitNewComment = (comment, postId) => {
    return (dispatch) => {
        dispatch({
            type: IS_LOADING,
            value: true
        })
        postComment(comment).then(res => {
            getPost(postId).then(res => {
                dispatch({
                    type: END_GETTING_POST_WITH_ID,
                    post: res.data
                })
            })
            dispatch({
                type: ERROR_ADDING_NEW_COMMENT
            })
        }).catch(error => {
            dispatch({
                type: ERROR_ADDING_NEW_COMMENT,
                error: error
            })
        })
    }
}



export const updatePostAction = (id, post) => {
    return (dispatch) => {
        dispatch({
            type: IS_LOADING,
            value: true
        })
        updatePost(id, post).then(res => {
            dispatch({
                type: END_UPDATING_POST
            })
        }).catch(error => {
            dispatch({
                type: ERROR_UPDATING_POST,
                error: error
            })
        })
    }
}

export const updateCommentAction = (id, comment, postId) => {
    return (dispatch) => {
        dispatch({
            type: IS_LOADING,
            value: true
        })
        updateComment(id, comment).then(res => {
            getPost(postId).then(res => {
                dispatch({
                    type: END_GETTING_POST_WITH_ID,
                    post: res.data
                })
            })
            dispatch({
                type: END_UPDATING_COMMENT
            })
        }).catch(error => {
            dispatch({
                type: ERROR_UPDATING_COMMENT,
                error: error
            })
        })
    }
}

export const updateAnswerAction = (id, answer, postId) => {
    return (dispatch) => {
        dispatch({
            type: IS_LOADING,
            value: true
        })
        updateAnswer(id, answer).then(res => {
            getPost(postId).then(res => {
                dispatch({
                    type: END_GETTING_POST_WITH_ID,
                    post: res.data
                })
            })
            dispatch({
                type: END_UPDATING_ANSWER
            })
        }).catch(error => {
            dispatch({
                type: ERROR_UPDATING_ANSWER,
                error: error
            })
        })
    }
}