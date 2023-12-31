import JustValidate from 'just-validate';

const contactsFormValidation = () => {
    if (document.getElementById('contacts-form')) {
        const validator = new JustValidate('#contacts-form', {
            errorLabelCssClass: ['error-label'],
        });

        document.getElementById('inputName') &&
            validator.addField('#inputName', [
                {
                    rule: 'required',
                    errorMessage: "Будь ласка, заповніть це поле",
                },
            ]);
        
        document.getElementById('inputPhone') &&
            validator.addField('#inputPhone', [
                {
                    rule: 'required',
                    errorMessage: "Будь ласка, заповніть це поле",
                },
            ]);
        
        document.getElementById('inputEmail') &&
            validator.addField('#inputEmail', [
                {
                    rule: 'required',
                    errorMessage: "Будь ласка, заповніть це поле",
                },
            ]);

        document.getElementById('comment') &&
            validator.addField('#comment', [
                {
                    rule: 'required',
                    errorMessage: "Будь ласка, заповніть це поле",
                },
            ]);

        document.getElementById('checkboxAgree') &&
            validator.addField('#checkboxAgree', [
                {
                    rule: 'required',
                    errorMessage: "Будь ласка, заповніть це поле",
                },
            ]);
    }
}

export default contactsFormValidation;