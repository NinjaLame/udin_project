<script>
    import { onMount } from "svelte";
    import { navigate } from "svelte-routing";
    import { getProjectPeriod, getStudent, getLecturer, 
        getProjectId, createProject, editProject } from "../data.js";
    let project_period = [];
    let students = []; 
    let lecturers = [];
    let projects =  {
        "lecturer_id1": [],
        "project_location": "",
        "project_title": "",
        "lecturer_id2": [],
        "start_period_id": [],
        "project_type": "",
        "finish_period_id": [],
        "student_id": [],
        "allow_proposal_date": "",
        "allow_final_date": "",
        "student_status": ""
      }
    export let isEdit;
    onMount(()=>{
        getData()
    })

    const getData = async () => {
        let responseProjectPeriod = await getProjectPeriod();
        let projectPeriod = await responseProjectPeriod.json();
        project_period = projectPeriod.data.project;

        let responseStudent = await getStudent();
        let Student = await responseStudent.json();
        students = Student.data.students;

        let responseLect = await getLecturer();
        let Lecturer = await responseLect.json();
        lecturers = Lecturer.data.lecturer;

        if (isEdit == true){
            let id = window.location.href.split('/').slice(-1)[0];
            getProjectId(id).then(response=>response.json()).then(data=>{
                projects = data.data.project[0]
                console.log(projects)
            })
        }
    }

    const back = () => {
        if (isEdit == true){
            navigate("../../projects", {replace:true});
        }
        else {
            navigate("../projects", {replace:true});
        }
    }
    const create = () => {
        createProject(projects);
    }
    const edit = () => {
        let id = window.location.href.split('/').slice(-1)[0];
        editProject(projects, id);
    }
</script>
<div class="row">
     <div class="col-md-12">
        {#if isEdit == true}
            <button class="mb-2 mr-2 btn-transition btn btn-outline-primary" on:click={edit}>Edit</button>
        {:else}
            <button class="mb-2 mr-2 btn-transition btn btn-outline-primary" on:click={create}>Create </button>
        {/if}
        <button class="mb-2 mr-2 btn-transition btn btn-outline-warning" on:click="{back}">Cancel</button>
    </div>
</div>
<div class="row">
    <div class="col-md-12">
        <div class="main-card mb-3 card">
            <div class="card-body">
                <div class="position-relative form-group">
                    <label for="project_title" class="">Judul Proyek</label>
                    <input type="text" class="form-control" bind:value={projects.project_title}  name="project_title" id="project_title">
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <div class="main-card mb-3 card">
            <div class="card-body">
                    <div class="position-relative form-group">
                        <label for="student_id" class="">Mahasiswa</label>
                        <select name="student_id" bind:value={projects.student_id[0]}  id="student_id" class="form-control">
                            <option selected value="-1" disabled>--select mahasiswa--</option>
                            {#each students as item} 
                            <option value="{item.id}">{item.display_name}</option>
                            {/each}
                        </select>
                    </div>
                    <div class="position-relative form-group">
                        <label for="student_status" class="">Status Mahasiswa</label>
                        <input type="text" bind:value={projects.student_status}  class="form-control" name="student_status" id="student_status">
                    </div>
                    <div class="position-relative form-group">
                        <label for="project_location" class="">Lokasi Pelaksanaan</label>
                        <input type="text" bind:value={projects.project_location}  class="form-control" name="project_location" id="project_location">
                    </div>
                    <div class="position-relative form-group">
                        <label for="lecturer_id1" class="">Pembimbing 1</label>
                        <select name="lecturer_id1" bind:value={projects.lecturer_id1[0]}  id="lecturer_id1" class="form-control">
                            <option selected value="-1" disabled>--select dosen--</option>
                            {#each lecturers as item}
                            <option value="{item.id}">{item.display_name}</option>
                            {/each}
                        </select>
                    </div>
                    <div class="position-relative form-group">
                        <label for="lecturer_id2"  class="">Pembimbing 2</label>
                        <select name="lecturer_id2" bind:value={projects.lecturer_id2[0]}  id="lecturer_id2" class="form-control">
                            <option selected value="-1" disabled>--select mahasiswa--</option>
                            {#each lecturers as item}
                            <option value="{item.id}">{item.display_name}</option>
                            {/each}
                        </select>
                    </div>
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <div class="main-card mb-3 card">
            <div class="card-body">
                    <div class="position-relative form-group">
                        <label for="project_type" class="">Project Type</label>
                        <select name="project_type" bind:value={projects.project_type}  id="project_type" class="form-control">
                            <option selected value="-1" disabled>--select type--</option>
                            <option value="1">Skripsi</option>
                            <option value="2">Bimbingan Karir</option>
                            <option value="3">Kerja Praktek</option>
                        </select>
                    </div>
                    <div class="position-relative form-group">
                        <label for="periodeMulai" class="">Periode Mulai</label>
                        <select name="start_period_id" bind:value={projects.start_period_id[0]}  id="periodeMulai" class="form-control">
                            <option selected value="-1" disabled>--select periode--</option>
                            {#each project_period as item}
                            <option value="{item.id}">{item.display_name}</option>
                            {/each}
                        </select>
                    </div>
                    <div class="position-relative form-group">
                        <label for="periodeBerakhir" class="">Periode Selesai</label>
                        <select name="finish_period_id" bind:value={projects.finish_period_id[0]}  id="periodeBerakhir" class="form-control">
                            <option selected value="-1" disabled>--select periode--</option>
                            {#each project_period as item}
                            <option value="{item.id}">{item.display_name}</option>
                            {/each}
                        </select>
                    </div>
                    <div class="position-relative form-group">
                        <label for="allow_proposal_date" class="">Tgl ijin proposal</label>
                        <input name="allow_proposal_date" bind:value={projects.allow_proposal_date}  id="allow_proposal_date" placeholder="" type="date" class="form-control">
                    </div>
                    <div class="position-relative form-group">
                        <label for="allow_final_date" class="">Tgl ijin ujian akhir</label>
                        <input name="allow_final_date" bind:value={projects.allow_final_date}  id="allow_final_date" placeholder="" type="date" class="form-control">
                    </div>
            </div>
        </div>
    </div>
</div>
