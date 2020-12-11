

var elForm = document.querySelector(`.form`);
var elFormInput = elForm.querySelector(`.form__input`);
var elFormButton = elForm.querySelector(`.form__button`);
var elFormText = elForm.querySelector(`.form__text`);

elForm.addEventListener(`submit`, function(evt){
evt.preventDefault();
var result =elFormInput.value

if (result === `1`){
  elFormText.textContent = `Dushanba`;
}else if (result === `2`){
  elFormText.textContent = `Seshanba`;
}else if (result === `3`){
  elFormText.textContent = `Chorshanba`;
}else if (result === `4`){
  elFormText.textContent = `Payshanba`;
}else if (result === `5`){
  elFormText.textContent = `Juma !!!`;
}else if (result === `6`){
  elFormText.textContent = `Shanba`;
}else if (result === `7`){
  elFormText.textContent = `Yakshanba`;
}
else{
  elFormText.textContent = `Xato ketti !`;
}
});