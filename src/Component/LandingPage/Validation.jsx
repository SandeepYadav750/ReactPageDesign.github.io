import * as   Yup from "yup";
import "yup-phone";



export const SignUpSchema = Yup.object({
    Fullname: Yup.string().min(2).max(20).required("Please Enter the Fullname"),
    Email: Yup.string().email('Not a proper email').required("Please Enter the Email"),
    Number: Yup.string().phone("IN", "Please enter a valid phone number").required("Please Enter the Number"),
    Subject: Yup.string().min(2).max(30).required("Please Enter the Subject"),
    Message: Yup.string().min(2).required("Please Enter the Message"),
})
