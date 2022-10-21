function filter_list(array){
    return array.filter((item => typeof item === "number"))
};
let testArray = [1, 2, 'a', 'b']
document.write("Task 1: Original list: ", testArray, "\nFiltered array: ", filter_list(testArray))