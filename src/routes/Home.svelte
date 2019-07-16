<script>
    import MainPage from "../components/MainPage.svelte";
    import ProjectPeriodForm from "../components/ProjectPeriodForm.svelte";
    import { onMount } from 'svelte';
    import { navigate, Router, Route } from "svelte-routing";
    import { getProjectPeriod, deletePeriod } from "../data.js"
    let project_period = []
    onMount(() => {
        getProjectPeriod().then(response=>response.json()).then(data=>{
            project_period = data.data.project;
        })
    })
    const createNew = () => {
        navigate('home/create_project_period', {replace:true});
    }
    const deleteEl = (id) => {
        deletePeriod(id).then(res=>res.json()).then(data=>{
            project_period = project_period.filter(period=>period.id!=id);
        })
    }
    const editEl = (id) => {
        navigate("home/edit_project_period/"+id, {replace:true});
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
                    <div>Periode Proyek
                        <div class="page-title-subheading">
                        </div>
                    </div>
                </div>
                <div class="page-title-actions">
                    
                </div>    
            </div>
        </div>            
        <Router>
            <Route path="">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="main-card mb-3 card">
                            <div class="card-body">
                            <button on:click="{createNew}" type="button" title="Example Tooltip" data-placement="bottom" class="btn-shadow mr-3 btn btn-dark">
                                <i class="fa fa-star"></i> Buat Periode Baru
                            </button>
                                <table class="mb-0 table table-striped">
                                    <thead>
                                    <tr>
                                        <th>Periode</th>
                                        <th>Nama</th>
                                        <th>Mulai input Dosbing</th>
                                        <th>Batas input Dosbing</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {#each project_period as period}
                                        <tr>
                                            <td>{period.batch_id[1]}</td>
                                            <td>{period.display_name}</td>
                                            <td>{period.supervisor_apply_start}</td>
                                            <td>{period.supervisor_apply_end}</td>
                                            <td>
                                                <button 
                                                    class="mb-2 mr-2 btn-transition btn btn-outline-danger" 
                                                    on:click={()=>deleteEl(period.id)}>
                                                    Delete </button>
                                                <button 
                                                    class="mb-2 mr-2 btn-transition btn btn-outline-info" 
                                                    on:click={()=>editEl(period.id)}>
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
            <Route path="create_project_period">
                <ProjectPeriodForm isEdit={false}/>
            </Route>
            <Route path="edit_project_period/*">
                <ProjectPeriodForm isEdit={true}/>
            </Route>
        </Router>
    </div>
</MainPage>