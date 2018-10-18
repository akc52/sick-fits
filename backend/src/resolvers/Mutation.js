const Mutations = {
  createDog(parent, args, ctx, info) {
    console.log(args);
    global.dogs = global.dogs || [];
    const newDog = { name: args.name };
    global.dogs.push(newDog);
    return newDog;
  }
};

module.exports = Mutations;
