import {SUBMIT_COMMENT} from 'actions/types';
import {submitComment} from 'actions';

describe('submit comment', () => {
    it('has the correct type', () => {
        const action = submitComment();
        expect(action.type).toEqual(SUBMIT_COMMENT);
    });

    it('has the correct payload', () => {
        const action = submitComment('comment 1');
        expect(action.payload).toEqual('comment 1');
    });
});