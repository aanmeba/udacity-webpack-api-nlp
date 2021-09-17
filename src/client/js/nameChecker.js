function URLChecker(inputText) {
    console.log("::: Running URLChecker :::", inputText);
    
    const reg = new RegExp(/^(http|https):\/\/[^ "]+$/);
    return reg.test(inputText);
}

export { URLChecker }
