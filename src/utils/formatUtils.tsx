import { STATES } from './states';

// this is duplicated  in useSignUp
function isFullState(text) {
  return Object.keys(STATES).find(state => state === text);
}

function getStateCode(text) {
  if (isFullState(text)) {
    return (STATES[text]);
  } else {
    return text
  }
}

function formatPhone(text) {
  return text.replace(/[\-\(\)]/g, '');
}

export { getStateCode, formatPhone };
