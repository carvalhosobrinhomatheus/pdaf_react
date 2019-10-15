export const isAuthenticated = () => {
    const authorization = localStorage.getItem("Authorization");
    if(authorization != null){
        return true;
    }
    return false;
};