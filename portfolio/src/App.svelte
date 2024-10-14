<script lang="ts">
    import type { ComponentType } from "svelte";
    import { path } from "./index.js";
    import Home from "./pages/Home/Home.svelte";
    import Header from "./Header.svelte";
    import Footer from "./Footer.svelte";
    import { onMount } from 'svelte';
    
    let rootElement: HTMLElement;

    const pages = {
        "/": Home
    } as { [key: string]: ComponentType | undefined };

    const wavesFooterDisabled: string[] = [];
    const footerColor: { [key: string]: string } = {
    };

    let currentPath = $path;

    $: toChange = currentPath != $path;

    function changePage() {
        if (!toChange) return;
        currentPath = $path;
        rootElement.scrollTo({ top: 0, behavior: "instant" });
    }
    let scrolled = false;

    let isAtTop = true;

    function handleScroll() {
        isAtTop = window.scrollY === 0;
        }

    
        onMount(() => {
            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        });

</script>

<style lang="scss">
    @import "./style.scss";

    :global(*) {
        font-family: "Zona Pro", sans-serif;
        overflow: auto;
        -ms-overflow-style: none;
        scrollbar-width: none;
    }

    :global(body) {
        background: var(--background-color);
    }

    main {
        overflow-y: auto;
        overflow-x: hidden;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        overflow-x: hidden;s

        .content {
            transition: opacity 0.3s;

            &.transition {
                opacity: 0;
            }
        }

    }

    main::-webkit-scrollbar{
        display: none;
    }

    .hidden-header Header {
        display: none;
    }

    .hidden {
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
    }

    Header {
        opacity: 1;
        transition: opacity 0.3s ease-in-out;
    }



</style>


<main bind:this={rootElement} on:scroll={handleScroll} class:hidden-header={isAtTop} style={footerColor[currentPath] ? `--footer-color: ${footerColor[currentPath]}` : ""}>
    <Header {isAtTop}></Header>

    <div class="content" class:transition={toChange} on:transitionend={changePage} on:transitioncancel={changePage}>
        <svelte:component this={pages[currentPath]}></svelte:component>
    </div>
    
    <Footer></Footer>
</main>