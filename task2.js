function first_non_repeating_letter(str){
    let p = -1, i, j;
    for(i = 0; i < str.length; i++)
    {
        for(j = i + 1; j < str.length; j++)
        {
            if (str[i] == str[j])
            {
                p = i;
                break;
            }
        }
        if (p != -1)
            break;
    }
    return str[p];
}
document.write("Task 2: String: \"letterrs\". First repeated letter: ", first_non_repeating_letter("letterrs"))