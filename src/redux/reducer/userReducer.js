import { USER_LOGIN } from "../contant/useContant";
import { localUserService } from "../../service/localService";

const initialState = {
    userInfo: localUserService.get() || {},  // Đảm bảo không null nếu không có thông tin
};

const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case USER_LOGIN:
            return { ...state, userInfo: payload };
        default:
            return state;
    }
};

export default userReducer;
