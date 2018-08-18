"use strict";
(function () {
    var people = [
        {
            name: { firstName: 'Vivek', middleName: 'Dutta', lastName: 'Mishra' },
            id: 7,
            phone: '90360848435',
            email: 'vivek@conceptarchitect.in'
        },
        {
            name: 'Sanjay Mall',
            id: 'sanjay',
            email: 'sanjay@sanjay.com'
        },
        {
            name: { firstName: 'Shivanshi', lastName: 'Mishra' },
            id: null,
            email: 'shivanshi@gmail.com'
        }
    ];
    function showPeople() {
        var people = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            people[_i] = arguments[_i];
        }
        for (var _a = 0, people_1 = people; _a < people_1.length; _a++) {
            var person_1 = people_1[_a];
            if (person_1.id)
                console.log('id', person_1.id);
            if (typeof (person_1.name) === 'string') {
                console.log('name', person_1.name);
            }
            else {
                var _b = person_1.name, firstName = _b.firstName, middleName = _b.middleName, lastName = _b.lastName;
                console.log('name', firstName + " " + middleName + " " + lastName);
            }
            console.log('email', person_1.email);
            if (person_1.phone)
                console.log('phone', person_1.phone);
            console.log('');
        }
    }
    showPeople.apply(void 0, people);
})();
