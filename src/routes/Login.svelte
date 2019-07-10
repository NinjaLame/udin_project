
<div class="card-body login-form">
    <h3 class="card-title">Login</h3>
    <form class="needs-validation" novalidate="" on:submit|preventDefault={handleSubmit}>
        <div class="form-row">
            <div class="col-xs-4 xs-3">
                <label for="validationCustom01">NPP</label>
                <input type="text" class="form-control" name="npp" id="validationCustom01" placeholder="No. NPP" required="">
                <div class="ivalid-feedback">
                    Invalid!
                </div>
            </div>
        </div>
        <div class="form-row">
            <div class="col-xs-4 xs-3">
                <label for="validationCustom03">Password</label>
                <input type="password" class="form-control" name="password" id="validationCustom03" placeholder="Password" required="">
                <div class="invalid-feedback">
                    Please provide a valid city.
                </div>
            </div>
        </div>
        <button class="btn btn-primary" type="submit">Submit form</button>
    </form>
</div>

<script>
    import { auth } from "../store.js";
    console.log($auth)

    const handleSubmit = ({target})=>{
        let npp = target.npp.value;
        let password = target.password.value
        auth.login(npp, password)
    }
</script>

<style>
    div.login-form {
       padding-left: 20%;
       padding-right: 40%;
       padding-top: 5%;
       background: #ffff
    }
</style>