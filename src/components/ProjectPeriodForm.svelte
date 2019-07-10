<script>
    import { onMount } from "svelte";
    import { navigate } from "svelte-routing";
    import { getBatch, getProgram } from "../data.js";
    let batchs = [];
    let programs = [];
    onMount(()=>{
        getBatch().then(response=>response.json()).then(data=>{
            batchs = data.data.batch;
        })
        getProgram().then(response=>response.json()).then(data=>{
            programs = data.data.program;
        })
    })

    const back = () => {
        navigate("../home", {replace:true})
    }
</script>
<div class="row">
     <div class="col-md-12">
        <button class="mb-2 mr-2 btn-transition btn btn-outline-primary">Create</button>
        <button class="mb-2 mr-2 btn-transition btn btn-outline-warning" on:click="{back}">Cancel</button>
    </div>
</div>
<div class="row">
   
    <div class="col-md-6">
        <div class="main-card mb-3 card">
            <div class="card-body">
                    <div class="position-relative form-group">
                        <label for="periodeAkademik" class="">Periode Akademik</label>
                        <select name="batch_id" id="periodeAkademik" class="form-control">
                            <option selected value="-1" disabled>--select periode--</option>
                            {#each batchs as item}
                            <option value="{item.id}">{item.display_name}</option>
                            {/each}
                        </select>
                    </div>
                    <div class="position-relative form-group">
                        <label for="programStudi" class="">Program Studi</label>
                        <select name="program_id" id="programStudi" class="form-control">
                            <option selected value="-1" disabled>--select program--</option>
                            {#each programs as item}
                            <option value="{item.id}">{item.display_name}</option>
                            {/each}
                        </select>
                    </div>
                    <div class="position-relative form-group">
                        <label for="projectType" class="">Jenis Proyek</label>
                        <select name="project_type" id="projectType" class="form-control">
                            <option value="1">Skripsi</option>
                            <option value="2">Bimbingan Karir</option>
                            <option value="3">Kerja Praktek</option>
                        </select>
                    </div>
                    <div class="position-relative form-group">
                        <label for="examStatus" class="">Status</label>
                        <select name="status" id="examStatus" class="form-control">
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
                        <input name="supervisor_apply_start" id="applyStart" placeholder="" type="date" class="form-control">
                    </div>
                    <div class="position-relative form-group">
                        <label for="applyEnd" class="">Akhir Input Dosbing</label>
                        <input name="supervisor_apply_end" id="applyEnd" placeholder="" type="date" class="form-control">
                    </div>
                    <div class="position-relative form-group">
                        <label for="count_project_start" class="">Jml mhs mulai</label>
                        <input name="count_project_start" disabled id="count_project_start" placeholder="" type="text" class="form-control">
                    </div>
                    <div class="position-relative form-group">
                        <label for="count_project_finish" disabled class="">Jml slot selesai</label>
                        <input name="count_project_finish" disabled id="count_project_finish" placeholder="" type="text" class="form-control">
                    </div>
                    
            </div>
        </div>
    </div>
</div>