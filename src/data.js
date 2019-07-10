const base_url = "http://localhost:8069"
export const getProjectPeriod = () => {
    return fetch(base_url+"/restful/udin_project/project_period",{
        headers: {
            "access-token": window.localStorage.getItem("access-token")
        }
    })
};
export const getProjects = () => {
    return fetch(base_url+"/restful/udin_project/projects",{
        headers: {
            "access-token": window.localStorage.getItem("access-token")
        }
    })
};
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
