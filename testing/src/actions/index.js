import {
    SUBMIT_COMMENT,
    FETCH_COMMENTS
} from './types';
import axios from 'axios';

export function submitComment(comment) {
    return {
        type: SUBMIT_COMMENT,
        payload: comment
    }
}

export function fetchComments() {
    const response = axios.get('http://jsonplaceholder.typicode.com/comments');
    return{
        type: FETCH_COMMENTS,
        payload: response
    }
}