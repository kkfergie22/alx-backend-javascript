/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.ts":
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
/***/ (function() {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Subjects;
(function (Subjects) {
    var Subject = /** @class */ (function () {
        function Subject() {
        }
        Subject.prototype.setTeacher = function (teacher) {
            this.teacher = teacher;
        };
        return Subject;
    }());
    Subjects.Subject = Subject;
    var Cpp = /** @class */ (function (_super) {
        __extends(Cpp, _super);
        function Cpp() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Cpp.prototype.getRequirements = function () {
            return 'Here is the list of requirements for Cpp';
        };
        Cpp.prototype.getAvailableTeacher = function () {
            if (this.teacher.experienceTeachingC) {
                return "Available Teacher: ".concat(this.teacher.firstName);
            }
            else {
                return 'No available teacher';
            }
        };
        return Cpp;
    }(Subject));
    Subjects.Cpp = Cpp;
    var Java = /** @class */ (function (_super) {
        __extends(Java, _super);
        function Java() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Java.prototype.getRequirements = function () {
            return 'Here is the list of requirements for Java';
        };
        Java.prototype.getAvailableTeacher = function () {
            if (this.teacher.experienceTeachingC) {
                return "Available Teacher: ".concat(this.teacher.firstName);
            }
            else {
                return 'No available teacher';
            }
        };
        return Java;
    }(Subject));
    Subjects.Java = Java;
    var React = /** @class */ (function (_super) {
        __extends(React, _super);
        function React() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        React.prototype.getRequirements = function () {
            return 'Here is the list of requirements for React';
        };
        React.prototype.getAvailableTeacher = function () {
            if (this.teacher.experienceTeachingReact) {
                return "Available Teacher: ".concat(this.teacher.firstName);
            }
            else {
                return 'No available teacher';
            }
        };
        return React;
    }(Subject));
    Subjects.React = React;
    Subjects.cpp = new Cpp();
    Subjects.java = new Java();
    Subjects.react = new React();
    Subjects.cTeacher = {
        firstName: 'John',
        lastName: 'Doe',
        experienceTeachingC: 10,
    };
    console.log('Cpp:');
    Subjects.cpp.setTeacher(Subjects.cTeacher);
    console.log(Subjects.cpp.getRequirements());
    console.log(Subjects.cpp.getAvailableTeacher());
    console.log('Java:');
    Subjects.java.setTeacher(Subjects.cTeacher);
    console.log(Subjects.java.getRequirements());
    console.log(Subjects.java.getAvailableTeacher());
    console.log('React:');
    Subjects.react.setTeacher(Subjects.cTeacher);
    console.log(Subjects.react.getRequirements());
    console.log(Subjects.react.getAvailableTeacher());
})(Subjects || (Subjects = {}));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/main.ts"]();
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxpQkFBUSxDQUFDLENBQUM7SUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFLLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztJQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQUssQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUM7QUFDM0MsQ0FBQyxFQW5GUyxRQUFRLEtBQVIsUUFBUSxRQWtGeUI7Ozs7Ozs7O1VFbEYzQztVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFza180Ly4vanMvbWFpbi50cyIsIndlYnBhY2s6Ly90YXNrXzQvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90YXNrXzQvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Rhc2tfNC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsibmFtZXNwYWNlIFN1YmplY3RzIHtcbiAgZXhwb3J0IGludGVyZmFjZSBUZWFjaGVyIHtcbiAgICBmaXJzdE5hbWU6IHN0cmluZztcbiAgICBsYXN0TmFtZTogc3RyaW5nO1xuICAgIGV4cGVyaWVuY2VUZWFjaGluZ0M/OiBudW1iZXI7XG4gICAgZXhwZXJpZW5jZVRlYWNoaW5nUmVhY3Q/OiBudW1iZXI7XG4gIH1cblxuICBleHBvcnQgY2xhc3MgU3ViamVjdCB7XG4gICAgcHJpdmF0ZSB0ZWFjaGVyOiBUZWFjaGVyO1xuXG4gICAgcHVibGljIHNldFRlYWNoZXIodGVhY2hlcjogVGVhY2hlcik6IHZvaWQge1xuICAgICAgdGhpcy50ZWFjaGVyID0gdGVhY2hlcjtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgY2xhc3MgQ3BwIGV4dGVuZHMgU3ViamVjdCB7XG4gICAgcHVibGljIGdldFJlcXVpcmVtZW50cygpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuICdIZXJlIGlzIHRoZSBsaXN0IG9mIHJlcXVpcmVtZW50cyBmb3IgQ3BwJztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0QXZhaWxhYmxlVGVhY2hlcigpOiBzdHJpbmcge1xuICAgICAgaWYgKHRoaXMudGVhY2hlci5leHBlcmllbmNlVGVhY2hpbmdDKSB7XG4gICAgICAgIHJldHVybiBgQXZhaWxhYmxlIFRlYWNoZXI6ICR7dGhpcy50ZWFjaGVyLmZpcnN0TmFtZX1gO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICdObyBhdmFpbGFibGUgdGVhY2hlcic7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGNsYXNzIEphdmEgZXh0ZW5kcyBTdWJqZWN0IHtcbiAgICBwdWJsaWMgZ2V0UmVxdWlyZW1lbnRzKCk6IHN0cmluZyB7XG4gICAgICByZXR1cm4gJ0hlcmUgaXMgdGhlIGxpc3Qgb2YgcmVxdWlyZW1lbnRzIGZvciBKYXZhJztcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0QXZhaWxhYmxlVGVhY2hlcigpOiBzdHJpbmcge1xuICAgICAgaWYgKHRoaXMudGVhY2hlci5leHBlcmllbmNlVGVhY2hpbmdDKSB7XG4gICAgICAgIHJldHVybiBgQXZhaWxhYmxlIFRlYWNoZXI6ICR7dGhpcy50ZWFjaGVyLmZpcnN0TmFtZX1gO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICdObyBhdmFpbGFibGUgdGVhY2hlcic7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGNsYXNzIFJlYWN0IGV4dGVuZHMgU3ViamVjdCB7XG4gICAgcHVibGljIGdldFJlcXVpcmVtZW50cygpOiBzdHJpbmcge1xuICAgICAgcmV0dXJuICdIZXJlIGlzIHRoZSBsaXN0IG9mIHJlcXVpcmVtZW50cyBmb3IgUmVhY3QnO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRBdmFpbGFibGVUZWFjaGVyKCk6IHN0cmluZyB7XG4gICAgICBpZiAodGhpcy50ZWFjaGVyLmV4cGVyaWVuY2VUZWFjaGluZ1JlYWN0KSB7XG4gICAgICAgIHJldHVybiBgQXZhaWxhYmxlIFRlYWNoZXI6ICR7dGhpcy50ZWFjaGVyLmZpcnN0TmFtZX1gO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICdObyBhdmFpbGFibGUgdGVhY2hlcic7XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuICBleHBvcnQgY29uc3QgY3BwID0gbmV3IENwcCgpO1xuICBleHBvcnQgY29uc3QgamF2YSA9IG5ldyBKYXZhKCk7XG4gIGV4cG9ydCBjb25zdCByZWFjdCA9IG5ldyBSZWFjdCgpO1xuXG4gIGV4cG9ydCBjb25zdCBjVGVhY2hlcjogVGVhY2hlciA9IHtcbiAgICBmaXJzdE5hbWU6ICdKb2huJyxcbiAgICBsYXN0TmFtZTogJ0RvZScsXG4gICAgZXhwZXJpZW5jZVRlYWNoaW5nQzogMTAsXG4gIH07XG5cbiAgY29uc29sZS5sb2coJ0NwcDonKTtcbiAgY3BwLnNldFRlYWNoZXIoY1RlYWNoZXIpO1xuICBjb25zb2xlLmxvZyhjcHAuZ2V0UmVxdWlyZW1lbnRzKCkpO1xuICBjb25zb2xlLmxvZyhjcHAuZ2V0QXZhaWxhYmxlVGVhY2hlcigpKTtcblxuICBjb25zb2xlLmxvZygnSmF2YTonKTtcbiAgamF2YS5zZXRUZWFjaGVyKGNUZWFjaGVyKTtcbiAgY29uc29sZS5sb2coamF2YS5nZXRSZXF1aXJlbWVudHMoKSk7XG4gIGNvbnNvbGUubG9nKGphdmEuZ2V0QXZhaWxhYmxlVGVhY2hlcigpKTtcblxuICBjb25zb2xlLmxvZygnUmVhY3Q6Jyk7XG4gIHJlYWN0LnNldFRlYWNoZXIoY1RlYWNoZXIpO1xuICBjb25zb2xlLmxvZyhyZWFjdC5nZXRSZXF1aXJlbWVudHMoKSk7XG4gIGNvbnNvbGUubG9nKHJlYWN0LmdldEF2YWlsYWJsZVRlYWNoZXIoKSk7XG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IHt9O1xuX193ZWJwYWNrX21vZHVsZXNfX1tcIi4vanMvbWFpbi50c1wiXSgpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9