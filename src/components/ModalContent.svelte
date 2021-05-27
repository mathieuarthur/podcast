<script>
    export let texte;
    export let clip;

    let audio = document.getElementById("audio");

    // audio.volume = 0.5;
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
</style>
<body>
    <div class="clip">
        <!-- svelte-ignore a11y-media-has-caption -->
        <audio id="audio" src={clip} controls autoplay></audio>
        <div>
            {texte}
        </div>
    </div>
</body>
