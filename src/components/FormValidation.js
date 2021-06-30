export const nameValidation = function nameValidation(name) {
     if (name.length > 30) {
       return 'This field only accepts 30 characters';
     }
    if (name.length < 5) {
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