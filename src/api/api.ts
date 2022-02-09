import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCPE4sY8lbIlOteJreHvEyzOZsO_fycImA",
    authDomain: "leadastos.firebaseapp.com",
    projectId: "leadastos",
    storageBucket: "leadastos.appspot.com",
    messagingSenderId: "221992455586",
    appId: "1:221992455586:web:7c562cb27423da655976fb",
    measurementId: "G-L6RD5SC82Y"
};

firebase.initializeApp(firebaseConfig);

const fs = firebase.firestore();

export const itemsAPI = {
    getItems: async (itemsType: string) => {
        const querySnapshot = await fs.collection(itemsType).get();
        return querySnapshot.docs.map(doc => doc.data());
    }
};

export type CustomerDataType = {
    firstName: string
    lastName: string
    servicesYouPayFor: string
    email: string
    amount: number
}

export const customerAPI = {
    subscribeCustomer: async (customerData: CustomerDataType) => {
        try {
            let qs = await fs.collection('customersWithSubscription').get();
            let isCustomerExist = qs.docs.map(doc => doc.data()).filter(d => d.email === customerData.email);
            if (isCustomerExist.length === 0) {
                await fs.collection('customersWithSubscription').add(customerData);
                return true;
            } else {return false};
        } catch {
            return false;
        }
    }
}