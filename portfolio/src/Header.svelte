<script lang="ts">
    export let isAtTop: boolean;
</script>

<div class="header" class:hidden={isAtTop}>
    <h1>Ceci est un header</h1>
</div>

<style>
    .header {
        width: 100%;
        position: fixed;
        top: 0;
        left: 0; 
        right: 0; 
        z-index: 1000; 
        background-color: white;
        transition: opacity 0.3s ease-in-out; 
    }

    .hidden {
        opacity: 0;
        pointer-events: none;
    }

    h1 {
        margin: 0; 
        padding: 10px; 
        opacity: 1;
    }
</style>
