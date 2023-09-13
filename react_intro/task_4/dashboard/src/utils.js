// task_1/dashboard/src/utils.js

export function getLatestNotification() {
  return '<strong>Urgent requirement</strong> - complete by EOD';
}

export function getFullYear() {
    return new Date().getFullYear();
  }
  
  export function getFooterCopy(isIndex) {
    return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
  }
  