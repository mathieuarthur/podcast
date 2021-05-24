<script>
	import Podcast from "./components/Podcast.svelte";
	import Modal from 'svelte-simple-modal';
</script>

<style>
</style>

<main>
	<Modal>
		<Podcast color={"#E423F0"} title={"On m’appelait le fils du diable"} typo={"Nunito"} typoColor={"#FFCF2A"} typoSize={"5em"} />
		<Podcast color={"#785BCA"} title={"On me comparait à un porcidou"} typo={"arial"} typoColor={"#55EFDB"} typoSize={"5em"}/>
		<Podcast color={"#5FC9FA"} title={"AAAAAA"} typo={"arial"} typoColor={"#FFFFFE"} typoSize={"5em"}/>
		<Podcast color={"#E9CECE"} title={"purple"} typo={"arial"} typoColor={"#C92525"} typoSize={"20px"}/>
		<Podcast color={"#F4A6D0"} title={"yellow"} typo={"arial"} typoColor={"#0060FF"} typoSize={"20px"}/>
		<Podcast color={"#3E4797"} title={"brown"} typo={"arial"} typoColor={"#FF9000"} typoSize={"20px"}/>
		<Podcast color={"#C0AAFF"} title={"orange"} typo={"arial"} typoColor={"#90F2A0"} typoSize={"20px"}/>
	</Modal>
</main>