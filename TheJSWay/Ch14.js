//**************Counting Elements
function countElements(el) {
    return document.querySelectorAll(el).length;
}
console.log(countElements("p"));  // Should show 4
console.log(countElements(".adjective"));  // Should show 3
console.log(countElements("p .adjective"));  // Should show 3
console.log(countElements("p > .adjective")); // Should show 2

//************** Handling Attributes*/
function linkInfo() {
    let links = document.querySelectorAll("a");
    console.log(links.length);
    console.log(links[0].getAttribute("href"));
    console.log(links[links.length - 1].getAttribute("href"));
}

//**********************Handling Classes */
// Show if an element has a class
const has = (id, someClass) => { 
    // TODO: write the function code
    if (!document.getElementById(id)) {
        console.error('No element has id contrabass')
    } else if (document.getElementById(id).classList.contains(someClass)) {
        console.log('true');
    } else if (!document.getElementById(id).classList.contains(someClass)) {
        console.log('false');
    }
};

has("saxophone", "woodwind");
has("saxophone", "brass");
has("trumpet", "brass");
has("contrabass", "chordophone");