//example of values passed to a function as arguments
const additionalCharacters = [1, 2 ,3 ,4, 5, 6,7, 8] 
let nameSelector = 'name_class '
const typeSelectorCurrent = 'class'

function getNodeList(type, nameSelector, arrayChar) {
    if (!nameSelector) {
        console.log('specify the name of a selector');
        return []
    }
    if (typeof(nameSelector) !== 'string') {
        console.log('name of the selector must be a string');
        return []
    }
    if (!Array.isArray(arrayChar)) {
        console.log('the list of characters must be an array');
        return []
    }
    if (arrayChar.length < 1) {
        console.log('the array must not be empty');
        return []
    }
    //removing unnecessary characters in the string
    nameSelector = nameSelector.replace(/[\s.\#%]/g, '')
    const typeSelector = {
        class:'.',
        id:'#'
        //you can add your own type here
    }
    if (!typeSelector[type]) {
        console.log('specify the type of a selector');
        return []
    }
    const nodeList = []
    let selector = ''
    selector = typeSelector[type]+nameSelector
	for (let i = 0; i < arrayChar.length; i++) {
		const node = document.querySelectorAll(selector+arrayChar[i])
		nodeList.push(node)
	}
	return nodeList
}
