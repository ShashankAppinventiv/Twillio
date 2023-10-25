import { Twilio } from "twilio";
import dotenv from 'dotenv'
dotenv.config()
class TwilioClass {
  private authToken: string;
  private accountSid: string;
  private client!:Twilio
  constructor() {
    this.authToken = `${process.env.AUTH_TOKEN}`;
    this.accountSid = `${process.env.ACCOUNT_SID}`;
    console.log(this.accountSid,this.authToken)
    this.client = new Twilio(this.accountSid, this.authToken);
  }
  public sendSms=async()=>{
   try{ this.client.messages.create({from: `${process.env.TWILLIO_NUMBER}`,
        to: '',//write your mobile number,
        body: "Hii, I'm checking twillio"}).then((Response)=>{
            console.log("Message send successfully",Response)
        }).catch((error)=>{
            throw error;
        })}catch(err){
            console.log(err);
        }
  }
}
export const twilio=new TwilioClass();