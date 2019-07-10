<Router>
    <Route  path="/home/*">
        <Home/>
    </Route>

    <Route path="projects/*">
        <Projects/>
    </Route>

    <Route path="exam_period/*">
        <ProjectExam/>
    </Route>

</Router>

<script>
    import {Router, Route, Link} from "svelte-routing";
    import Header from "../components/Header.svelte";
    import {Home, ProjectExam, ProjectPeriod, Projects} from ".";
</script>