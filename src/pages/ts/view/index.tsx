import * as React from 'react';

interface Person {
  firstName: string;
  lastName: string;
}
function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}
let user = { firstName: "Jane", lastName: "User" };
export default class index extends React.Component {
  render() {
    return (
      <div>
        { greeter(user) }
      </div>
    )
  }
}
