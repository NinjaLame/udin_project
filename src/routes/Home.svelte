<script>
    import MainPage from "../components/MainPage.svelte";
    import ProjectPeriodForm from "../components/ProjectPeriodForm.svelte";
    import { onMount } from 'svelte';
    import { navigate, Router, Route } from "svelte-routing";
    import { getProjectPeriod } from "../data.js"
    let project_period = []
    onMount(() => {
        getProjectPeriod().then(response=>response.json()).then(data=>{
            project_period = data.data.project;
        })
    })
    const createNew = () => {
        navigate('home/create_project_period', {replace:true});
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
                    <button on:click="{createNew}" type="button" data-toggle="tooltip" title="Example Tooltip" data-placement="bottom" class="btn-shadow mr-3 btn btn-dark">
                        <i class="fa fa-star"></i> Buat Periode Baru
                    </button>
                </div>    
            </div>
        </div>            
        <Router>
            <Route path="">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="main-card mb-3 card">
                            <div class="card-body"><h5 class="card-title">Table striped</h5>
                                <table class="mb-0 table table-striped">
                                    <thead>
                                    <tr>
                                        <th>Periode</th>
                                        <th>Nama</th>
                                        <th>Mulai input Dosbing</th>
                                        <th>Batas input Dosbing</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {#each project_period as period}
                                        <tr>
                                            <th>{period.batch_id[1]}</th>
                                            <th>{period.display_name}</th>
                                            <th>{period.supervisor_apply_start}</th>
                                            <th>{period.supervisor_apply_end}</th>
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
                <ProjectPeriodForm></ProjectPeriodForm>
            </Route>
        </Router>
    </div>
</MainPage>