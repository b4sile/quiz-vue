export const htmlEncode = (s) => {
  var str,
    temp = document.createElement('p');
  temp.innerHTML = s;
  str = temp.textContent || temp.innerText;
  temp = null;
  return str;
};
