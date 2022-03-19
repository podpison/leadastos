import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { collection, setDoc, getDocs, getFirestore, doc, updateDoc } from "firebase/firestore";
import { AlertTypeWithoutIsOpen } from "../redux/alertReducer";
import { CustomerDataType, ContactUsType } from "../redux/customerReducer";

const firebaseConfig = {
    apiKey: "AIzaSyCPE4sY8lbIlOteJreHvEyzOZsO_fycImA",
    authDomain: "leadastos.firebaseapp.com",
    projectId: "leadastos",
    storageBucket: "leadastos.appspot.com",
    messagingSenderId: "221992455586",
    appId: "1:221992455586:web:7c562cb27423da655976fb",
    measurementId: "G-L6RD5SC82Y"
};

const app = firebase.initializeApp(firebaseConfig);
const fs = getFirestore(app);

export const itemsAPI = {
    getItems: async (itemsType: string) => {
        const itemsSnapshot = await getDocs(collection(fs, itemsType));
        return itemsSnapshot.docs.map(doc => doc.data());
    }
};

export const customerAPI = {
    subscribeCustomer: async (customerData: CustomerDataType | ContactUsType): Promise<AlertTypeWithoutIsOpen> => {
        const currentCollection = 'amount' in customerData ? 'customersWithSubscription' : 'contactUsMessages';
        try {
            const itemsSnapshot = await getDocs(collection(fs, currentCollection));
            const id = itemsSnapshot.docs.filter(doc => doc.data().email === customerData.email)[0]?.id;
            if (!id) {
                const newCustomerRef = doc(collection(fs, currentCollection));
                await setDoc(newCustomerRef, customerData);
            } else {
                const docRef = doc(fs, currentCollection, id)
                await updateDoc(docRef, customerData);
            };
            return {severity: 'success', data: {
                title: 'Success',
                message: 'The operation completed successfuly!'
            }};
        } catch(err) {
            return {severity: 'error', data: {
                title: 'Oops, something went wrong.',
                message: err as string
            }}
        }
    }
}