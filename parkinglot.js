import React from "react";

const users = [
  { id: 1, name: "Leanne Graham" },
  { id: 2, name: "Ervin Howell" },
  { id: 3, name: "Clementine Bauch" },
  { id: 4, name: "Patricia Lebsack" }
];

export default class App extends React.Component {
  func() {
    return users.map((user) => {
      return <li id={user.id}>{user.name} </li>;
    });
  }

  render() {
    let usersList = this.func();
    return (
      <ul>
        {usersList.forEach((li) => {
          return li;
        })}
      </ul>
    );
  }
}
