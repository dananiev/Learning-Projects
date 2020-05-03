function extractFile(input) {

    let fileNameStart = input.lastIndexOf('\\') + 1;
    let fileNameEnd = input.lastIndexOf('.');

    let fileName = input.substring(fileNameStart, fileNameEnd);
    let fileExtension = input.substr(fileNameEnd + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);

}

extractFile('C:\\Internal\\training-internal\\Template.pptx');