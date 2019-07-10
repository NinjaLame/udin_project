<script>
    import { onMount } from "svelte";
    import { navigate } from "svelte-routing";
    import { getProjectPeriod, getExamsId } from "../data.js";
    let project_period = []
    let exam_info = {
        "count_exam_slot": 0,
        "status": "",
        "display_name": "",
        "period_id": [],
        "apply_end": "",
        "id": 1,
        "exam_period": "",
        "apply_start": "",
        "exam_type": "",
        "count_examinee": 0,
    }
    export let isEdit = false;
    let start_date;
    let end_date;

    
    
    onMount(()=>{
        if (isEdit = true){
            let id = window.location.href.split('/').slice(-1)[0];
            getExamsId(id).then(response=>response.json())
                .then(data=>{exam_info = data.data.exam[0]; console.log(exam_info.status)});
        };
        getProjectPeriod().then(response=>response.json()).then(data=>{
            project_period = data.data.project
        })
    })

    const back = () => {
        navigate("../exam_period", {replace:true})
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
                        <label for="periodeUjian" class="">Periode Ujian</label>
                        <select name="period_id" bind:value={exam_info.period_id[0]} id="examStatus" class="form-control">
                            <option value="-1" disabled>--select periode--</option>
                            {#each project_period as item}
                            <option value="{item.id}" >{item.display_name}</option>
                            {/each}
                        </select>
                    </div>
                    <div class="position-relative form-group"> 
                        <label for="examPeriod" class="">Nama Periode Ujian</label>
                        <input type="text" bind:value={exam_info.exam_period} name="exam_period" class="form-control">
                    </div>
                    <div class="position-relative form-group">
                        <label for="examType" class="">Jenis Ujian</label>
                        <select name="exam_type" bind:value={exam_info.exam_type} id="examType" class="form-control">
                            <option value="1">Proposal</option>
                            <option value="2">Ujian Akhir</option>
                        </select>
                    </div>
                    <div class="position-relative form-group">
                        <label for="examStatus" class="">Status</label>
                        <select name="status" id="examStatus" bind:value={exam_info.status} class="form-control">
                            <option value="1">Rencana</option>
                            <option value="2">Pendaftaran</option>
                            <option value="3">Berjalan</option>
                            <option value="4">Selesai</option>
                        </select>
                    </div>
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <div class="main-card mb-3 card">
            <div class="card-body">
                    <div class="position-relative form-group">
                        <label for="applyStart" class="">Awal Tgl Daftar</label>
                        <input name="apply_start" id="applyStart" placeholder="" type="date" class="form-control">
                    </div>
                    <div class="position-relative form-group">
                        <label for="applyEnd" class="">Akhir Tgl Daftar</label>
                        <input name="apply_end" id="applyEnd" placeholder="" type="date" class="form-control">
                    </div>
                    <div class="position-relative form-group">
                        <label for="count_examinee" class="">Jml mhs daftar</label>
                        <input name="count_examinee" bind:value={exam_info.count_examinee} disabled id="count_examinee" placeholder="" type="text" class="form-control">
                    </div>
                    <div class="position-relative form-group">
                        <label for="count_exam_slot" disabled class="">Jml slot ujian</label>
                        <input name="count_exam_slot" bind:value={exam_info.count_exam_slot} disabled id="count_exam_slot" placeholder="" type="text" class="form-control">
                    </div>
            </div>
        </div>
    </div>
</div>