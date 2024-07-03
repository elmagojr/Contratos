
//para convertir a negritas los textos entre ***

function formatText(text) {
    const formatted = [];
    // Divide por el formato combinado de negritas e itálicas (**__texto__** y __**texto**__)
    const parts = text.split(/(\*\*__.*?__\*\*|__\*\*.*?\*\*__|\*\*.*?\*\*|__.*?__)/);

    parts.forEach(part => {
        if (part.startsWith("**__") && part.endsWith("__**")) {
            formatted.push({ text: part.slice(4, -4), bold: true, italics: true });
        } else if (part.startsWith("__**") && part.endsWith("**__")) {
            formatted.push({ text: part.slice(4, -4), bold: true, italics: true });
        } else if (part.startsWith("**") && part.endsWith("**")) {
            formatted.push({ text: part.slice(2, -2), bold: true });
        } else if (part.startsWith("__") && part.endsWith("__")) {
            formatted.push({ text: part.slice(2, -2), italics: true });
        } else {
            formatted.push(part); 
        }
    });

    return formatted;
}



