<script>
	import { Router, Route, Link} from 'svelte-routing';
    import {Login } from './routes';
    import Main from './routes/Main.svelte';

    import { auth, url, access_token } from './store';
    
    console.log($access_token)

	if($auth == false && window.location.pathname != $url+"/login") {
        window.location = $url+"/login"
    } 
    else if($auth == "true") {
        auth.check_auth()
    }
    else if( $auth == "true" && window.location.pathname == $url+"/login" ){
        window.location = $url+"/"
    }

</script>
<div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
            
<Router>
    <Route path="{$url}/*">
        <Main></Main>
    </Route>
    <Route path="{$url}/login">
        <Login/>
    </Route>
</Router>
    
</div>
