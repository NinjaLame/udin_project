<script>
    import MainPage from "../components/MainPage.svelte";
    import ExamForm from "../components/ExamForm.svelte";
    import { navigate, Router, Route, link } from "svelte-routing";
    import { onMount } from 'svelte';
    import { getExams } from "../data.js"
    
    let exams = []
    onMount(() => {
        getExams().then(response=>response.json()).then(data=>{
            exams = data.data.exams;
        })
    })
    const createNew = () => {
        navigate("exam_period/create_exam", {replace: true});
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
                    <div>Periode Ujian
                        <div class="page-title-subheading">
                        </div>
                    </div>
                </div>
                <div class="page-title-actions">
                    <button on:click="{createNew}" type="button" data-toggle="tooltip" title="Buat Periode Ujian" data-placement="bottom" class="btn-shadow mr-3 btn btn-dark">
                        <i class="fa fa-star"></i> Buat Ujian Baru
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
                                        <th>Periode</th>
                                        <th>Nama</th>
                                        <th>Pendaftaran</th>
                                        <th>Penutupan</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {#each exams as item}
                                        <tr>
                                                <th>
                                                <a href="exam_period/edit_exam/{item.id}" use:link>
                                                    {item.exam_period}
                                                </a>
                                                </th>
                                                <th>{item.display_name}</th>
                                                <th>{item.apply_start}</th>
                                                <th>{item.apply_end}</th>
                                        </tr>
                                    {/each}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </Route>
            <Route path="create_exam">
                <ExamForm/>
            </Route>
            <Route path="edit_exam/*">
                <ExamForm isEdit=false/>
            </Route>
        </Router>
    </div>
</MainPage>