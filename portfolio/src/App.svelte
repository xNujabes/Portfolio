<script lang="ts">
    import type { ComponentType } from "svelte";
    import { path } from "./index.js";
    import Home from "./pages/Home/Home.svelte";
    import Header from "./Header.svelte";
    import Footer from "./Footer.svelte";

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
</script>

<style lang="scss">
    @import "./style.scss";

    :global(*) {
        font-family: "Zona Pro", sans-serif;
    }

    :global(body) {
        background: var(--background-color);
    }

    main {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        overflow-x: hidden;

        .content {
            transition: opacity 0.3s;

            &.transition {
                opacity: 0;
            }
        }

    }
</style>


<main bind:this={rootElement} style={footerColor[currentPath] ? `--footer-color: ${footerColor[currentPath]}` : ""} on:scroll={() => (scrolled = true)}>
    <Header></Header>

    <div class="content" class:transition={toChange} on:transitionend={changePage} on:transitioncancel={changePage}>
        <svelte:component this={pages[currentPath]}></svelte:component>
    </div>
    
    <Footer></Footer>
</main>
