export class Singleton {
  private static _instance: Singleton | null = null;
  
  private constructor(){
    // new not allowed outside the class
  }

  public static getInstance(): Singleton {
    if(Singleton._instance === null) {
      Singleton._instance = new Singleton()
    }
    return Singleton._instance
  }
}

//! const singleton = new Singleton();
//! Error: Constructor of class 'Singleton' is private and only accessible within the class declaration.ts(2673)

const singleton = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

singleton === singleton2 //* true