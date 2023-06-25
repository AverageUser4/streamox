export function defaultOnChange({ setValue, validatorCallback } = {}, event) {
  const { value } = event.target;

  if(!setValue) {
    console.error('Either onChange or setValue has to be provided.')
    return;
  }
  if(validatorCallback && !validatorCallback(value)) {
    return;
  }
  
  setValue(value);
}
