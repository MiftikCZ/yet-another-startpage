// COLORED TITLE
for (let i=0;i<document.getElementById("odkazy").children.length;i++) {
    let j = document.getElementById("odkazy").children.item(i)
    j.children.item(0).style.color = "hsl("+((i*config.color_step)+config.color_start)+","+config.color_hsl.join("%,")+"%)"
    console.log(j.children.item(0))
}

document.querySelectorAll("a").forEach(el => {
    el.setAttribute("target", "_blank")
})