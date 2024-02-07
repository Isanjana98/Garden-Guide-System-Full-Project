// Your function for Axios request configuration
export const AuthConfig = () => {
    const accessToken = localStorage.getItem("token"); // Replace with your actual access token

    return {
        headers: {
            'Authorization': `Bearer ${accessToken}`,
        },
    };
};