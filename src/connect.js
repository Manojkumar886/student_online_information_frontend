import axios from "axios";
export const loadStudentdetails = async (object) => {
    try {
        // creadential get a username and password
        const credential = object.username + ":" + object.password;
        // token is convaerted to ascii values
        const token = btoa(credential);

        const t = await axios.get(`http://localhost:8080/myproject/list`,
            {
                headers:
                {
                    "Authorization": `Basic ${token}`
                }
            })
        if (t.data) {
            sessionStorage.setItem("student", object.username);
            sessionStorage.setItem("user", token);
            return t;
        }
    }
    catch (err) {
        alert(err)
    }


}