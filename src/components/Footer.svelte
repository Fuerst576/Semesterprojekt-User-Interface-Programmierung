<script lang="ts">
    import Social from './Social.svelte';

</script>

<footer id="main-menu" class="nav-links">
    <a href="#">Impressum</a>
    <a href="#">Datenschutz</a>
    <a href="#">AGB</a>
    <Social platform="YouTube" username="@jf_drgo3589" />
    <a href="/gelernt">Bootsfahrschule</a>

</footer>

<style>
    footer {
        display: flex;
        justify-content: center;
        gap: 1rem;
        padding: 1rem;
        background-color: var(--color-background);
        border-top: 1px solid var(--color-border);
    }
</style>