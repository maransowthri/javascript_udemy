/** Standard Module Pattern */
const UICtrl = (function () {
  let text = "Changed by UI controller";

  function changeText() {
    document.getElementById("heading").innerHTML = `<h1>${text}</h1>`;
  }
  return {
    changeText,
  };
})();

UICtrl.changeText();

/** Revealing Module Pattern */
const ItemCtrl = (function () {
  let data = [];

  function get(id) {
    return data.find((item) => item.id === id);
  }
  function add(item) {
    data.push(item);
  }

  return {
    get,
    add,
  };
})();

ItemCtrl.add({ id: 1, name: "Karan" });
console.log(ItemCtrl.get(1));

/** Singleton Pattern */
const Singleton = (function () {
  let obj = null;
  function getInstance() {
    return new Object({ name: "Karan" });
  }

  return {
    getInstance: function () {
      if (!obj) {
        obj = getInstance();
      }
      return obj;
    },
  };
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();
console.log(instanceA === instanceB);

/** Factory Pattern */
class MembersFactory {
  createMember(name, type) {
    let member = null;
    if (type === "premium") {
      member = new PremiumMembership(name);
    } else {
      member = new StandardMembership(name);
    }
    member.type = type;
    member.description = function () {
      return `Name: ${member.name}, Plan: ${member.type}, Cost: ${member.cost}`;
    };
    return member;
  }
}

class PremiumMembership {
  constructor(name) {
    this.name = name;
    this.cost = 100;
  }
}
class StandardMembership {
  constructor(name) {
    this.name = name;
    this.cost = 10;
  }
}

const membersFactory = new MembersFactory();
let members = [];
members.push(membersFactory.createMember("Karan", "premium"));
members.push(membersFactory.createMember("Kalees", "standard"));

for (let { name, type, cost, description } of members) {
  console.log(name, type, cost);
  console.log(description());
}

console.log(membersFactory.members);

/** Oberver pattern */
class EventObserver {
  constructor() {
    this.observers = [];
  }

  subscribe(func) {
    this.observers.push(func);
    console.log(`${func.name} has been added`);
  }

  unsubscribe(func) {
    this.observers = this.observers.filter((item) => item !== func);
  }

  fire() {
    for (let observer of this.observers) {
      observer.call();
    }
  }
}

const observerObj = new EventObserver();

document.getElementById("subscribe1").addEventListener("click", () => {
  observerObj.subscribe(startedTime1);
});

document.getElementById("unsubscribe1").addEventListener("click", () => {
  observerObj.unsubscribe(startedTime1);
});

document.getElementById("subscribe2").addEventListener("click", () => {
  observerObj.subscribe(startedTime2);
});

document.getElementById("unsubscribe2").addEventListener("click", () => {
  observerObj.unsubscribe(startedTime2);
});

document.getElementById("fire").addEventListener("click", () => {
  observerObj.fire();
});

function startedTime1() {
  console.log(`Started 1 at ${new Date().getMilliseconds()}`);
}

function startedTime2() {
  console.log(`Started 2 at ${new Date().getMilliseconds()}`);
}

/** Mediator Pattern */
class User {
  constructor(name) {
    this.name = name;
    this.chatroom = null;
  }
  send(message, to) {
    this.chatroom.send(message, this, to);
  }
  receive(from, to, message) {
    console.log(`From: ${from.name}, To: ${to.name}, Message: ${message}`);
  }
}

class ChatRoom {
  constructor() {
    this.users = [];
  }
  register(user) {
    this.users.push(user);
    user.chatroom = this;
  }
  send(message, from, to) {
    if (to) {
      to.receive(from, to, message);
    } else {
      for (let user of this.users) {
        if (user !== from) {
          user.receive(from, user, message);
        }
      }
    }
  }
}

const karan = new User("Karan");
const kalees = new User("Kalees");
const maran = new User("Maran");
const mahesh = new User("Mahesh");
const chatRoom = new ChatRoom();
chatRoom.register(karan);
chatRoom.register(kalees);
chatRoom.register(maran);
chatRoom.register(mahesh);
karan.send("Hi Kalees, how are you doing?", kalees);
maran.send("Hey Mahesh, what's up?", mahesh);
maran.send("Hey All, Good Morning!");
