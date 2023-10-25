import express, { Express } from "express"
import { twilio } from "./src/provider/twillio";
class App {
  private app!: Express;
  private port!: number;
  constructor() {
    this.startApp();
  }
  startApp() {
    this.app = express();
    this.loadGlobalMiddleWare();
    this.loadRouter();
    this.initServer();
  }
  loadGlobalMiddleWare() {
    this.app.use(express.json());
    this.port = 3001;
}
  loadRouter() {
    twilio.sendSms();
  }
  initServer() {
    this.app.listen(this.port, this.callback);
  }
  private callback = () => {
    console.log(`Server listing on port: ${this.port}`);
  };
}
(async () => {
  new App();
})();