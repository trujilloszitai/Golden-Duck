/* Validación dinámica de form */
const form = $('#form');
const inputs = $('.form-input');

const expressions = {
	name: /^[a-zA-ZÀ-ÿ\s]{1,50}$/, // Letras y espacios, pueden llevar acentos.
    surname: /^[a-zA-ZÀ-ÿ\s]{1,50}$/,
	dni: /^\d{8}$/ // 8 numeros.
}

const fields = {
	name: false,
	surname: false,
	dni: false,
}

const validateform = (e) => {
	switch (e.target.name) {
		case "name":
			validateField(expressions.name, e.target, 'name');
		break;
		case "surname":
			validateField(expressions.surname, e.target, 'surname');
		break;
		case "dni":
			validateField(expressions.dni, e.target, 'dni');
		break;
	}
}

const validateField = (expression, input, field) => {
	if(expression.test(input.value)){
		$(`#cont-${field}`).removeClass('form-cont-incorrect');
		$(`#cont-${field}`).addClass('form-cont-correct');
		$(`#cont-${field} i`).addClass('fa-check-circle');
		$(`#cont-${field} i`).removeClass('fa-times-circle');
		$(`#cont-${field} .form-input-error`).removeClass('form-input-error-active');
        $(`#cont-${field} div input`).css('color', 'var(--color-success)');
		fields[field] = true;
	} else {
		$(`#cont-${field}`).addClass('form-cont-incorrect');
		$(`#cont-${field}`).removeClass('form-cont-correct');
		$(`#cont-${field} i`).addClass('fa-times-circle');
		$(`#cont-${field} i`).removeClass('fa-check-circle');
		$(`#cont-${field} .form-input-error`).addClass('form-input-error-active');
        $(`#cont-${field} div input`).css('color', 'var(--color-danger)');
		fields[field] = false;
	}
}

// Validación de contraseñas (próximamente)
/* const validatePassword2 = () => {
	const inputPassword1 = $('#password');
	const inputPassword2 = $('#password2');

	if(inputPassword1.value !== inputPassword2.value){
		$(`#cont-password2`).addClass('form-cont-incorrect');
		$(`#cont-password2`).removeClass('form-cont-correct');
		$(`#cont-password2 i`).addClass('fa-times-circle');
		$(`#cont-password2 i`).removeClass('fa-check-circle');
		$(`#cont-password2 .form-input-error`).addClass('form-input-error-active');
		fields['password'] = false;
	} else {
		$(`#cont-password2`).removeClass('form-cont-incorrect');
		$(`#cont-password2`).addClass('form-cont-correct');
		$(`#cont-password2 i`).removeClass('fa-times-circle');
		$(`#cont-password2 i`).addClass('fa-check-circle');
		$(`#cont-password2 .form-input-error`).removeClass('form-input-error-active');
		fields['password'] = true;
	}
} */

inputs.each(() => {
    $(this).keyup(validateform)
    $(this).blur(validateform)
});

form.submit((e) => {
	e.preventDefault();

	const terminos = $('#terminos');
	if(fields.usuario && fields.nombre && fields.password && fields.correo && fields.telefono && terminos.checked ){
		form.reset();

		$('#form-mensaje-exito').addClass('form-mensaje-exito-active');
		setTimeout(() => {
			$('#form-mensaje-exito').removeClass('form-mensaje-exito-active');
		}, 5000);

		$All('.form-cont-correct').forEach((icono) => {
			icono.removeClass('form-cont-correct');
		});
	} else {
		$('#form-mensaje').addClass('form-mensaje-active');
	}
});