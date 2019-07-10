import { writable } from 'svelte/store';

const base_url = "http://localhost:8069"
export const url = writable("/udin_project/client")
export let access_token = writable( window.localStorage.getItem("access-token") || false );

const createAuth =  () => {
    let isAuth = window.localStorage.getItem("isAuthenticated") || false
    const { subscribe, set, update } = writable(isAuth);
    const url = base_url
    return {
        subscribe,
        login: (user, password) => {
            console.log(user,password)
            let data = new FormData();
            data.append("login", user);
            data.append("password", password);
            data.append("db", "odoo_sia");
            return fetch(url+"/api/auth/token",{
                method: "POST",
                headers: {
                    // 'Content-Type': 'application/json',
                    // 'Content-Type': 'multipart/form-data',
                    'charset':'utf-8',
                    // 'Content-Type': 'application/json',
                    'Accept': 'application/x-www-form-urlencoded'
                },
                body: data
            })
                .then(response=>response.json())
                .then(
                    (data) => {
                        // window.location = "/udin_project/client";
                        access_token.set(data.access_token)
                        window.localStorage.setItem("access-token",data.access_token );
                        window.localStorage.setItem("isAuthenticated", true)
                        set(true);
                    })
                .catch((e)=>console.error(e))
        },
        logout: () => {
            return fetch(url+'/api/auth/token',{
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'access-token': window.localStorage.getItem("access-token")
                },
            }).then(r=>r.json()).then(()=>{
                window.localStorage.removeItem("access-token");
                window.location = "/udin_project/client/login";
                set(false);
            }).catch(()=>window.location = "./login");
        },
        check_auth: () => {
            console.log(window.localStorage.getItem("access-token"));
            return fetch(url+'/api/auth/check_token',{
                method: "GET",
                headers: {
                    'access-token': window.localStorage.getItem("access-token")
                },
            }).then(response=>response.json())
            .then((data)=>{
                if (data.status) {
                    set(true);
                } else {
                    set(false);
                }
            })
            .catch(()=>{
                window.location = "/udin_project/client/login";
                window.localStorage.removeItem("access-token");
                set(false);
            })
        }
    }
}
export const auth = createAuth()