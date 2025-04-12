const securityMiddleware = store => next => action => {
    // Kiểm tra xem action có phải là một action bảo mật hay không
    if (action.type === 'USER_LOGIN' || action.type === 'USER_SIGNUP') {
        const userInfo = store.getState().userReducer.userInfo;

        // Kiểm tra xem người dùng đã đăng nhập hay chưa
        if (!userInfo) {
            console.log("User is not logged in, redirecting to login page...");
            // Có thể dispatch một action để thông báo lỗi hoặc chuyển hướng người dùng đến trang login
            return;
        }

        // Kiểm tra token nếu có (ví dụ với token bảo mật)
        if (userInfo.token && !isValidToken(userInfo.token)) {
            console.log("Invalid token, please log in again.");
            // Có thể dispatch một action để thông báo lỗi hoặc chuyển hướng người dùng đến trang login
            return;
        }
    }

    // Tiếp tục dispatch action nếu không có lỗi
    return next(action);
};

// Hàm kiểm tra tính hợp lệ của token (ví dụ)
const isValidToken = (token) => {
    // Logic kiểm tra token (ví dụ: kiểm tra xem token đã hết hạn hay chưa)
    return token !== "expired-token";
};

export default securityMiddleware;
