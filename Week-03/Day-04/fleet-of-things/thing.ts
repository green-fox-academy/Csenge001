class Thing {
    private name: string;
    private completed: boolean = false;
  
    constructor(name: string) {
      this.name = name;
    }
  
    public complete(): void {
      this.completed = true;
    }
  
    getName(): string {
      return this.name;
    }
  
    getCompleted(): boolean {
      return this.completed;
    }
  
    toString(): string {
      return `[${this.completed ? 'x' : ' '}] ${this.name}`;
    }
  }


export { Thing };