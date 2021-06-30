export const nameValidation = function nameValidation(name) {
    if (name < 5) {
        return 'This field requires five characters';
    }
    if (/\d/.test(name)) {
        return ' This field cannot contain numbers'
    }
     if (!name.includes(" ")) {
       return 'This Field Requires A Space';
     }

    return false
}