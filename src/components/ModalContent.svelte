<script>
import { onMount } from "svelte";


    export let title;
    export let texte;
    export let clip;
    export let typo;
    export let typoColor;

    let audio;
    onMount(() => {
        audio.volume=0.5;
    })
</script>

<style>
    body
    {
        -webkit-user-select: none; /* Safari */        
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE10+/Edge */
        user-select: none; /* Standard */
    }
    .clip
    {
        text-align: center;
    }
    .clip .title
    {
        padding-bottom: 1em;
        font-size: 2em;
    }
    .clip .texte
    {
        padding-top: 1em;
    }
</style>
<body>
    <div class="clip">
        <div class="title" style="font-family: {typo}; color: {typoColor}">
            {title}
        </div>
        <!-- svelte-ignore a11y-media-has-caption -->
        <audio bind:this={audio} src={clip} controls autoplay></audio>
        <div class="texte">
            {texte}
        </div>
    </div>
</body>
