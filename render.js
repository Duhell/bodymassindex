//for displaying HTML

const app = document.getElementById('app')

function render(){
	return`

		<div id="title">Body Mass Index</div>
		${forms()}
		${resultArea()}

	`
}

function forms(){
	return`

		<div id="forms">
			<form>
				${heightDIV()}
				${weightDIV()}
				<button id="btn">Calculate</button>
			</form>
		</div>
		<br>
		<hr>
		<br>
	`
}

function heightDIV(){
	return`

		<div id="height">
			<label>Height (m)</label>
			<input type="text" id="inputHeight" placeholder="Meters">
		</div>


	`
}
function weightDIV(){
	return `

		<div id="weight">
			<label>Weight (kg)</label>
			<input type="text" id="inputWeight" placeholder="Kilograms">
		</div>

	`
}

function resultArea(){
	return`

		<div>
			<span>BMI: <span id="result"></span></span>
			<br>
			<br>
			<span>Classification: <span  id="resultClassification"></span></span>
		</div>

	`
}
app.insertAdjacentHTML('beforeend',render())