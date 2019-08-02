<script>
    import MainPage from "../components/MainPage.svelte";
    import ProjectForm from "../components/ProjectForm.svelte";
    import { onMount } from 'svelte';
    import { navigate, Router, Route } from "svelte-routing";
    import { getProjects, deleteProject } from "../data.js"
    let projects = []
    onMount(() => {
        getProjects().then(response=>response.json()).then(data=>{
            projects = data.data.project;
        })
    })

    const createNew = () => {
        navigate('projects/create_project', {replace:true});
    }
    const deleteEl = (id) => {
        deleteProject(id).then(res=>res.json()).then(data=>{
            projects = projects.filter(project=>project.id!=id);
        })
    }
    const editEl = (id) => {
        navigate("projects/edit_project/"+id, {replace:true});
    }
</script>

<MainPage>
    <div slot="main">
        <div class="app-page-title">
            <div class="page-title-wrapper">
                <div class="page-title-heading">
                    <div class="page-title-icon">
                        <i class="pe-7s-album icon-gradient bg-sunny-morning">
                        </i>
                    </div>
                    <div>Proyek
                        <div class="page-title-subheading">
                        </div>
                    </div>
                </div>
                <div class="page-title-actions">
                    
                </div>    
            </div>
        </div>            
        
        <Router>
            <Route path="/">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="main-card mb-3 card">
                            <div class="card-body">
                            <button on:click="{createNew}" type="button"  title="Example Tooltip" data-placement="bottom" class="btn-shadow mr-3 btn btn-dark">
                                <i class="fa fa-star"></i> Buat Proyek Baru 
                            </button>
                                <table class="mb-0 table table-striped">
                                    <thead>
                                    <tr>
                                        <th>Nama</th>
                                        <th>Judul</th>
                                        <th>Pembimbing 1</th>
                                        <th>Pembimbing 2</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {#each projects as item}
                                        <tr>
                                            <td>{item.full_name}</td>
                                            <td>{item.project_title}</td>
                                            <td>{item.lecturer_id1[1]}</td>
                                            <td>{item.lecturer_id2[1]}</td>
                                            <td class="d-flex">
                                                <button 
                                                    class="mb-2 mr-2 btn-transition btn btn-outline-danger" 
                                                    on:click={()=>deleteEl(item.id)}>
                                                    Delete </button>
                                                <button 
                                                    class="mb-2 mr-2 btn-transition btn btn-outline-info" 
                                                    on:click={()=>editEl(item.id)}>
                                                    Edit </button> 
                                            </td>
                                        </tr>
                                    {/each}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </Route>
            <Route path="create_project">
                <ProjectForm isEdit={false}/>
            </Route>
            <Route path="edit_project/*">
                <ProjectForm isEdit={true}/>
            </Route>
        </Router>
    </div>
</MainPage>