class Thing {
  public name: string;
  public completed: boolean;

  constructor(name: string){
      this.name = name;
  }

  public complete() {
      this.completed = true;
  }
}

export { Thing };
