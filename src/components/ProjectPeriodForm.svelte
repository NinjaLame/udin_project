<script>
    import { onMount } from "svelte";
    import { navigate } from "svelte-routing";
    import { getBatch, getProgram, 
        createPeriodProject, getProjectPeriodId,
        editPeriodProject } from "../data.js";
    export let isEdit;
    let batchs = [];
    let programs = [];
    let projectInfo =  {
        "program_id": [],
        "count_project_finish": 0,
        "status": "0",
        "project_type": "0",
        "project_start_ids": [],
        "display_name": "",
        "count_project_start": 0,
        "exam_ids": [],
        "batch_id": [],
        "supervisor_apply_start": "",
        "supervisor_apply_end": ""
    }
    onMount(()=>{
        getData();
    })

    const getData = async () => {
        let responseBatch = await getBatch();
        let Batch = await responseBatch.json();
        batchs = Batch.data.batch;

        let responseProgram = await getProgram();
        let Program = await responseProgram.json()
        programs = Program.data.program;
        console.log(Program); 


        if (isEdit == true){
            let id = window.location.href.split('/').slice(-1)[0];
            let response = await getProjectPeriodId(id);
            let periodProject = await response.json();

            projectInfo = periodProject.data.project[0]; 
        };
    }
    const back = () => {
        if (isEdit == true){
            navigate("../../home", {replace:true});
        }
        else {
            navigate("../home", {replace:true});
        }
    }
    const edit = () => {
        let id = window.location.href.split('/').slice(-1)[0];
        editPeriodProject(projectInfo,id)
    }
    const create = () => {
        createPeriodProject(projectInfo)
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
   
    <div class="col-md-6">
        <div class="main-card mb-3 card">
            <div class="card-body">
                    <div class="position-relative form-group">
                        <label for="periodeAkademik" class="">Periode Akademik</label>
                        <select name="batch_id" bind:value={projectInfo.batch_id[0]} id="periodeAkademik" class="form-control">
                            <option selected value="-1" disabled>--select periode--</option>
                            {#each batchs as item}
                            <option value="{item.id}">{item.display_name}</option>
                            {/each}
                        </select>
                    </div>
                    <div class="position-relative form-group">
                        <label for="programStudi" class="">Program Studi</label>
                        <select name="program_id" bind:value={projectInfo.program_id[0]} id="programStudi" class="form-control">
                            <option selected value="-1" disabled>--select program--</option>
                            {#each programs as item}
                            <option value="{item.id}">{item.display_name}</option>
                            {/each}
                        </select>
                    </div>
                    <div class="position-relative form-group">
                        <label for="projectType" class="">Jenis Proyek</label>
                        <select name="project_type" bind:value={projectInfo.project_type} id="projectType" class="form-control">
                            <option value="1">Skripsi</option>
                            <option value="2">Bimbingan Karir</option>
                            <option value="3">Kerja Praktek</option>
                        </select>
                    </div>
                    <div class="position-relative form-group">
                        <label for="examStatus" class="">Status</label>
                        <select name="status" id="examStatus" bind:value={projectInfo.status} class="form-control">
                            <option value="1">Rencana</option>
                            <option value="2">Berjalan</option>
                            <option value="3">Selesai</option>
                        </select>
                    </div>
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <div class="main-card mb-3 card">
            <div class="card-body">
                    <div class="position-relative form-group">
                        <label for="applyStart" class="">Mulai Input Dosbing</label>
                        <input name="supervisor_apply_start" bind:value={projectInfo.supervisor_apply_start} id="applyStart" placeholder="" type="date" class="form-control">
                    </div>
                    <div class="position-relative form-group">
                        <label for="applyEnd" class="">Akhir Input Dosbing</label>
                        <input name="supervisor_apply_end" id="applyEnd" bind:value={projectInfo.supervisor_apply_end} placeholder="" type="date" class="form-control">
                    </div>
                    <div class="position-relative form-group">
                        <label for="count_project_start" class="">Jml mhs mulai</label>
                        <input name="count_project_start" disabled bind:value={projectInfo.count_project_start} id="count_project_start" placeholder="" type="text" class="form-control">
                    </div>
                    <div class="position-relative form-group">
                        <label for="count_project_finish" disabled class="">Jml slot selesai</label>
                        <input name="count_project_finish" disabled bind:value={projectInfo.count_project_finish} id="count_project_finish" placeholder="" type="text" class="form-control">
                    </div>
                    
            </div>
        </div>
    </div>
</div>