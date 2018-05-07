import authReducer from '../../reducers/auth';
import { login } from '../../actions/auth';

test('should set the state to logged in', () => {
    const uid = '123456789';
    const action = { type: 'LOGIN', uid };
    const state = authReducer({}, action);
    expect(state).toEqual({ uid });
});

test('should set the state to logged out', () => {
    const action = { type: 'LOGOUT' };
    const state = authReducer({ uid: '123456789' }, action);
    expect(state).toEqual({});
});
