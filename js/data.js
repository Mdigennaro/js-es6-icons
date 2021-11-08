const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

const container = document.querySelector('.container-card')
console.log('container', container);


///ANIMALI///

const animali = icons.filter((icon)=>{
	return icon.type === 'animal'
});
console.log('animali', animali);


for (let i = 0; i < animali.length; i++) {
	const animale = animali[i];
	console.log(animale);

	const card = document.createElement('div');
	card.classList.add('card');
	container.append(card)
	console.log(card); 
	card.innerHTML = 
	`
	<i class="${animale.family} ${animale.prefix}${animale.name} ${animale.color}" ></i> <span class="nome-carta">${animale.name}</span>
	`	
}


///VERDURE///
const verdure = icons.filter((icon)=>{
	return icon.type === 'vegetable'
});
console.log('verdure', verdure);

for (let i = 0; i < verdure.length; i++) {
	const verdura = verdure[i];
	console.log(verdura);

	const card = document.createElement('div');
	card.classList.add('card');
	container.append(card)
	console.log(card); 
	card.innerHTML = 
	`
	<i class="${verdura.family} ${verdura.prefix}${verdura.name} ${verdura.color}" ></i> <span class="nome-carta">${verdura.name}</span>
	`	
}


///UTENTI///
const utenti = icons.filter((icon)=>{
	return icon.type === 'user'
});
console.log('utenti', utenti);


for (let i = 0; i < utenti.length; i++) {
	const utente = utenti[i];
	console.log(utente);

	const card = document.createElement('div');
	card.classList.add('card');
	container.append(card)
	console.log(card); 
  card.innerHTML = 
	`
	<i class="${utente.family} ${utente.prefix}${utente.name} ${utente.color}" ></i> <span class="nome-carta">${utente.name}</span>
	`	
}






