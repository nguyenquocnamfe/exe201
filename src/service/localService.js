import Cookies from "js-cookie";
import { encryptData, decryptData } from "./cryptoService";

export const localUserService = {
    get: () => {
        const encryptedData = Cookies.get("USER_INFO");
        return encryptedData ? decryptData(encryptedData) : null;
    },

    set: (userInfo) => {
        if (userInfo) {
            const { metadata } = userInfo;

            if (metadata.accessToken && metadata.refreshToken) {
                // Mã hóa accessToken và refreshToken trước khi lưu
                const encryptedAccessToken = encryptData(metadata.accessToken);
                const encryptedRefreshToken = encryptData(metadata.refreshToken);

                Cookies.set("ACCESS_TOKEN", encryptedAccessToken, { secure: true, sameSite: "Strict" });
                Cookies.set("REFRESH_TOKEN", encryptedRefreshToken, { secure: true, sameSite: "Strict" });
            } else {
                console.warn("Thiếu accessToken hoặc refreshToken");
            }

            // Mã hóa toàn bộ USER_INFO trước khi lưu
            const encryptedUserInfo = encryptData(metadata);
            Cookies.set("USER_INFO", encryptedUserInfo, { secure: true, sameSite: "Strict" });
        } else {
            console.error("Dữ liệu đăng nhập không hợp lệ:", userInfo);
        }
    },

    getAccessToken: () => {
        const encryptedToken = Cookies.get("ACCESS_TOKEN");
        return encryptedToken ? decryptData(encryptedToken) : null;
    },

    getRefreshToken: () => {
        const encryptedToken = Cookies.get("REFRESH_TOKEN");
        return encryptedToken ? decryptData(encryptedToken) : null;
    },

    remove: () => {
        console.log("Xóa cookie người dùng");
        Cookies.remove("USER_INFO");
        Cookies.remove("ACCESS_TOKEN");
        Cookies.remove("REFRESH_TOKEN");
    }
};
