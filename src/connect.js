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


export const onCreate = async (object) => {
    alert(JSON.stringify(object))
    const t = await axios.post(`http://localhost:8080/myproject/create`, object)
    return t;
}

export const onLoadoneuser = async () => {
    const t = await axios.get(`http://localhost:8080/myproject/${sessionStorage.getItem('student')}`,
        {
            headers:
            {
                "Authorization": `Basic ${sessionStorage.getItem('user')}`
            }
        })
    return t
}


export const onUpdateoneuser = async (object) => {
    const t = await axios.put(`http://localhost:8080/myproject/update`, object,
        {
            headers:
            {
                "Authorization": `Basic ${sessionStorage.getItem('user')}`
            }
        })
    return t;
}


export const onCreatepersonaldetails = async (object) => {
    alert("before to back end " + JSON.stringify(object))
    const t = await axios.post(`http://localhost:8080/myproject/createpersonal`, object,
        {
            headers:
            {
                Authorization: `Basic ${sessionStorage.getItem('user')}`
            }
        })
    return t;

}

export const onUpdatepersonal = async (object) => {
    const t = await axios.put(`http://localhost:8080/myproject/updatepersonal`, object,
        {
            headers:
            {
                "Authorization": `Basic ${sessionStorage.getItem('user')}`
            }
        })
    return t;
}

export const onLoadpersonalinfo = async () => {

    const t = await axios.get(`http://localhost:8080/myproject/readonepersonalinfo/${sessionStorage.getItem('student')}`,
        {
            headers:
            {
                "Authorization": `Basic ${sessionStorage.getItem('user')}`
            }
        })
    return t;
}


// SCHOOL DETAILS AXIOS CONNECTION


export const onCreateschooldetails = async (object) => {
    alert("before to back end " + JSON.stringify(object))
    const t = await axios.post(`http://localhost:8080/myproject/createschool`, object,
        {
            headers:
            {
                Authorization: `Basic ${sessionStorage.getItem('user')}`
            }
        })
    return t;

}

export const onLoadschoolinfo = async () => {

    const t = await axios.get(`http://localhost:8080/myproject/readschoolinfo/${sessionStorage.getItem('student')}`,
        {
            headers:
            {
                "Authorization": `Basic ${sessionStorage.getItem('user')}`
            }
        })
    return t;
}


export const onUpdateschoolinfo = async (object) => {
    const t = await axios.put(`http://localhost:8080/myproject/updateschool`, object,
        {
            headers:
            {
                "Authorization": `Basic ${sessionStorage.getItem('user')}`
            }
        })
    return t;
}