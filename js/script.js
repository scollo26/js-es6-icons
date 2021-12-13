// Milestone 1
// Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.
// Milestone 2
// Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
// Milestone 3
// Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.




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



const container = document.querySelector('.container');




for (let i = 0; i < icons.length; i++) {
	const element = icons[i];
	const templateDiv = `
	<div class="icon-container">
		<div class="icons"><i class="${element.family} ${element.prefix}${element.name}" style="color: ${element.color}"></i></div>
		<div class="icon-title">${element.name}</div>
	</div>`
	container.innerHTML += templateDiv;

}




const select = document.getElementById('change');


select.addEventListener('change', function(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    const selectVa = select.value;

    if(selectVa == 'All'){
        container.innerHTML ='';
        icons.forEach((element) =>{  
            element.color = '#' + randomColor;
            const templateDiv =
            `<div class="icon-container">
            <div class="icons"><i class="${element.family} ${element.prefix}${element.name}" style="color: ${element.color}"></i></div>
            <div class="icon-title">${element.name}</div>
            </div>`
            container.innerHTML += templateDiv;
        });

        
    }else if(selectVa == 'Animal'){
        // console.log('ciao');
        container.innerHTML ='';
        const animal = icons.filter((element) =>{
            if (element.color == 'orange'){
                return element;
            }
            
        });
        animal.forEach((element) =>{  
            const templateDiv =
            `<div class="icon-container">
            <div class="icons"><i class="${element.family} ${element.prefix}${element.name}" style="color: ${element.color}"></i></div>
            <div class="icon-title">${element.name}</div>
            </div>`
            container.innerHTML += templateDiv;

        });
    }else if( selectVa == 'Vegetable'){
        // console.log('ciao');
        container.innerHTML ='';
        const animal = icons.filter((element) =>{
            if (element.color == 'green'){
                return element;
            }
        });
        animal.forEach((element) =>{
            const templateDiv =
            `<div class="icon-container">
            <div class="icons"><i class="${element.family} ${element.prefix}${element.name}" style="color: ${element.color}"></i></div>
            <div class="icon-title">${element.name}</div>
            </div>`
            container.innerHTML += templateDiv;

        });

    }else if(selectVa == 'User'){
        // console.log('ciao');
        container.innerHTML ='';
        const animal = icons.filter((element) =>{
            if (element.color == 'blue'){
                return element;
            }
        });
        animal.forEach((element) =>{
            const templateDiv =
            `<div class="icon-container">
            <div class="icons"><i class="${element.family} ${element.prefix}${element.name}" style="color: ${element.color}"></i></div>
            <div class="icon-title">${element.name}</div>
            </div>`
            container.innerHTML += templateDiv;
        }); 
    }

console.log(select);

});





// console.log(container);
// console.log(icons);








