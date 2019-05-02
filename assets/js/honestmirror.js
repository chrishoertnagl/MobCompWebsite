// Camera Handling

'use strict';

const constraints = window.constraints = {
  audio: false,
  video: true
};

function handleSuccess(stream) {
  const video = document.getElementById('videospace');
  const videoTracks = stream.getVideoTracks();
  console.log('Constraints:', constraints);
  window.stream = stream;
  video.srcObject = stream;
}

function handleError(error) {
  if (error.name === 'ConstraintNotSatisfiedError') {
    errorMsg('Problem with the constraints');
  } else if (error.name === 'PermissionDeniedError') {
    errorMsg('No Permission to use camera');
  }
  errorMsg(`getUserMedia error: ${error.name}`, error);
}

function errorMsg(msg, error) {
  const errorElement = document.getElementById('errorMsg');
  errorElement.innerHTML += `<p>${msg}</p>`;
  if (typeof error !== 'undefined') {
    console.error(error);
  }
}

async function init(e) {
  try {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    handleSuccess(stream);
    e.target.disabled = true;
  } catch (e) {
    handleError(e);
  }
}

document.getElementById('showVideo').addEventListener('click', e => init(e));