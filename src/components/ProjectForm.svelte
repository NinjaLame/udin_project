<script>
    import { onMount } from "svelte";
    import { navigate } from "svelte-routing";
    import { getProjectPeriod, getStudent, getLecturer } from "../data.js";
    let project_period = [];
    let students = [];
    let lecturers = [];
    export let isEdit;
    onMount(()=>{
        getProjectPeriod().then(response=>response.json()).then(data=>{
            project_period = data.data.project;
        })
        getStudent().then(response=>response.json()).then(data=>{
            students = data.data.students;
        })
        getLecturer().then(response=>response.json()).then(data=>{
            lecturers = data.data.lecturers;
        })
    })

    const back = () => {
        if (isEdit == true){
            navigate("../../exam_period", {replace:true});
        }
        else {
            navigate("../exam_period", {replace:true});
        }
    }
    const create = () => {
    }
    const edit = () => {
        let id = window.location.href.split('/').slice(-1)[0];
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
                    <input type="text" class="form-control" name="project_title" id="project_title">
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <div class="main-card mb-3 card">
            <div class="card-body">
                    <div class="position-relative form-group">
                        <label for="student_id" class="">Mahasiswa</label>
                        <select name="student_id" id="student_id" class="form-control">
                            <option selected value="-1" disabled>--select mahasiswa--</option>
                            {#each students as item}
                            <option value="{item.id}">{item.display_name}</option>
                            {/each}
                        </select>
                    </div>
                    <div class="position-relative form-group">
                        <label for="student_status" class="">Status Mahasiswa</label>
                        <input type="text" class="form-control" name="student_status" id="student_status">
                    </div>
                    <div class="position-relative form-group">
                        <label for="project_location" class="">Lokasi Pelaksanaan</label>
                        <input type="text" class="form-control" name="project_location" id="project_location">
                    </div>
                    <div class="position-relative form-group">
                        <label for="lecturer_id1" class="">Pembimbing 1</label>
                        <select name="lecturer_id1" id="lecturer_id1" class="form-control">
                            <option selected value="-1" disabled>--select dosen--</option>
                            {#each students as item}
                            <option value="{item.id}">{item.display_name}</option>
                            {/each}
                        </select>
                    </div>
                    <div class="position-relative form-group">
                        <label for="lecturer_id2" class="">Pembimbing 2</label>
                        <select name="lecturer_id2" id="lecturer_id2" class="form-control">
                            <option selected value="-1" disabled>--select mahasiswa--</option>
                            {#each students as item}
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
                        <select name="project_type" id="project_type" class="form-control">
                            <option value="1">Skripsi</option>
                            <option value="2">Bimbingan Karir</option>
                            <option value="3">Kerja Praktek</option>
                        </select>
                    </div>
                    <div class="position-relative form-group">
                        <label for="periodeMulai" class="">Periode Mulai</label>
                        <select name="start_period_id" id="periodeMulai" class="form-control">
                            <option selected value="-1" disabled>--select periode--</option>
                            {#each project_period as item}
                            <option value="{item.id}">{item.display_name}</option>
                            {/each}
                        </select>
                    </div>
                    <div class="position-relative form-group">
                        <label for="periodeBerakhir" class="">Periode Selesai</label>
                        <select name="finish_period_id" id="periodeBerakhir" class="form-control">
                            <option selected value="-1" disabled>--select periode--</option>
                            {#each project_period as item}
                            <option value="{item.id}">{item.display_name}</option>
                            {/each}
                        </select>
                    </div>
                    <div class="position-relative form-group">
                        <label for="allow_proposal_date" class="">Tgl ijin proposal</label>
                        <input name="allow_proposal_date" id="allow_proposal_date" placeholder="" type="date" class="form-control">
                    </div>
                    <div class="position-relative form-group">
                        <label for="allow_final_date" class="">Tgl ijin ujian akhir</label>
                        <input name="allow_final_date" id="allow_final_date" placeholder="" type="date" class="form-control">
                    </div>
            </div>
        </div>
    </div>
</div>