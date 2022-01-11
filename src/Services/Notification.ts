import { Notyf } from "notyf";

class Notify {
    private notification = new Notyf({ duration: 4000, position: { x: "center", y: "top" } });

    public success(message: string) {
        this.notification.success(message);
    }

    public error(message: string) {
        const msg = this.extractMsg(message);
        this.notification.error(msg);
    }

    private extractMsg(err: any): string {

        if (typeof err === 'string') {
            return err;
        }

        if (typeof err?.response?.data === 'string') { //Backend exact error
            return err.response.data;
        }

        if (Array.isArray(err?.response?.data)) { // Backend exact error list
            return err?.response?.data[0];
        }

        // Must be last
        if (typeof err?.message === 'string') {
            return err.message;
        }

        return "An error occurred, please try again.";


    }

}
const notify = new Notify();
export default notify;