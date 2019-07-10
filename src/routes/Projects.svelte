<script>
    import MainPage from "../components/MainPage.svelte";
    import ProjectForm from "../components/ProjectForm.svelte";
    import { onMount } from 'svelte';
    import { navigate, Router, Route } from "svelte-routing";
    import { getProjects } from "../data.js"
    let projects = []
    onMount(() => {
        getProjects().then(response=>response.json()).then(data=>{
            projects = data.data.project;
        })
    })

    const createNew = () => {
        navigate('projects/create_project', {replace:true});
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
                    <button on:click="{createNew}" type="button" data-toggle="tooltip" title="Example Tooltip" data-placement="bottom" class="btn-shadow mr-3 btn btn-dark">
                        <i class="fa fa-star"></i> Buat Proyek Baru
                    </button>
                </div>    
            </div>
        </div>            
        
        <Router>
            <Route path="/">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="main-card mb-3 card">
                            <div class="card-body"><h5 class="card-title">Table striped</h5>
                                <table class="mb-0 table table-striped">
                                    <thead>
                                    <tr>
                                        <th>Nama</th>
                                        <th>Judul</th>
                                        <th>Pembimbing 1</th>
                                        <th>Pembimbing 2</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {#each projects as item}
                                        <tr>
                                            <th>{item.full_name}</th>
                                            <th>{item.project_title}</th>
                                            <th>{item.lecturer_id1[1]}</th>
                                            <th>{item.lecturer_id2[1]}</th>
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
                <ProjectForm></ProjectForm>
            </Route>
        </Router>
    </div>
</MainPage>