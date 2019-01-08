import commentsReducer from 'reducers/comments';
import {SUBMIT_COMMENT} from 'actions/types'; 

it('handles actions of type SUBMIT_COMMENT', () => {
    const action = {
        type: SUBMIT_COMMENT,
        payload: 'New Comment'
    };

    const newState = commentsReducer([], action);

    expect(newState).toEqual(['New Comment']);
});


it('handles action with unknown type', () => {
    const newState = commentsReducer([], {type: 'unknown type', payload: 'This wont work'});
    expect(newState).toEqual([]);
});