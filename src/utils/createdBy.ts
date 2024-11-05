export const createdBy = () => {
  const asciiSign = '<!-- Developed by Roelu - www.roelu.com -->';
  document.head.insertAdjacentHTML('beforebegin', asciiSign);
  document.body.insertAdjacentHTML('afterend', asciiSign);
};
