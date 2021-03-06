const base_url = "http://localhost:8069";
export const getProjectPeriod = () => {
    return fetch(base_url+"/restful/udin_project/project_period",{
        headers: {
            "access-token": window.localStorage.getItem("access-token")
        }
    })
};
export const getProjectPeriodId = (id) => {
    return fetch(base_url+"/restful/udin_project/project_period/"+id,{
        headers: {
            "access-token": window.localStorage.getItem("access-token")
        }
    })
};
export const deletePeriod = (id) => {
    return fetch(base_url+"/restful/udin_project/project_period/"+id,{
        method: "DELETE",
        headers: {
            "access-token": window.localStorage.getItem("access-token")
        }
    })
};
export const createPeriodProject = (data) => {
    let formData = new FormData();
    for ( let key in data ) {
        formData.append(key, data[key]);
    }
    return fetch(base_url+"/restful/udin_project/project_period/",{
        method: "POST",
        headers: {
            'charset':'utf-8',
            'Accept': 'application/x-www-form-urlencoded',
            "access-token": window.localStorage.getItem("access-token")
        },
        body: formData
    })
}
export const editPeriodProject = (data,id) => {
    let formData = new FormData();
    for ( let key in data ) {
        formData.append(key, data[key]);
    }
    return fetch(base_url+"/restful/udin_project/project_period/"+id,{
        method: "PUT",
        headers: {
            'charset':'utf-8',
            'Accept': 'application/x-www-form-urlencoded',
            "access-token": window.localStorage.getItem("access-token")
        },
        body: formData
    })
}

export const getExams = () => {
    return fetch(base_url+"/restful/udin_project/exams",{
        headers: {
            "access-token": window.localStorage.getItem("access-token")
        }
    })
};
export const getExamsId = (id) => {
    return fetch(base_url+"/restful/udin_project/exam/"+id,{
        headers: {
            "access-token": window.localStorage.getItem("access-token")
        }
    })
};
export const deleteExam = id => {
    return fetch(base_url+"/restful/udin_project/exam/"+id,{
        method: "DELETE",
        headers: {
            "access-token": window.localStorage.getItem("access-token")
        }
    })
}
export const createExam = (data) => {
    let formData = new FormData();
    for ( let key in data ) {
        formData.append(key, data[key]);
    }
    return fetch(base_url+"/restful/udin_project/exam/",{
        method: "POST",
        headers: {
            'charset':'utf-8',
            'Accept': 'application/x-www-form-urlencoded',
            "access-token": window.localStorage.getItem("access-token")
        },
        body: formData
    })
}
export const editExam = (data,id) => {
    let formData = new FormData();
    for ( let key in data ) {
        formData.append(key, data[key]);
    }
    return fetch(base_url+"/restful/udin_project/exam/"+id,{
        method: "PUT",
        headers: {
            'charset':'utf-8',
            'Accept': 'application/x-www-form-urlencoded',
            "access-token": window.localStorage.getItem("access-token")
        },
        body: formData
    })
}

export const getProjects = () => {
    return fetch(base_url+"/restful/udin_project/projects",{
        headers: {
            "access-token": window.localStorage.getItem("access-token")
        }
    })
};
export const getProjectId = (id) => {
    return fetch(base_url+"/restful/udin_project/project/"+id,{
        headers: {
            "access-token": window.localStorage.getItem("access-token")
        }
    })
};
export const deleteProject = id => {
    return fetch(base_url+"/restful/udin_project/project/"+id,{
        method: "DELETE",
        headers: {
            "access-token": window.localStorage.getItem("access-token")
        }
    })
}
export const createProject = (data) => {
    let formData = new FormData();
    for ( let key in data ) {
        formData.append(key, data[key]);
    }
    return fetch(base_url+"/restful/udin_project/project/",{
        method: "POST",
        headers: {
            'charset':'utf-8',
            'Accept': 'application/x-www-form-urlencoded',
            "access-token": window.localStorage.getItem("access-token")
        },
        body: formData
    })
}
export const editProject = (data,id) => {
    let formData = new FormData();
    for ( let key in data ) {
        formData.append(key, data[key]);
    }
    return fetch(base_url+"/restful/udin_project/project/"+id,{
        method: "PUT",
        headers: {
            'charset':'utf-8',
            'Accept': 'application/x-www-form-urlencoded',
            "access-token": window.localStorage.getItem("access-token")
        },
        body: formData
    })
}

export const getExaminees = (id) => {
    return fetch(base_url+"/restful/udin_project/exam/"+id+"/examinee",{
        headers: {
            "access-token": window.localStorage.getItem("access-token")
        }
    })
};
export const getExamineeId = (id) => {
    return fetch(base_url+"/restful/udin_project/examinee/"+id,{
        headers: {
            "access-token": window.localStorage.getItem("access-token")
        }
    })
};
export const deleteExaminee = id => {
    return fetch(base_url+"/restful/udin_project/examinee/"+id,{
        method: "DELETE",
        headers: {
            "access-token": window.localStorage.getItem("access-token")
        }
    })
}
export const createExaminee = (data) => {
    let formData = new FormData();
    for ( let key in data ) {
        formData.append(key, data[key]);
    }
    return fetch(base_url+"/restful/udin_project/examinee/",{
        method: "POST",
        headers: {
            'charset':'utf-8',
            'Accept': 'application/x-www-form-urlencoded',
            "access-token": window.localStorage.getItem("access-token")
        },
        body: formData
    })
}
export const editExaminee = (data,id) => {
    let formData = new FormData();
    for ( let key in data ) {
        formData.append(key, data[key]);
    }
    return fetch(base_url+"/restful/udin_project/examinee/"+id,{
        method: "PUT",
        headers: {
            'charset':'utf-8',
            'Accept': 'application/x-www-form-urlencoded',
            "access-token": window.localStorage.getItem("access-token")
        },
        body: formData
    })
}

export const getBatch = () => {
    return fetch(base_url+"/restful/udin_project/batch",{
        headers: {
            "access-token": window.localStorage.getItem("access-token")
        }
    })
};
export const getProgram = () => {
    return fetch(base_url+"/restful/udin_project/program",{
        headers: {
            "access-token": window.localStorage.getItem("access-token")
        }
    })
};
export const getStudent = () => {
    return fetch(base_url+"/restful/udin_project/student",{
        headers: {
            "access-token": window.localStorage.getItem("access-token")
        }
    })
};
export const getLecturer = () => {
    return fetch(base_url+"/restful/udin_project/lecturer",{
        headers: {
            "access-token": window.localStorage.getItem("access-token")
        }
    })
};

