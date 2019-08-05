<script>
    import { onMount, setContext } from "svelte";
    import { navigate } from "svelte-routing";
    import { createExaminee, getProjects, getLecturer, getProjectPeriod, getExamsId, createExam, editExam } from "../data.js";
    export let examId = 0;
    let projects = [];
    let lecturers = [];
    let examinee_info = {
        "exam_id": examId,
        "exam_slot_id": [],
        "examiner1_id": [],
        "examiner2_id": [],
        "examiner3_id": [],
        "project_id": [],
        "examiner1_mark": 0,
        "examiner2_mark": 0,
        "examiner3_mark": 0,
    }
    export let isEdit;
    
    onMount(()=>{
        getProjects().then(response => response.json()).then(data=>{
            projects = data.data.project;
        })
        getLecturer().then(responseLect=>responseLect.json()).then(data=>{
            lecturers = data.data.lecturer;
        });
        
        if (isEdit == true){
        };
    })

    const back = () => {
        if (isEdit == true){
            navigate("../../edit_exam/25", {replace:true});
        }
        else {
            navigate("../../edit_exam/25", {replace:true});
        }
    }
    const create = () => {
        console.log(examinee_info)
        createExaminee(examinee_info)
    }
    const edit = () => {
        let id = window.location.href.split('/').slice(-1)[0];
        // editExam(exam_info, id)
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
                        <label for="periodeUjian" class="">Peserta Ujian </label>
                        <select name="period_id" bind:value={examinee_info.project_id[0]} id="examStatus" class="form-control">
                            <option value="-1" disabled>--select mahasiswa--</option>
                            {#each projects as item}
                            <option value="{item.id}" >{item.full_name}</option>
                            {/each}
                        </select>
                    </div>
                    <div class="position-relative form-group">
                        <label for="periodeUjian" class="">Ketua Penguji</label>
                        <select name="period_id" bind:value={examinee_info.examiner1_id[0]} id="examStatus" class="form-control">
                            <option value="-1" disabled>--select penguji--</option>
                            {#each lecturers as item}
                            <option value="{item.id}" >{item.display_name}</option>
                            {/each}
                        </select>
                    </div>
                    <div class="position-relative form-group">
                        <label for="periodeUjian" class="">Penguji 1</label>
                        <select name="period_id" bind:value={examinee_info.examiner2_id[0]} id="examStatus" class="form-control">
                            <option value="-1" disabled>--select penguji--</option>
                            {#each lecturers as item}
                            <option value="{item.id}" >{item.display_name}</option>
                            {/each}
                        </select>
                    </div>
                    <div class="position-relative form-group">
                        <label for="periodeUjian" class="">Penguji 2</label>
                        <select name="period_id" bind:value={examinee_info.examiner3_id[0]} id="examStatus" class="form-control">
                            <option value="-1" disabled>--select penguji--</option>
                            {#each lecturers as item}
                            <option value="{item.id}" >{item.display_name}</option>
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
                    <label for="periodeUjian" class="">Nilai Ketua Penguji</label>
                    <input class="form-control" type="number" bind:value={examinee_info.examiner1_mark}>
                </div>
                <div class="position-relative form-group">
                    <label for="periodeUjian" class="">Nilai Ketua Penguji</label>
                    <input class="form-control" type="number" bind:value={examinee_info.examiner2_mark}>
                </div>
                <div class="position-relative form-group">
                    <label for="periodeUjian" class="">Nilai Ketua Penguji</label>
                    <input class="form-control" type="number" bind:value={examinee_info.examiner3_mark}>
                </div>
            </div>
        </div>
    </div>
</div>
