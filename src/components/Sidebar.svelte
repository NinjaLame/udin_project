<script>
    import { Link } from "svelte-routing";
    import { url } from "../store.js";
    
</script>
<div class="app-sidebar sidebar-shadow">
    <div class="app-header__logo">
        <div class="logo-src"></div>
        <div class="header__pane ml-auto">
            <div>
                <button type="button" class="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar">
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
            </div>
        </div>
    </div>
    <div class="app-header__mobile-menu">
        <div>
            <button type="button" class="hamburger hamburger--elastic mobile-toggle-nav">
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
            </button>
        </div>
    </div>
    <div class="app-header__menu">
        <span>
            <button type="button" class="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                <span class="btn-icon-wrapper">
                    <i class="fa fa-ellipsis-v fa-w-6"></i>
                </span>
            </button>
        </span>
    </div>    <div class="scrollbar-sidebar ps ps--active-y">
        <div class="app-sidebar__inner">
            <ul class="vertical-nav-menu metismenu">
                <li>
                    <Link to="{$url}/home"> <i class="metismenu-icon pe-7s-rocket"></i>Periode Project</Link>
                </li>
                <li>
                    <Link to="{$url}/projects"> <i class="metismenu-icon pe-7s-users"></i>Daftar Project</Link>
                </li>
                <li>
                    <Link to="{$url}/exam_period"> <i class="metismenu-icon pe-7s-note2"></i>Periode Ujian</Link>
                </li>
            </ul>
        </div>
    <div class="ps__rail-x" style="left: 0px; bottom: 0px;"><div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;"></div></div><div class="ps__rail-y" style="top: 0px; height: 360px; right: 0px;"><div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 191px;"></div></div></div>
</div>