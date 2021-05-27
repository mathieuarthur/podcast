<script>
    import { getContext } from 'svelte';
    import ModalContent from './ModalContent.svelte';

    export let title;
    export let color;
    export let typo;
    export let typoColor;
    export let typoSize;
    export let clip;
    
    const { open } = getContext('simple-modal');
  
    const showModal = () => {
      open(ModalContent, {texte: title, clip: clip});
    };
</script>

<style>
    section
    {
        width: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 9.03em;
        text-transform: uppercase;
        -webkit-user-select: none; /* Safari */        
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE10+/Edge */
        user-select: none; /* Standard */
    }
</style>

<section on:click={showModal} style="background-color: {color}">
    <div style="font-family: {typo}; color: {typoColor}; font-size: {typoSize}">
        <b> 
            {title} 
        </b>
    </div>
</section>