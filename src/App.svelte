<script>
	import Podcast from "./components/Podcast.svelte";
	import Modal from 'svelte-simple-modal';
</script>

<style>
</style>

<main>
	<Modal>
		<Podcast color={"#E423F0"} title={"On m’appelait le fils du diable"} typo={"Patua One"} typoColor={"#FFCF2A"} typoSize={"5em"} clip={"./audio/podcast1.mp3"} />
		<Podcast color={"#785BCA"} title={"On me comparait à un porcidou"} typo={"Recursive"} typoColor={"#55EFDB"} typoSize={"5em"} clip={"./audio/podcast2.mp3"} />
		<Podcast color={"#5FC9FA"} title={"On m'a ruiné ma scolarité"} typo={"Abril Fatface"} typoColor={"#630D79"} typoSize={"5em"} clip={"./audio/podcast3.mp3"} />
		<Podcast color={"#E9CECE"} title={"Trop maigre à leur yeux"} typo={"Days One"} typoColor={"#C92525"} typoSize={"5em"} clip={"./audio/podcast4.mp3"} />
		<Podcast color={"#F4A6D0"} title={"Je me suis vengé"} typo={"Goblin One"} typoColor={"#0060FF"} typoSize={"5em"}  clip={"./audio/podcast5.mp3"} />
		<Podcast color={"#3E4797"} title={"brown"} typo={"Newsreader"} typoColor={"#FF9000"} typoSize={"5em"} clip={"./audio/podcast.mp3"} />
		<Podcast color={"#C0AAFF"} title={"Mes amis d'enfances m'ont harcelé"} typo={"Orbitron"} typoColor={"#90F2A0"} typoSize={"5em"} clip={"./audio/podcast7.mp3"} />
	</Modal>
</main>