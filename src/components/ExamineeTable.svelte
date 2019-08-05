 <script>
    import { getExaminees, getExamineeId, deleteExaminee, createExaminee, editExaminee} from '../data.js';
    import {onMount, afterUpdate, getContext} from 'svelte';
    import { navigate, Router, Route } from "svelte-routing";
    import ExamineeForm from './ExamineeForm.svelte';
    export let id;
    let examinees = [];
    onMount (()=>{
        getExaminees(id).then(response=>response.json())
                .then(data=>{
                    examinees = data.data.examinee; 
                });
    })
    const deleteEl = (idel) => {
        deleteExaminee(idel).then(res=>res.json()).then(data=>{
            examinees = examinees.filter(examinee=>{
                console.log(idel, examinee.id)

                return examinee.id!=idel
            });
        })
    };
    const createNew = () => {
        navigate(id+'/create_examinee', {replace:true});

    };
    const editEl = () => {};
 </script>
<Router>
    <Route path="">
        <div class="row">
            <div class="col-lg-9">
                <div class="main-card mb-3 card">
                    <div class="card-body">
                        <h5>Peserta Ujian</h5>
                        <button on:click="{createNew}" type="button" title="Example Tooltip" data-placement="bottom" class="btn-shadow mr-3 btn btn-dark">
                            <i class="fa fa-star"></i> Buat Peserta Baru
                        </button>
                        <table class="mb-0 table table-striped">
                            <thead>
                            <tr>
                                <th>Nama Mahasiswa</th>
                                <th>Slot</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {#each examinees as examinee}
                                <tr>
                                    <td>{examinee.project_id}</td>
                                    <td>{examinee.exam_slot_id}</td>
                                    <td>{examinee.status}</td>
                                    <td>
                                        <button 
                                            class="mb-2 mr-2 btn-transition btn btn-outline-danger" 
                                            on:click={()=>deleteEl(examinee.id)}>
                                            Delete </button>
                                        <button 
                                            class="mb-2 mr-2 btn-transition btn btn-outline-info" 
                                            on:click={()=>editEl(examinee.id)}>
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
    <Route path=":t/create_examinee">
        <ExamineeForm isEdit={false} examId={id}/>
    </Route>
</Router>
