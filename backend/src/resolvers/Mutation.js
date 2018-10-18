const Mutations = {
  async createItem(parent, args, ctx, info) {
    //TO DO check logged in

    const item = await ctx.db.mutation.createItem({
      data: {
        ...args
      }
    }, info);

    return item;
  }
  /*
  createDog(parent, args, ctx, info) {
    console.log(args);
    global.dogs = global.dogs || [];
    const newDog = { name: args.name };
    global.dogs.push(newDog);
    return newDog;
  }
  */
};

module.exports = Mutations;
