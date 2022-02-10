// import * as functions from "firebase-functions";
// import * as admin from "firebase-admin";
// import * as sgMail from "@sendgrid/mail";
// import firebase from "firebase/app";
import "firebase/firestore";

// export type CustomerDataType = {
//     firstName: string
//     lastName: string
//     servicesYouPayFor: string
//     email: string
//     amount: number
// }

// admin.initializeApp();
// const db  = admin.firestore();
// const fs = firebase.firestore();

// const API_KEY = functions.config().sendgrid.key;
// const TEMPLATE_ID = functions.config().sendgrid.template;
// sgMail.setApiKey(API_KEY);

// const sendEmail = functions.auth.user().onCreate(user => {
//     const msg = {
//         to: user.email,
//         from: 'au25557@yandex.ru',
//         templateId: TEMPLATE_ID,
//         dynamic_template_data: {
//             subject: 'Welcome to my awesom app!',
//             name: user.displayName
//         }
//     };
//     return sgMail.send(msg);
// });

// export const customerAPI = {
//     subscribeCustomer: async (customerData: CustomerDataType) => {
//         try {
//             let qs = await fs.collection('customersWithSubscription').get();
//             let isCustomerExist = qs.docs.map(doc => doc.data()).filter(d => d.email === customerData.email);
//             const collection = fs.collection('customersWithSubscription');
//             if (isCustomerExist.length === 0) {
//                 await collection.add(customerData);
//             } else {
//                 console.log(isCustomerExist)
//                 console.log(isCustomerExist[0])
//                 collection.doc(isCustomerExist[0].id).update(customerData);
//             };
//             return true;
//         } catch {
//             return false;
//         }
//     }
// }