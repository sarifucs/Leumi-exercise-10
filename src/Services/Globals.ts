class Globals { }

class DevelopmentGlobals extends Globals {
    public urls = {
        comments: "https://jsonplaceholder.typicode.com/comments"
    }
}

class ProductionGlobals extends Globals {
    public urls = {
        comments: "https://jsonplaceholder.typicode.com/comments"
    }
}
const globals = process.env.NODE_ENV === 'production' ? new ProductionGlobals : new DevelopmentGlobals;
export default globals;