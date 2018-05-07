import { login, logout } from '../../actions/auth';

test('should generate appropriate login action', () => {
    const uid = '123456789';
    const action = login(uid);
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    });
});

test('should generate appropriate logout action', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});
