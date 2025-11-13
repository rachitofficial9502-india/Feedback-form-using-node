
function sanitize(str) {
    const newInput = str.replace(/<[^>]*>/g, "")
    console.log(newInput)
}

sanitize("abcd<abd>//okay/\*")
