// DO NOT MODIFY THE say FUNCTION
function say(name) {
  console.log(`${this.message} ${name}!`);
}

helloMessage = { message: 'Hello,' };
heyThereMessage = { message: 'Hey there,' };

const sayHello = say.bind(helloMessage);

const sayHeyThere = say.bind(heyThereMessage);

sayHello("John");
sayHeyThere("Michael");
