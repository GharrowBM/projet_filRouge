const initialState = {
    isLoading: false,
    allPosts: undefined,
    currentPost: undefined,
    allTags: undefined,
    allAvatarPath: undefined,
    nbOfUsers: undefined,
    error: undefined
}

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'IS_LOADING':
            return {
                ...state,
                isLoading: action.value
            }
            break;
        case 'END_GETTING_ALL_POSTS_WITH_TAGS':
            return {
                ...state,
                isLoading: false,
                allPosts: action.posts,
                allTags: action.tags,
                nbOfUsers: action.nbOfUsers,
                allAvatarPath: action.allAvatarsPath,
                error: undefined
            }
            break;
        case 'ERROR_GETTING_ALL_POSTS_WITH_TAGS':
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
            break;
        case 'END_GETTING_POST_WITH_ID':
            return {
                ...state,
                isLoading: false,
                currentPost: action.post,
                error: undefined
            }
            break;
        case 'ERROR_GETTING_POST_WITH_ID':
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
            break;
        case 'END_ADDING_NEW_POST':
            return {
                ...state,
                isLoading: false,
                error: undefined
            }
            break;
        case 'ERROR_ADDING_NEW_POST':
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
            break;
        case 'END_ADDING_NEW_ANSWER':
            return {
                ...state,
                isLoading: false,
                error: undefined
            }
            break;
        case 'ERROR_ADDING_NEW_ANSWER':
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
            break;
        case 'END_ADDING_NEW_COMMENT':
            return {
                ...state,
                isLoading: false,
                error: undefined
            }
            break;
        case 'ERROR_ADDING_NEW_COMMENT':
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
            break;
        case 'END_UPDATING_POST':
            return {
                ...state,
                isLoading: false,
                error: undefined
            }
            break;
        case 'ERROR_UPDATING_POST':
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
            break;
        case 'END_SEARCHING_POST_WITH_QUERY':
            return {
                ...state,
                isLoading: false,
                allPosts: action.posts,
                error: undefined
            }
            break;
        case 'ERROR_SEARCHING_POST_WITH_QUERY':
            return {
                ...state,
                isLoading: false,
                error: action.error
            }
        default:
            return {...state}
            break
    }
}