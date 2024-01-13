// Using Function to create object
function createUserFunction(name, id, noOfProjects) {
    return {
      name,
      id,
      noOfProjects,
      getProjects: function() {
        return this.noOfProjects;
      },
      changeName: function(newName) {
        const oldName = this.name;
        this.name = newName;
        return oldName;
      },
      incrementProject: function() {
        return ++this.noOfProjects;
      },
      decrementProject: function() {
        return --this.noOfProjects;
      }
    };
  }
  
  // Using Object.create (prototypal pattern)
  const userPrototype = {
    getProjects: function() {
      return this.noOfProjects;
    },
    changeName: function(newName) {
      const oldName = this.name;
      this.name = newName;
      return oldName;
    },
    incrementProject: function() {
      return ++this.noOfProjects;
    },
    decrementProject: function() {
      return --this.noOfProjects;
    }
  };
  
  function createUserObjectCreate(name, id, noOfProjects) {
    const user = Object.create(userPrototype);
    user.name = name;
    user.id = id;
    user.noOfProjects = noOfProjects;
    return user;
  }
  
  // Using Pseudoclassical Way
  function UserPseudoclassical(name, id, noOfProjects) {
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;
  }
  
  UserPseudoclassical.prototype.getProjects = function() {
    return this.noOfProjects;
  };
  
  UserPseudoclassical.prototype.changeName = function(newName) {
    const oldName = this.name;
    this.name = newName;
    return oldName;
  };
  
  UserPseudoclassical.prototype.incrementProject = function() {
    return ++this.noOfProjects;
  };
  
  UserPseudoclassical.prototype.decrementProject = function() {
    return --this.noOfProjects;
  };
  
  // Using Class
  class UserClass {
    constructor(name, id, noOfProjects) {
      this.name = name;
      this.id = id;
      this.noOfProjects = noOfProjects;
    }
  
    getProjects() {
      return this.noOfProjects;
    }
  
    changeName(newName) {
      const oldName = this.name;
      this.name = newName;
      return oldName;
    }
  
    incrementProject() {
      return ++this.noOfProjects;
    }
  
    decrementProject() {
      return --this.noOfProjects;
    }
  }
  