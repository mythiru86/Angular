"use strict";
(function () {
    var Person = /** @class */ (function () {
        function Person(name, email, phone) {
            if (phone === void 0) { phone = null; }
            this.name = name;
            this.email = email;
            this.phone = phone;
        }
        Person.prototype.toString = function () {
            return "Person(Name=" + this.name + "\tEmail=" + this.email + "\tphone=" + (this.phone || '');
        };
        return Person;
    }());
    var people = [
        new Person('Vivek', 'vivek@conceptarchitect.in', '9036084835'),
        new Person('Sanjay', 'sanjay@conceptarchitect.in')
    ];
    function showPeople() {
        var people = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            people[_i] = arguments[_i];
        }
        for (var _a = 0, people_1 = people; _a < people_1.length; _a++) {
            var person_1 = people_1[_a];
            console.log(person_1.toString());
        }
    }
    showPeople.apply(void 0, people);
})();
