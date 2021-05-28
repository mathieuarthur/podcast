<script>
	import Podcast from "./components/Podcast.svelte";
	import Modal from 'svelte-simple-modal';

	let pod1 = "Cela a commencé à l’âge de 6 ans, j’étais bizarre à leurs yeux, idiot, on me demandait de faire des choses pour pouvoir encore plus rigoler de moi. Avec le temps cela ne s’est pas arrangé, les élèves m'insultaient de tous les noms, on me surnommait le crado. Sauf que la roue à tourné, j’ai préféré devenir celui dont ils avaient tous peur, on m’appelait le fils du diable.";
	let pod2 = "Je suis originaire de l'île de la Réunion, et cela n’a pas été une île paradisiaque. À l'âgé de 10 à 14 ans, one me rejetait car je n’avais pas le poids idéale, ni même les dernière tendance de la mode. Impossible de pouvoir en parler à des proches ou des enseignants.  Cela débordait tellement qu’ils m’ont comparé à un plat traditionnel qui est le porcidou.";
	let pod3 = "Tout à commencé avec une histoire, seule contre tous, ils ont fait croire que j’étais la coupable sauf que j’étais innocente. Depuis, j'ai développé une phobie scolaire. 3 ans de ma vie dans la peur, j’ai tout abandonné, ils ont ruiné ma scolarité.";
	let pod4 = "Après un grave accident, j’ai commencé à être harcelé sur ma taille qui est grande ainsi que mon poids qui est maigre. J’ai été insulté, critiqué, sans cesse jugé et personne pour me défendre.";
	let pod5 = "Problèmes personnels, harcèlement scolaire, et c'est à ce moment-là que vous comprenez que la vie est dure. Harceler, taper, menacer, traquer ; le début de la fin, mais comme on dit, la vengeance est un plat qui se mange froid.";
	let pod6 = "À l’âge de 13 ans, dans les vestiaires de sport, on me critiquait. Cela a suivi avec ma personnalité qui ne leur convenait pas. Même en allant dans un centre pour aider les jeunes et leurs devoirs, cela ne s’est jamais arrêté.";
	let pod7 = "Grandir avec des personnes et les voir se retourner contre toi sans même une explication. Recevoir des insultes, essayer d’accepter tout ce qu’elles désiraient pour me faire aimer et accepter. Malheureusement cela m’a mené à ma perte.";
</script>

<style>
</style>

<main>
	<Modal>
		<Podcast color={"#E423F0"} title={"On m’appelait le fils du diable"} typo={"Patua One"} typoColor={"#FFCF2A"} typoSize={"5em"} clip={"./audio/podcast1.mp3"} texte={pod1} />
		<Podcast color={"#785BCA"} title={"On me comparait à un porcidou"} typo={"Recursive"} typoColor={"#55EFDB"} typoSize={"5em"} clip={"./audio/podcast2.mp3"} texte={pod2} />
		<Podcast color={"#5FC9FA"} title={"On m'a ruiné ma scolarité"} typo={"Abril Fatface"} typoColor={"#630D79"} typoSize={"5em"} clip={"./audio/podcast3.mp3"} texte={pod3} />
		<Podcast color={"#E9CECE"} title={"Trop maigre à leur yeux"} typo={"Days One"} typoColor={"#C92525"} typoSize={"5em"} clip={"./audio/podcast4.mp3"} texte={pod4} />
		<Podcast color={"#F4A6D0"} title={"Je me suis vengé"} typo={"Goblin One"} typoColor={"#0060FF"} typoSize={"5em"}  clip={"./audio/podcast5.mp3"} texte={pod5} />
		<Podcast color={"#3E4797"} title={"J’étais différent pour eux"} typo={"Newsreader"} typoColor={"#FF9000"} typoSize={"5em"} clip={"./audio/podcast6.mp3"} texte={pod6} />
		<Podcast color={"#C0AAFF"} title={"Trahison d'amis d'enfance"} typo={"Orbitron"} typoColor={"#90F2A0"} typoSize={"5em"} clip={"./audio/podcast7.mp3"} texte={pod7} />
	</Modal>
</main>