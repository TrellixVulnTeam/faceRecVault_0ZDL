/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions.js":
/*!**************************!*
  !*** ./src/functions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createEncoding": () => /* binding */ createEncoding,
/* harmony export */   "handleEncodingResponse": () => /* binding */ handleEncodingResponse,
/* harmony export */   "getCookie": () => /* binding */ getCookie,
/* harmony export */   "hideLoadingWheel": () => /* binding */ hideLoadingWheel,
/* harmony export */   "deleteVaultEntry": () => /* binding */ deleteVaultEntry,
/* harmony export */   "createVaultEntry": () => /* binding */ createVaultEntry,
/* harmony export */   "saveNewComponents": () => /* binding */ saveNewComponents,
/* harmony export */   "saveUpdatedComponents": () => /* binding */ saveUpdatedComponents,
/* harmony export */   "saveDeletedComponents": () => /* binding */ saveDeletedComponents
/* harmony export */ });
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/*

    home page functions

*/

var createEncoding = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(imageB64) {
    var data, response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            data = {
              imageb64: imageB64
            };
            data = JSON.stringify(data);
            _context.next = 4;
            return fetch('http://127.0.0.1:8000/api/encoding/create/', {
              method: "POST",
              body: data,
              headers: {
                'Content-type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken') // getting the csrf token that django cookiefies

              }
            });

          case 4:
            response = _context.sent;
            return _context.abrupt("return", response);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createEncoding(_x) {
    return _ref.apply(this, arguments);
  };
}();
var handleEncodingResponse = function handleEncodingResponse(responseObj) {
  var responseText = responseObj.response;

  if (responseText.startsWith('redirect')) {
    var redirectText = responseText.slice(responseText.indexOf('redirect') + 9);
    window.location.href = "http://127.0.0.1:8000/".concat(redirectText);
  } else {
    hideLoadingWheel();
    var errorContainer = document.querySelector('#errorMsg');
    errorContainer.innerText = "Try again";
  }
};
function getCookie(name) {
  var cookieValue = null;

  if (document.cookie && document.cookie !== '') {
    var cookies = document.cookie.split(';');

    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim(); // Does this cookie string begin with the name we want?

      if (cookie.substring(0, name.length + 1) === name + '=') {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }

  return cookieValue;
}
var hideLoadingWheel = function hideLoadingWheel() {
  var loader = document.querySelector('.loader');
  loader.classList.remove('loader');
};
/*

    vault overview page functions

*/

var deleteVaultEntry = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(username, entryId) {
    var response;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetch("http://127.0.0.1:8000/api/vault/".concat(username, "/delete/").concat(entryId, "/"), {
              method: "DELETE",
              headers: {
                'X-CSRFToken': getCookie('csrftoken') // getting the csrf token that django cookiefies

              }
            });

          case 2:
            response = _context2.sent;
            return _context2.abrupt("return", response);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function deleteVaultEntry(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();
var createVaultEntry = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(username) {
    var response;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return fetch("http://127.0.0.1:8000/api/vault/".concat(username, "/create/"), {
              method: "POST",
              headers: {
                'X-CSRFToken': getCookie('csrftoken') // getting the csrf token that django cookiefies

              }
            });

          case 2:
            response = _context3.sent;
            return _context3.abrupt("return", response);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function createVaultEntry(_x4) {
    return _ref3.apply(this, arguments);
  };
}();
/*

    vaultEntry page functions

*/

/**
 * NOTES
 * - Obviously should have had a unified function for getting data for POST and PUTs but whatevs
 */

var saveNewComponents = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(newComponentIDs, newImageB64s, vaultEntry) {
    var requestBody, imgCount, response;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            console.log("Save new ".concat(newComponentIDs.size)); // the request body will contain the vault entry ID and a list of components to be POSTed

            requestBody = {
              vaultEntry: vaultEntry,
              compData: []
            };
            imgCount = 0;
            newComponentIDs.forEach(function (compID) {
              // getting component and data type
              var component = document.querySelector("[id$='Container".concat(compID, "']"));

              if (component.id.startsWith('t')) {
                // component name and main data
                var nameData = component.querySelector("#txtName".concat(compID)).innerText;
                var mainData = component.querySelector("#txtData".concat(compID)).innerText;
                requestBody.compData.push({
                  dataType: 'Text',
                  name: nameData,
                  data: mainData
                });
              } else {
                // checking if the "Choose File" button still exists for this image; if so, skip this component
                if (component.querySelector(".imgData".concat(compID))) {
                  console.log("Continued on ".concat(compID, "; image was never uploaded!"));
                  return; // advance the forEach
                } // img name and caption


                var _nameData = component.querySelector("#imgName".concat(compID)).innerText;
                var captionData = component.querySelector("#imgCaption".concat(compID)).innerText; // get raw image b64
                // assumes the order of images in newComponentIDs is the same as newImageB64s

                var rawImgB64 = newImageB64s[imgCount];
                requestBody.compData.push({
                  dataType: 'Image',
                  name: _nameData,
                  imageB64: rawImgB64,
                  caption: captionData
                });
                imgCount += 1;
              }
            }); // if no images were actually uploaded

            if (!(requestBody.compData.length == 0)) {
              _context4.next = 6;
              break;
            }

            return _context4.abrupt("return", "{status: 'Saved 0'}");

          case 6:
            // sending request
            console.log("POST body: ".concat(requestBody));
            requestBody = JSON.stringify(requestBody);
            _context4.next = 10;
            return fetch('http://127.0.0.1:8000/api/vaultEntry/createComponents/', {
              method: "POST",
              body: requestBody,
              headers: {
                'Content-type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken') // getting the csrf token that django cookiefies

              }
            });

          case 10:
            response = _context4.sent;
            return _context4.abrupt("return", response);

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function saveNewComponents(_x5, _x6, _x7) {
    return _ref4.apply(this, arguments);
  };
}();
var saveUpdatedComponents = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(updatedComponentIDs) {
    var requestBody, imgCount, response;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            // the request body will contain the vault entry ID and a list of components to be POSTed
            requestBody = {
              compData: []
            };
            imgCount = 0;
            updatedComponentIDs.forEach(function (compID) {
              // getting component and data type
              var component = document.querySelector("[id$='Container".concat(compID, "']"));

              if (component.id.startsWith('t')) {
                // component name and main data
                var nameData = component.querySelector("#txtName".concat(compID)).innerText;
                var mainData = component.querySelector("#txtData".concat(compID)).innerText;
                requestBody.compData.push({
                  dataType: 'Text',
                  name: nameData,
                  data: mainData,
                  id: compID
                });
              } else {
                // checking if the "Choose File" button still exists for this image; if so, skip this component
                if (component.querySelector(".imgData".concat(compID))) {
                  // input tags have imgData classes instead of ids
                  console.log("Continued on ".concat(compID, "; image was never uploaded!"));
                  return; // advance the forEach
                } // img name and caption


                var _nameData2 = component.querySelector("#imgName".concat(compID)).innerText;
                var captionData = component.querySelector("#imgCaption".concat(compID)).innerText;
                requestBody.compData.push({
                  dataType: 'Image',
                  name: _nameData2,
                  caption: captionData,
                  id: compID
                });
                imgCount += 1;
              }
            }); // if no images were actually uploaded

            if (!(requestBody.compData.length == 0)) {
              _context5.next = 5;
              break;
            }

            return _context5.abrupt("return", "{status: 'Updated 0'}");

          case 5:
            // sending request
            requestBody = JSON.stringify(requestBody);
            console.log("PUT body: ".concat(requestBody));
            _context5.next = 9;
            return fetch('http://127.0.0.1:8000/api/vaultEntry/updateComponents/', {
              method: "PUT",
              body: requestBody,
              headers: {
                'Content-type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken') // getting the csrf token that django cookiefies

              }
            });

          case 9:
            response = _context5.sent;
            return _context5.abrupt("return", response);

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function saveUpdatedComponents(_x8) {
    return _ref5.apply(this, arguments);
  };
}();
var saveDeletedComponents = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(deletedComponentIDs, deletedComponentDataTypes) {
    var requestBody, response;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            requestBody = {
              deletedComponentDataTypes: deletedComponentDataTypes,
              deletedComponentIDs: Array.from(deletedComponentIDs)
            };
            requestBody = JSON.stringify(requestBody);
            console.log("DELETE body: ".concat(requestBody));
            _context6.next = 5;
            return fetch('http://127.0.0.1:8000/api/vaultEntry/deleteComponents/', {
              method: "DELETE",
              body: requestBody,
              headers: {
                'Content-type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken') // getting the csrf token that django cookiefies

              }
            });

          case 5:
            response = _context6.sent;
            return _context6.abrupt("return", response);

          case 7:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function saveDeletedComponents(_x9, _x10) {
    return _ref6.apply(this, arguments);
  };
}();
/*
export const createImageComponent = (imageB64, orderKey, entryID) => {

    let data = {
        imageb64: imageB64,
        entryID: entryID,
        orderKey: orderKey
    };
    data = JSON.stringify(data);

    const response = await fetch('http://127.0.0.1:8000/api/vault/create/', {
        method: "POST",
        body: data,
        headers: {
            'Content-type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken') // getting the csrf token that django cookiefies
        }
    });

    return response;
};

export const createTextComponent = (name, text, orderKey, entryID) => {

    let data = {
        name: name, 
        text: text,
        orderKey: orderKey,
        entryID: entryID
    };
    data = JSON.stringify(data);

    const response = await fetch('http://127.0.0.1:8000/api/vault/create/', {
        method: "POST",
        body: data,
        headers: {
            'Content-type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken') // getting the csrf token that django cookiefies
        }
    });

    return response;
}

*/

/***/ }),

/***/ "./src/vaultEntry.js":
/*!***************************!*
  !*** ./src/vaultEntry.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./src/functions.js");

/*

    Setting appropriate global variables for the page

*/

var buttonContainer = document.querySelector("#buttonContainer");
var componentContainer = document.querySelector('#components');
var entryID = parseInt(window.location.href.substring(window.location.href.length - 3));
var emptyEntryMsg = document.querySelector('#empty'); // arrays for storing the IDs of edited, new, and initial components

var deletedComponentIDs = []; // for DELETE

var deletedComponentDataTypes = [];
var updatedComponentIDs = []; // for PUT

var newComponentIDs = []; // for POST

/*

    Processing initial components upon page load by adding event listeners for PUT requests 
    and delete buttons

*/
// Hiding the log off btn and nav text

document.querySelector('#logBtn').style.display = 'none';
document.querySelector('#anything').style.display = 'none'; // Adding an event listener to each component container to mark them for PUT request
// and adding DELETE btn event listeners

if (!emptyEntryMsg) {
  // Adding an event listener to each component container to mark them for PUT request if clicked
  var allComponents = document.getElementsByClassName('compContainer');

  var _loop = function _loop(i) {
    var currentComponent = allComponents.item(i); // shoulda used a NodeList instead (forEach)

    currentComponent.addEventListener('click', function (event) {
      // hiding any visible delete buttons upon clicking the component
      document.querySelectorAll('.deleteBtn').forEach(function (e) {
        e.style.display = 'none';
      }); // showing Delete button upon clicking the component

      currentComponent.querySelector('.deleteBtn').style.display = 'inline-block'; // marking for future PUT request if it wasnt the delete button that was pushed

      if (!event.target.classList.contains('deleteBtn')) {
        updatedComponentIDs.push(parseInt(currentComponent.id.slice(12)));
        console.log("Update pushed ".concat(currentComponent.id.slice(12)));
      }
    });
  };

  for (var i = 0; i < allComponents.length; i++) {
    _loop(i);
  } // Adding Delete btn event listeners for removing components and marking for DELETE requests if 
  // Delete is clicked


  var allDeleteBtns = document.getElementsByClassName('deleteBtn');

  var _loop2 = function _loop2(_i) {
    var currentDeleteBtn = allDeleteBtns.item(_i);
    currentDeleteBtn.addEventListener('click', function () {
      // marking for future DELETE request and removing from PUT list if in it
      var deleteBtnContainer = currentDeleteBtn.parentNode.parentNode;
      var currentCompID = parseInt(deleteBtnContainer.id.slice(12));
      deletedComponentIDs.push(currentCompID); // component ID appendage
      // logging data type for DELETE request

      if (document.querySelector("#imgContainer".concat(currentCompID))) {
        deletedComponentDataTypes.push('Image');
      } else {
        deletedComponentDataTypes.push('Text');
      } // clearing from updated IDs in case it was previously pushed


      updatedComponentIDs = updatedComponentIDs.filter(function (element) {
        return element != currentCompID;
      }); // removing from DOM

      console.log("Delete pushed ".concat(currentCompID));
      deleteBtnContainer.remove(); // removes container and its contents

      if (!componentContainer.hasChildNodes()) {
        emptyEntryMsg = document.createElement('p');
        emptyEntryMsg.id = 'empty';
        emptyEntryMsg.innerText = "This entry is empty!";
        emptyEntryMsg.style = "text-align: center;";
        componentContainer.append(emptyEntryMsg);
      }
    });
  };

  for (var _i = 0; _i < allDeleteBtns.length; _i++) {
    _loop2(_i);
  }
}
/*

    Handling the addition of new text components, new image components, and the SAVE button

*/


buttonContainer.addEventListener('click', function (event) {
  // Create, set up, and display text component
  if (event.target.id == "addText") {
    // create temporary ID for new text and add to newComponents array for
    // a future POST request
    var newTextTempID = -newComponentIDs.length;
    newComponentIDs.push(newTextTempID); // create HTML nodes with proper temp ID

    var newTextContainer = document.createElement('div');
    newTextContainer.id = "txtContainer".concat(newTextTempID);
    newTextContainer.classList.add('compContainer', 'my-5', 'mx-auto');
    newTextContainer.style = "width: 50%;";
    newTextContainer.innerHTML = "<p id=\"txtName".concat(newTextTempID, "\" class=\"txtName font-weight-bold\" style=\"font-size: x-large; text-align: center\" contenteditable=\"true\" spellcheck=\"false\">TEXTBOX NAME</p>\n        <p id=\"txtData").concat(newTextTempID, "\" class=\"txtData\" contenteditable=\"true\" spellcheck=\"false\">TEXTBOX DATA</p>\n        <div class=\"row justify-content-center\">\n            <button id=\"txtDelete").concat(newTextTempID, "\" class=\"deleteBtn btn btn-danger\">Delete</button>\n        </div>"); // Hiding all currently visible delete buttons

    document.querySelectorAll('.deleteBtn').forEach(function (e) {
      e.style.display = 'none';
    }); // Adding text component to DOM

    componentContainer.append(newTextContainer); // Hiding empty entry message if it's visible (for when this is the first component of the entry)

    if (emptyEntryMsg) {
      emptyEntryMsg.style.display = "none";
    } // Listening for a click on this component as to make the delete button visible if invisible


    newTextContainer.addEventListener('click', function () {
      // Hiding all currently visible delete buttons
      document.querySelectorAll('.deleteBtn').forEach(function (e) {
        e.style.display = 'none';
      }); // Showing this component's Delete button

      newTextContainer.lastChild.style.display = 'inline-block';
    }); // Adding delete button event listener

    newTextContainer.querySelector('.deleteBtn').addEventListener('click', function () {
      // removing from DOM and POST list; no need to send a request
      newComponentIDs = newComponentIDs.filter(function (element) {
        return element != newTextTempID;
      });
      newTextContainer.remove();

      if (!componentContainer.hasChildNodes()) {
        emptyEntryMsg = document.createElement('p');
        emptyEntryMsg.id = 'empty';
        emptyEntryMsg.innerText = "This entry is empty!";
        componentContainer.append(emptyEntryMsg);
      }
    }); // NOTE: new components do not need to be marked for possible PUT or DELETE requests!
  } // Create, set up, and display image component
  else if (event.target.id == "addImage") {
      // create temporary ID for new img that will be pushed to newComponentIDs once the img is uploaded
      var newImgTempID = -newComponentIDs.length; // create HTML nodes with proper temp ID

      var newImgContainer = document.createElement('div');
      newImgContainer.id = "imgContainer".concat(newImgTempID);
      newImgContainer.classList.add('compContainer', 'my-5'); // create name textbox, img upload button, and caption textbox

      newImgContainer.innerHTML = "<p id=\"imgName".concat(newImgTempID, "\" class=\"imgName my-2 font-weight-bold\" style=\"font-size: x-large; text-align: center;\" contenteditable=\"true\" spellcheck=\"false\">NAME</p>\n        <div class=\"row justify-content-center\">\n            <input type=\"file\" id=\"imgUpload").concat(newImgTempID, "\" class=\"imgData").concat(newImgTempID, " my-2\" accept=\"image/jpeg, image/png\">\n        </div>\n        <p id=\"imgCaption").concat(newImgTempID, "\" class=\"imgCaption my-2\" style=\"text-align: center;\" contenteditable=\"true\" spellcheck=\"false\">CAPTION</p>\n        <div class=\"row justify-content-center\">\n            <button id=\"imgDelete").concat(newImgTempID, "\" class=\"deleteBtn btn btn-danger\">Delete</button>\n        </div>"); // Adding image component to DOM

      componentContainer.append(newImgContainer); // adding state change listener to input tag to get and display uploaded image

      document.querySelector("#imgUpload".concat(newImgTempID)).addEventListener('change', function (event) {
        var uploadedImgURL = URL.createObjectURL(event.target.files[0]); // create document path
        // creating img tag -> removing input tag -> appending img to imgName

        var newImgTag = document.createElement('img');
        newImgTag.src = uploadedImgURL;
        var windowHeight = window.outerHeight;
        newImgTag.height = Math.ceil(windowHeight / 2);
        newImgTag.id = "imgData".concat(newImgTempID);
        newImgTag.classList.add('my-2');
        newImgTag.alt = "Failed to load image"; // outer img div for centering

        var divRow = document.createElement('div');
        divRow.classList.add('row');
        divRow.classList.add('justify-content-center');
        divRow.appendChild(newImgTag);
        event.target.remove(); // removing Choose File button
        // inserting the image between the name and caption within the container

        var imgCaption = document.querySelector("#imgCaption".concat(newImgTempID));
        newImgContainer.insertBefore(divRow, imgCaption); // add to newComponents array for a future POST request

        newComponentIDs.push(newImgTempID);
      }); // Listening for a click on this component as to make the delete button visible if invisible

      newImgContainer.addEventListener('click', function () {
        // Hiding all currently visible delete buttons
        document.querySelectorAll('.deleteBtn').forEach(function (e) {
          e.style.display = 'none';
        }); // Showing this component's Delete button

        newImgContainer.lastChild.style.display = 'inline-block';
      }); // Hiding empty entry message if it's visible

      if (emptyEntryMsg) {
        emptyEntryMsg.style.display = "none";
      } // Adding delete button event listener


      newImgContainer.querySelector('.deleteBtn').addEventListener('click', function () {
        // removing from DOM and POST lists upon deletion; no need to send a request
        newComponentIDs = newComponentIDs.filter(function (element) {
          return element != newImgTempID;
        });
        newImgContainer.remove();

        if (!componentContainer.hasChildNodes()) {
          emptyEntryMsg = document.createElement('p');
          emptyEntryMsg.id = 'empty';
          emptyEntryMsg.innerText = "This entry is empty!";
          componentContainer.append(emptyEntryMsg);
        }
      }); // NOTE: new components do not need to be marked for possible PUT or DELETE requests!
    } // saving contents with the SAVE button
    // add keyboard shortcut Alt + s    
    // send necessary PUT, POST, and DELETE requests
    else if (event.target.id == "saveBtn") {
        // hide save btn (fine since it'll refresh)
        document.querySelector('#saveBtn').style.display = 'none'; // if emptyEntryMsg DNE or if it has been hidden upon adding new elements

        if (!emptyEntryMsg || emptyEntryMsg.style.display == "none") {
          // will be [1,1,1] when all 3 are done
          var finishedRequests = [0, 0, 0];
          /* 
              POST
              
              1. Check if any new components exist
              2. Get all new img base64s
              3. Send new shit to server
              4. Verify success
              5. PUT
          */

          if (newComponentIDs.length != 0) {
            newComponentIDs = new Set(newComponentIDs); // deleting duplicates
            // Getting new img base64s

            var canvas = document.createElement('canvas');
            var context = canvas.getContext('2d');
            var newImageB64s = [];
            newComponentIDs.forEach(function (id) {
              // checking if this component is an image; if so, get b64
              var imgTag = document.querySelector("#imgData".concat(id));

              if (imgTag) {
                canvas.width = imgTag.width;
                canvas.height = imgTag.height;
                context.drawImage(imgTag, 0, 0, imgTag.width, imgTag.height);
                newImageB64s.push(canvas.toDataURL('img/jpeg'));
              }
            });
            (0,_functions__WEBPACK_IMPORTED_MODULE_0__.saveNewComponents)(newComponentIDs, newImageB64s, entryID).then(function (response) {
              response.json().then(function (responseObj) {
                console.log("Save new complete: ".concat(responseObj.status));
                finishedRequests[0] = 1;

                if (finishedRequests[1] && finishedRequests[2]) {
                  // If the other two requests are done, refresh the page so I don't have to deal with 
                  // classifying and preprocessing components a second time
                  location.reload();
                }
              });
            })["catch"](function (error) {
              console.log("Save new error: ".concat(error));
            });
          } else {
            // if no new components
            finishedRequests[0] = 1;
          }
          /*
              PUT
              1. Delete duplicates
              2. Send all touched components' data to server
              3. Verify success
              4. DELETE!
          */


          if (updatedComponentIDs.length != 0) {
            updatedComponentIDs = new Set(updatedComponentIDs); // deleting duplicates

            (0,_functions__WEBPACK_IMPORTED_MODULE_0__.saveUpdatedComponents)(updatedComponentIDs).then(function (response) {
              response.json().then(function (responseObj) {
                console.log("Save updates complete: ".concat(responseObj.status));
                finishedRequests[1] = 1;

                if (finishedRequests[0] && finishedRequests[2]) {
                  // If the other two requests are done, refresh the page so I don't have to deal with 
                  // classifying and preprocessing components a second time
                  location.reload();
                }
              });
            })["catch"](function (error) {
              console.log("Save updates error: ".concat(error));
            });
          } else {
            // if no updated components
            finishedRequests[1] = 1;
          }
          /* 
              DELETE
              1. Send DELETE request
              2. Verify success of server
          */


          if (deletedComponentIDs.length != 0) {
            deletedComponentIDs = new Set(deletedComponentIDs);
            (0,_functions__WEBPACK_IMPORTED_MODULE_0__.saveDeletedComponents)(deletedComponentIDs, deletedComponentDataTypes).then(function (response) {
              response.json().then(function (responseObj) {
                console.log("Save deleted complete: ".concat(responseObj.status));
                finishedRequests[2] = 1;

                if (finishedRequests[0] && finishedRequests[1]) {
                  // If the other two requests are done, refresh the page so I don't have to deal with 
                  // classifying and preprocessing components a second time
                  location.reload();
                }
              });
            })["catch"](function (error) {
              console.log("Save deleted error: ".concat(error));
            });
          } else {
            // if no deleted components
            finishedRequests[2] = 1;
          }
        } else {
          console.log("No new, updated, or deleted components when saved");
        }
      }
});
/*
    Saving contents that were edited if the page gets closed
    (probably not gonna implement this feature since we've moved onto a save button)
*/

window.onunload = function () {
  document.querySelector('#saveBtn').click();
};
/**
 * Adding 'Beautify' functionality which at present just hides delete btns
 */


document.querySelector('#beautify').addEventListener('click', function () {
  document.querySelectorAll('.deleteBtn').forEach(function (e) {
    e.style.display = 'none';
  });
});
/**
 * Setting up and handling the log off btn
 */

var logOffBtn = document.querySelector('#logBtn');
logOffBtn.innerText = "Log Off";
logOffBtn.addEventListener('click', function () {
  window.location.href = window.location.href;
});

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/vaultEntry.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=vaultEntry-bundle.js.map